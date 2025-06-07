import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Header = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky z-50 w-full max-w-5xl h-16 px-6 md:px-20 mx-auto backdrop-blur-md bg-black/20 rounded-full border border-white/20 flex items-center justify-between shadow-lg"
    >
      <Link to="/">
        <motion.h1 
          className="text-2xl font-bold bg-gradient-to-br from-neutral-500 via-neutral-200 to-neutral-950 bg-clip-text text-transparent hover:from-neutral-200 hover:via-neutral-500 hover:to-neutral-950 transition-colors cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          ApexSoft
        </motion.h1>
      </Link>

      <div className="flex gap-6 font-medium items-center justify-between">
        <ul className="hidden md:flex gap-6 font-medium text-neutral-400">
          {['/', '/about', '/blog', '/contact'].map((path, index) => (
            <motion.li 
              key={path}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <Link to={path}>
                <motion.span
                  whileHover={{ 
                    color: '#ffffff',
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="inline-block"
                >
                  {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                </motion.span>
              </Link>
            </motion.li>
          ))}
        </ul>
        <Link to="/login">
          <motion.button 
            className="px-4 py-2 text-neutral-100 border border-neutral-700 rounded-full cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(255, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Login
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Header;
