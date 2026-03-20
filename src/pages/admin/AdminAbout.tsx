import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export default function AdminAbout() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const docRef = doc(db, 'content', 'about');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setContent(docSnap.data().description || '');
        }
      } catch (error) {
        console.error("Lỗi Firestore:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await setDoc(doc(db, 'content', 'about'), { description: content }, { merge: true });
      alert('Đã lưu thành công!');
    } catch (error) {
      console.error(error);
      alert('Lỗi khi lưu.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8">Đang tải dữ liệu...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-headline font-bold mb-8">Quản lý Trang About</h1>
      
      <form onSubmit={handleSave} className="bg-white p-6 border border-outline-variant/30 rounded-xl shadow-sm max-w-2xl">
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Đoạn giới thiệu ngắn</label>
          <textarea 
            rows={5}
            className="w-full bg-surface-container border border-outline-variant/50 p-4 text-sm focus:outline-none focus:border-primary transition-colors"
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="Nhập nội dung giới thiệu..."
          />
        </div>
        <button 
          type="submit" 
          disabled={saving}
          className="bg-on-surface text-white px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] hover:bg-primary transition-colors disabled:opacity-50"
        >
          {saving ? 'Đang lưu...' : 'Lưu Thay Đổi'}
        </button>
      </form>
    </div>
  );
}
