import { Outlet, Navigate, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../lib/firebase';
import { LogOut, LayoutDashboard, FileText, Image, Briefcase } from 'lucide-react';
import { signOut } from 'firebase/auth';

export default function AdminLayout() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-stone-100">Đang tải...</div>;
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="min-h-screen bg-surface-container-low flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-outline-variant/30 hidden md:flex flex-col">
        <div className="p-6 border-b border-outline-variant/30">
          <h2 className="font-headline font-bold text-xl tracking-tight">Admin Panel</h2>
          <p className="text-xs text-on-surface-variant mt-1">{user.email}</p>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-container transition-colors text-sm font-medium">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link to="/admin/about" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-container transition-colors text-sm font-medium">
            <FileText size={18} /> Trang About
          </Link>
          <Link to="/admin/projects" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-container transition-colors text-sm font-medium">
            <Briefcase size={18} /> Trang Projects
          </Link>
        </nav>
        <div className="p-4 border-t border-outline-variant/30">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg hover:bg-error/10 text-error transition-colors text-sm font-bold"
          >
            <LogOut size={18} /> Đăng xuất
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
