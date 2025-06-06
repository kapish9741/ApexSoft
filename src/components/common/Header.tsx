import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="sticky z-50 w-full max-w-5xl h-16 px-6 md:px-20 mx-auto backdrop-blur-md bg-black/20 rounded-full border border-white/20 flex items-center justify-between shadow-lg">
      <Link to="/">
        <h1 className="text-2xl font-bold bg-gradient-to-br from-neutral-500 via-neutral-200 to-neutral-950 bg-clip-text text-transparent hover:from-neutral-200 hover:via-neutral-500 hover:to-neutral-950 transition-colors cursor-pointer">
          ApexSoft
        </h1>
      </Link>

      <div className="flex gap-6 font-medium items-center justify-between">
        <ul className="hidden md:flex gap-6 font-medium text-neutral-400">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Link to="/login">
          <button className="px-4 py-2 text-neutral-100 border border-neutral-700 rounded-full cursor-pointer">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
