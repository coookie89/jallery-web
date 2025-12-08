import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const checkHeroBottom = () => {
      const el = document.getElementById('home-hero-text');
      if (!el) {
        setIsAtBottom(false);
        return;
      }
      const rect = el.getBoundingClientRect();

      // show when the hero's bottom reaches the top of the viewport (allow small threshold)
      const threshold = 0; // px
      setIsAtBottom(rect.bottom <= threshold);
    };

    window.addEventListener('scroll', checkHeroBottom, { passive: true });
    window.addEventListener('resize', checkHeroBottom);
    // run immediately and shortly after mount to handle layout shifts
    checkHeroBottom();
    const t = setTimeout(checkHeroBottom, 200);
    return () => {
      window.removeEventListener('scroll', checkHeroBottom);
      window.removeEventListener('resize', checkHeroBottom);
      clearTimeout(t);
    };
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-transparent"
      aria-hidden={false}
    >
      {/* Centered small logo text visible only when page is near bottom */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Link
          to="/"
          className={`pointer-events-auto transition-opacity duration-300 ${
            isAtBottom ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={!isAtBottom}
        >
          <span className="text-2xl font-medium text-white">程瓊慧 Joan Chen</span>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Jallery</h1>
          </Link>

          {/* Navigation */}
          <nav className="md:flex items-center space-x-2">
            <Link to="/" className='bg-red px-3 py-2 hover:bg-white transition duration-800 hover:cursor-pointer rounded-sm'>
                Contact
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
