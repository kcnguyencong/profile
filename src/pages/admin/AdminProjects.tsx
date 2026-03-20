import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type FieldType = 'text' | 'textarea' | 'image';

interface BlockField {
  id: string;
  name: string;
  type: FieldType;
  value: string;
}

interface DynamicBlock {
  id: string;
  title: string;
  description: string;
  fields: BlockField[];
}

interface Project {
  id?: string;
  title: string;
  role: string;
  year: string;
  image: string;
  cols: string;
  isFull: boolean;
  field?: string;
  deliverables?: string;
  dynamicBlocks?: DynamicBlock[];
  featured?: boolean;
  color?: string;
  description?: string;
}

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'casestudy'>('overview');
  
  const [formData, setFormData] = useState<Project>({
    title: '', role: '', year: '', image: '', cols: 'md:col-span-8', isFull: false,
    field: '', deliverables: '', dynamicBlocks: [],
    featured: false, color: '#e5e5e5', description: ''
  });

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const data: Project[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as Project);
      });
      setProjects(data);
    } catch (error) {
      console.error("Lỗi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const dataToSave = { ...formData };
      if (editingId) {
        await updateDoc(doc(db, 'projects', editingId), dataToSave as any);
      } else {
        await addDoc(collection(db, 'projects'), dataToSave as any);
      }
      setEditingId(null);
      setFormData({ 
        title: '', role: '', year: '', image: '', cols: 'md:col-span-8', isFull: false, 
        field: '', deliverables: '', dynamicBlocks: [], featured: false, color: '#e5e5e5', description: '' 
      });
      setActiveTab('overview');
      fetchProjects();
      alert('Đã lưu thành công!');
    } catch (error) {
      console.error(error);
      alert('Lỗi khi lưu dự án.');
    }
  };

  const handleEdit = (proj: Project) => {
    setEditingId(proj.id!);
    setFormData({
      ...proj,
      field: proj.field || '',
      deliverables: proj.deliverables || '',
      dynamicBlocks: proj.dynamicBlocks || [],
      featured: proj.featured || false,
      color: proj.color || '#e5e5e5',
      description: proj.description || ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Bạn có chắc muốn xóa dự án này?')) {
      await deleteDoc(doc(db, 'projects', id));
      fetchProjects();
    }
  };

  // --- Dynamic Block Handlers ---
  const addBlock = () => {
    setFormData(prev => ({
      ...prev,
      dynamicBlocks: [
        ...(prev.dynamicBlocks || []),
        { id: Date.now().toString(), title: '', description: '', fields: [] }
      ]
    }));
  };

  const updateBlock = (blockId: string, key: keyof DynamicBlock, value: any) => {
    setFormData(prev => ({
      ...prev,
      dynamicBlocks: prev.dynamicBlocks?.map(b => b.id === blockId ? { ...b, [key]: value } : b)
    }));
  };

  const removeBlock = (blockId: string) => {
    if(!confirm('Xóa Block này?')) return;
    setFormData(prev => ({
      ...prev,
      dynamicBlocks: prev.dynamicBlocks?.filter(b => b.id !== blockId)
    }));
  };

  const addField = (blockId: string) => {
    setFormData(prev => ({
      ...prev,
      dynamicBlocks: prev.dynamicBlocks?.map(b => {
        if (b.id === blockId) {
          return {
             ...b,
             fields: [...b.fields, { id: Date.now().toString(), name: '', type: 'text', value: '' }]
          };
        }
        return b;
      })
    }));
  };

  const updateField = (blockId: string, fieldId: string, key: keyof BlockField, value: any) => {
    setFormData(prev => ({
      ...prev,
      dynamicBlocks: prev.dynamicBlocks?.map(b => {
        if (b.id === blockId) {
          return {
            ...b,
            fields: b.fields.map(f => f.id === fieldId ? { ...f, [key]: value } : f)
          };
        }
        return b;
      })
    }));
  };

  const removeField = (blockId: string, fieldId: string) => {
    setFormData(prev => ({
      ...prev,
      dynamicBlocks: prev.dynamicBlocks?.map(b => {
        if (b.id === blockId) {
          return { ...b, fields: b.fields.filter(f => f.id !== fieldId) };
        }
        return b;
      })
    }));
  };

  if (loading) return <div className="p-8">Đang tải dữ liệu...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-headline font-bold mb-8">Quản lý Dự Án & Case Study Blocks</h1>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
        {/* FORM PANEL */}
        <form onSubmit={handleSave} className="bg-white border border-outline-variant/30 rounded-xl shadow-sm h-fit xl:sticky top-8">
          <div className="p-6 border-b border-stone-200">
            <h2 className="text-xl font-bold">{editingId ? 'Sửa dự án' : 'Thêm dự án mới'}</h2>
          </div>
          
          <div className="flex border-b border-stone-200 bg-stone-50">
            <button 
              type="button" 
              className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest ${activeTab === 'overview' ? 'bg-white text-primary border-b-2 border-primary' : 'text-stone-500'}`}
              onClick={() => setActiveTab('overview')}
            >
              Tổng quan
            </button>
            <button 
              type="button" 
              className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest ${activeTab === 'casestudy' ? 'bg-white text-primary border-b-2 border-primary' : 'text-stone-500'}`}
              onClick={() => setActiveTab('casestudy')}
            >
              Case Study (CMS)
            </button>
          </div>

          <div className="p-6 max-h-[65vh] overflow-y-auto">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                
                <div className="flex items-center gap-2 mb-4 bg-primary/5 p-4 rounded border border-primary/20">
                  <input type="checkbox" id="featured" checked={formData.featured} onChange={e => setFormData({...formData, featured: e.target.checked})} className="w-4 h-4 cursor-pointer" />
                  <label htmlFor="featured" className="text-sm font-bold text-primary cursor-pointer w-full">Hiển thị (Dự án Chọn Lọc) trên Trang Chủ</label>
                </div>

                {formData.featured && (
                  <div className="grid grid-cols-2 gap-4 mb-4 bg-primary/5 p-4 rounded border border-primary/20">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-1 text-primary">Mã Màu nền (Trang chủ)</label>
                      <div className="flex bg-white rounded border border-primary/20 overflow-hidden h-10">
                        <input type="color" className="w-10 h-12 p-0 border-0 cursor-pointer" value={formData.color} onChange={e => setFormData({...formData, color: e.target.value})} />
                        <input type="text" className="w-full px-3 text-sm focus:outline-none bg-transparent font-mono" value={formData.color} onChange={e => setFormData({...formData, color: e.target.value})} placeholder="#0041c8" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-1 text-primary">Mô tả ngắn (Trang chủ)</label>
                      <textarea rows={2} required={formData.featured} className="w-full bg-white border border-primary/20 p-2 text-sm focus:outline-none rounded" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Dòng mô tả ngắn ngoài homepage..." />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1">Tên Dự Án</label>
                  <input required type="text" className="w-full bg-surface-container border border-outline-variant/50 p-3 text-sm focus:outline-none rounded" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1">Vai trò</label>
                    <input required type="text" className="w-full bg-surface-container border border-outline-variant/50 p-3 text-sm focus:outline-none rounded" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1">Năm</label>
                    <input required type="text" className="w-full bg-surface-container border border-outline-variant/50 p-3 text-sm focus:outline-none rounded" value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1">Thẻ / Lĩnh vực (Hiển thị góc ảnh trang chủ)</label>
                  <input type="text" className="w-full bg-surface-container border border-outline-variant/50 p-3 text-sm focus:outline-none rounded" value={formData.field} onChange={e => setFormData({...formData, field: e.target.value})} placeholder="VD: Fintech" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1">Sản phẩm (Deliverables)</label>
                  <input type="text" className="w-full bg-surface-container border border-outline-variant/50 p-3 text-sm focus:outline-none rounded" value={formData.deliverables} onChange={e => setFormData({...formData, deliverables: e.target.value})} placeholder="VD: Web & Mobile App" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1">Link Ảnh Đại Diện (Homepage Grid)</label>
                  <input type="text" className="w-full bg-surface-container border border-outline-variant/50 p-3 text-sm focus:outline-none rounded" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} />
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1">Tailwind CSS Grid Class (Cols - Trang Projects)</label>
                  <input required type="text" className="w-full bg-surface-container border border-outline-variant/50 p-3 text-sm focus:outline-none rounded" value={formData.cols} onChange={e => setFormData({...formData, cols: e.target.value})} />
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <input type="checkbox" id="isFull" checked={formData.isFull} onChange={e => setFormData({...formData, isFull: e.target.checked})} />
                  <label htmlFor="isFull" className="text-sm font-bold">Hiển thị Full chiều rộng dạng Lưới (isFull)</label>
                </div>
              </div>
            )}

            {activeTab === 'casestudy' && (
              <div className="space-y-8">
                {(!formData.dynamicBlocks || formData.dynamicBlocks.length === 0) && (
                  <div className="text-center py-8 bg-stone-50 border border-dashed border-stone-300 rounded">
                     <p className="text-sm text-stone-500 mb-4">Dự án này chưa có Block hiển thị nào.</p>
                     <button type="button" onClick={addBlock} className="bg-primary text-white px-4 py-2 text-xs font-bold uppercase tracking-widest rounded">+ Tạo Block Mới</button>
                  </div>
                )}
                
                {(formData.dynamicBlocks || []).map((block, bIdx) => (
                  <div key={block.id} className="bg-white border-2 border-primary/20 p-4 relative rounded-xl shadow-sm">
                    <div className="absolute -top-3 left-4 bg-white px-2 py-0.5 border border-primary/20 text-xs font-bold uppercase tracking-widest text-primary rounded-full">Block {bIdx + 1}</div>
                    <button type="button" onClick={() => removeBlock(block.id)} className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-widest text-error hover:bg-error/10 px-2 py-1 rounded transition-colors">Xóa Block</button>
                    
                    <div className="mt-4 space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest mb-1 text-stone-500">Tên Block (Title)</label>
                        <input type="text" className="w-full bg-stone-50 border border-stone-200 p-2 text-sm focus:outline-none focus:border-primary font-bold rounded" value={block.title} onChange={e => updateBlock(block.id, 'title', e.target.value)} placeholder="VD: Bối Cảnh & Thách Thức" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest mb-1 text-stone-500">Mô tả Block (Description)</label>
                        <textarea rows={2} className="w-full bg-stone-50 border border-stone-200 p-2 text-sm focus:outline-none focus:border-primary rounded" value={block.description} onChange={e => updateBlock(block.id, 'description', e.target.value)} placeholder="Mô tả chung..." />
                      </div>

                      <div className="mt-6 pt-4 border-t border-stone-100">
                        <label className="block text-xs font-bold uppercase tracking-widest mb-4 flex justify-between items-center">
                          <span>Các Thuộc Tính Của Block</span>
                          <button type="button" onClick={() => addField(block.id)} className="text-[10px] text-primary hover:underline bg-primary/10 px-2 py-1 rounded">+ Thêm Thuộc Tính</button>
                        </label>
                        
                        <div className="space-y-4">
                          {block.fields.map((field, fIdx) => (
                            <div key={field.id} className="bg-stone-50 border border-stone-200 p-3 relative rounded">
                              <button type="button" onClick={() => removeField(block.id, field.id)} className="absolute top-3 right-3 text-[10px] uppercase font-bold text-stone-400 hover:text-error">✕</button>
                              
                              <div className="grid grid-cols-2 gap-4 mb-3 pr-8">
                                <div>
                                  <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">Định dạng (Type)</label>
                                  <select className="w-full border border-stone-200 p-2 text-xs focus:outline-none rounded bg-white" value={field.type} onChange={e => updateField(block.id, field.id, 'type', e.target.value as FieldType)}>
                                    <option value="text">Input Text (Chữ ngắn)</option>
                                    <option value="textarea">Textarea (Đoạn văn dài)</option>
                                    <option value="image">Image (URL Hình ảnh)</option>
                                  </select>
                                </div>
                                <div>
                                  <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">Tên Thuộc Tính</label>
                                  <input type="text" className="w-full border border-stone-200 p-2 text-xs focus:outline-none rounded" value={field.name} onChange={e => updateField(block.id, field.id, 'name', e.target.value)} placeholder="VD: Ảnh Phác Thảo" />
                                </div>
                              </div>
                              
                              <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Giá Trị Nội Dung</label>
                                {field.type === 'textarea' ? (
                                  <div className="bg-white [&_.ql-container]:min-h-[100px] [&_.ql-container]:text-sm">
                                    <ReactQuill theme="snow" value={field.value} onChange={val => updateField(block.id, field.id, 'value', val)} placeholder="Nhập đoạn văn bản (hỗ trợ in đậm, nghiêng, list)..." />
                                  </div>
                                ) : (
                                  <input type="text" className="w-full border border-primary/30 p-2 text-sm focus:outline-none rounded focus:border-primary bg-white" value={field.value} onChange={e => updateField(block.id, field.id, 'value', e.target.value)} placeholder={field.type === 'image' ? 'Nhập đường dẫn URL ảnh...' : 'Nhập nội dung ngắn...' } />
                                )}
                              </div>
                            </div>
                          ))}
                          
                          {block.fields.length === 0 && (
                            <p className="text-[10px] italic text-stone-400">Block này hiện đang trống thuộc tính.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {(formData.dynamicBlocks && formData.dynamicBlocks.length > 0) && (
                  <button type="button" onClick={addBlock} className="w-full border-2 border-dashed border-primary/50 text-primary py-4 font-bold uppercase tracking-widest text-xs hover:bg-primary hover:border-primary hover:text-white transition-all rounded-xl mt-4">
                     + Thêm Block Mới Vào Dự Án Này
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="p-6 border-t border-stone-200 flex gap-4 bg-stone-50 rounded-b-xl">
            <button type="submit" className="bg-on-surface text-white px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] flex-1 hover:bg-primary transition-colors rounded">
              {editingId ? 'Lưu Phiên Bản' : 'Thêm Dự Án'}
            </button>
            {editingId && (
              <button type="button" onClick={() => { setEditingId(null); setFormData({ title: '', role: '', year: '', image: '', cols: 'md:col-span-8', isFull: false, field: '', deliverables: '', dynamicBlocks: [], featured: false, color: '#e5e5e5', description: '' }); }} className="bg-stone-200 text-stone-800 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] hover:bg-stone-300 transition-colors rounded">
                Hủy Biên Tập
              </button>
            )}
          </div>
        </form>

        {/* LIST PANEL */}
        <div className="bg-white p-6 border border-outline-variant/30 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-6">Dự Án Đã Xuất Bản ({projects.length})</h2>
          <div className="space-y-4">
            {projects.length === 0 ? <p className="text-sm text-stone-500">Chưa có dự án nào.</p> : null}
            {projects.map(p => (
              <div key={p.id} className={`border p-4 flex justify-between items-center group hover:border-primary transition-colors rounded ${p.featured ? 'border-primary/50 bg-primary/5' : 'border-stone-200'}`}>
                <div className="flex gap-4 items-center w-2/3">
                  {p.image ? (
                    <img src={p.image} className="w-16 h-12 object-cover shrink-0 rounded" />
                  ) : (
                    <div className="w-16 h-12 bg-stone-100 flex items-center justify-center text-[10px] text-stone-400 font-bold uppercase rounded">No Img</div>
                  )}
                  <div className="overflow-hidden">
                    <h3 className="font-bold text-sm truncate">{p.title || 'Dự án không tên'}</h3>
                    <p className="text-xs text-stone-500 truncate">{p.year} • {p.role}</p>
                    <div className="flex gap-2">
                       {p.featured && (
                         <span className="inline-block mt-1 bg-primary text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-widest">★ Nổi Bật (Trang chủ)</span>
                       )}
                       {(p.dynamicBlocks && p.dynamicBlocks.length > 0) && (
                         <span className="inline-block mt-1 bg-stone-200 text-stone-700 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-widest">{p.dynamicBlocks.length} Blocks</span>
                       )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={(e) => { e.stopPropagation(); handleEdit(p); }} className="text-xs font-bold text-primary uppercase p-2 border border-primary/20 hover:bg-primary/10 rounded">Sửa</button>
                  <button onClick={(e) => handleDelete(p.id!, e)} className="text-xs font-bold text-error uppercase p-2 border border-error/20 hover:bg-error/10 rounded">Xóa</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
