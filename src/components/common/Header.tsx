import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      <nav className="sticky z-50 w-full max-w-5xl h-16 px-6 md:px-20 mx-auto backdrop-blur-md bg-black/20 rounded-full border border-white/20 flex items-center justify-between shadow-lg">
        <Link to="/">
          <h1 className="text-2xl font-bold bg-gradient-to-br from-neutral-500 via-neutral-200 to-neutral-950 bg-clip-text text-transparent hover:from-neutral-200 hover:via-neutral-500 hover:to-neutral-950 transition-colors cursor-pointer">
            ApexSoft
          </h1>
        </Link>

        <div className="flex gap-6 font-medium items-center justify-between">
          <ul className="hidden md:flex gap-6 font-medium text-neutral-400">
            <li><Link to="/" className="hover:text-neutral-100 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-neutral-100 transition-colors">About</Link></li>
            <li><Link to="/blog" className="hover:text-neutral-100 transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-neutral-100 transition-colors">Contact</Link></li>
          </ul>
          <Link to="/login">
            <button className="px-4 py-2 text-neutral-100 border border-neutral-700 rounded-full cursor-pointer hover:bg-white/10 transition-colors">
              Login
            </button>
          </Link>
          <button 
            className="md:hidden flex items-center justify-center text-neutral-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-8 font-medium text-neutral-100 text-center text-xl">
            <li>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/login" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-8 py-2 border border-neutral-400 rounded-full inline-block"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
