import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

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
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      if (!id) return;
      try {
        const docRef = doc(db, 'projects', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProject({ id: docSnap.id, ...docSnap.data() } as Project);
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <p className="font-body text-stone-500 uppercase tracking-widest font-bold">Đang tải dữ liệu...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
        <h1 className="font-headline text-4xl font-bold mb-4">Không tìm thấy Dự án</h1>
        <Link to="/projects" className="text-primary hover:underline uppercase font-bold text-xs tracking-widest">Quay lại danh sách</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-32"
    >
      <header className="max-w-[1100px] mx-auto px-8 mb-24">
        <Link to="/projects" className="inline-flex items-center gap-2 text-stone-400 hover:text-primary transition-colors mb-12 font-body text-xs font-bold uppercase tracking-widest">
          <ArrowLeft size={16} /> Quay lại Dự Án
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-12">
            <h1 className="font-headline text-6xl md:text-8xl font-black leading-tight tracking-tighter mb-12 text-on-surface">
              {project.title}
            </h1>
          </div>
          <div className="md:col-span-12 mt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-stone-100">
              {[
                { label: 'Role', val: project.role },
                { label: 'Time', val: project.year },
                { label: 'Field', val: project.field || '—' },
                { label: 'Deliverables', val: project.deliverables || '—' }
              ].map(item => (
                <div key={item.label}>
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-2">{item.label}</span>
                  <span className="font-body text-sm font-bold text-on-surface">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Render Headless API Dynamic Blocks */}
      <div className="space-y-32">
        {(project.dynamicBlocks || []).map((block, bIdx) => {
          // Check if block has continuous images to potentially cluster them
          // For simplicity, we just render them sequentially right now, but group them conceptually.
          
          return (
            <section key={block.id} className="max-w-[1100px] mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                
                {/* Block Left Side: Title */}
                <div className="md:col-span-4">
                  <div className="sticky top-32">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">0{bIdx + 1}</span>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight">
                      {block.title || 'Untitled Section'}
                    </h2>
                  </div>
                </div>

                {/* Block Right Side: Content */}
                <div className="md:col-span-8">
                  {block.description && (
                    <p className="font-headline text-xl leading-relaxed text-on-surface-variant mb-16 italic border-l-4 border-stone-200 pl-6">
                      {block.description}
                    </p>
                  )}

                  <div className="space-y-16">
                    {block.fields.map((field, fIdx) => (
                      <div key={field.id} className="relative">
                        
                        {/* Text Field Layout */}
                        {field.type === 'text' && (
                          <div className="bg-stone-50 p-8 border-l-2 border-primary">
                            {field.name && (
                              <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-3">{field.name}</h4>
                            )}
                            <p className="font-headline text-2xl font-bold text-on-surface">{field.value}</p>
                          </div>
                        )}

                        {/* Textarea Layout (Rich Text) */}
                        {field.type === 'textarea' && (
                          <div className="space-y-4">
                            {field.name && (
                              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">{field.name}</h4>
                            )}
                            <div 
                              className="font-headline text-lg leading-relaxed text-on-surface-variant [&>p]:mb-6 [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:mb-6 [&>h1]:text-on-surface [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mb-6 [&>h2]:text-on-surface [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mb-4 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-6 [&>ol>li]:mb-2 [&>a]:text-primary [&>a]:underline [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-xl"
                              dangerouslySetInnerHTML={{ __html: field.value }}
                            />
                          </div>
                        )}

                        {/* Image Layout */}
                        {field.type === 'image' && (
                          <div className="bg-white overflow-hidden group">
                            <div className="bg-stone-100 overflow-hidden rounded-xl">
                              <img src={field.value} alt={field.name} className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700" referrerPolicy="no-referrer" />
                            </div>
                            {field.name && (
                              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-stone-400 mt-6 text-center">
                                {field.name}
                              </p>
                            )}
                          </div>
                        )}

                      </div>
                    ))}
                    
                    {block.fields.length === 0 && !block.description && (
                      <p className="text-stone-300 italic text-sm">Nội dung đang được cập nhật...</p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {(!project.dynamicBlocks || project.dynamicBlocks.length === 0) && (
          <div className="max-w-[1100px] mx-auto px-8 py-32 text-center text-stone-400 italic">
            Dự án này chưa có chi tiết Case Study.
          </div>
        )}
      </div>
    </motion.div>
  );
}
