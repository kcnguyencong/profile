import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Dự án', path: '/projects' },
    { name: 'Kỹ năng', path: '/skills' },
    { name: 'Về tôi', path: '/' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <Link to="/" className="font-headline text-2xl font-black tracking-tighter text-stone-900">
          DESIGNER
        </Link>
        
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-body text-xs uppercase tracking-widest font-medium transition-colors duration-300 relative py-1 ${
                  isActive ? 'text-primary font-bold' : 'text-stone-600 hover:text-primary'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-3 font-body text-xs uppercase tracking-widest font-bold transition-transform active:scale-95">
          Liên hệ
        </button>
      </div>
    </nav>
  );
}
