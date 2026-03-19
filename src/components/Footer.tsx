import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 border-t border-stone-200 bg-stone-50 mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-screen-2xl mx-auto">
        <Link to="/" className="font-headline text-lg font-bold text-stone-900">
          DESIGNER
        </Link>
        <p className="font-body text-sm tracking-tight text-stone-500">
          © 2024 DESIGNER. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="font-body text-sm tracking-tight text-stone-500 hover:text-stone-900 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="font-body text-sm tracking-tight text-stone-500 hover:text-stone-900 transition-colors">
            Dribbble
          </a>
          <a href="#" className="font-body text-sm tracking-tight text-stone-500 hover:text-stone-900 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
