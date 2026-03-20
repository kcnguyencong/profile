import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const [user, userLoading] = useAuthState(auth);

  if (userLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-surface-container-low">Đang tải...</div>;
  }

  // If already logged in, redirect to admin
  if (user) {
    return <Navigate to="/admin" replace />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (err: any) {
      setError('Đăng nhập thất bại. Vui lòng kiểm tra lại email hoặc mật khẩu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface-container-low flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-12 w-full max-w-md shadow-lg">
        <div className="mb-10 text-center">
          <h1 className="font-headline text-3xl font-black text-on-surface mb-2 tracking-tight">System Login</h1>
          <p className="text-on-surface-variant text-sm font-medium">Vui lòng đăng nhập để truy cập Admin Panel.</p>
        </div>

        {error && (
          <div className="bg-error/10 text-error p-4 mb-6 text-sm font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-on-surface">Email</label>
            <input
              type="email"
              required
              className="w-full bg-surface-container border border-outline-variant/50 p-4 text-sm focus:outline-none focus:border-primary transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-on-surface">Mật khẩu</label>
            <input
              type="password"
              required
              className="w-full bg-surface-container border border-outline-variant/50 p-4 text-sm focus:outline-none focus:border-primary transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-on-surface text-white p-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-primary transition-colors mt-4 disabled:opacity-50"
          >
            {loading ? 'Đang xử lý...' : 'Đăng nhập'}
          </button>
        </form>
      </div>
    </div>
  );
}
