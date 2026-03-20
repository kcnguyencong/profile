export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-headline font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 border border-outline-variant/30 rounded-xl shadow-sm">
          <h3 className="text-lg font-bold mb-2">Trang About</h3>
          <p className="text-sm text-on-surface-variant mb-4">Quản lý giới thiệu bản thân và kỹ năng.</p>
          <a href="/admin/about" className="text-primary text-sm font-bold uppercase tracking-widest hover:underline">Chỉnh sửa &rarr;</a>
        </div>
        <div className="bg-white p-6 border border-outline-variant/30 rounded-xl shadow-sm">
          <h3 className="text-lg font-bold mb-2">Trang Projects</h3>
          <p className="text-sm text-on-surface-variant mb-4">Quản lý danh sách các dự án tiêu biểu.</p>
          <a href="/admin/projects" className="text-primary text-sm font-bold uppercase tracking-widest hover:underline">Chỉnh sửa &rarr;</a>
        </div>
      </div>
    </div>
  );
}
