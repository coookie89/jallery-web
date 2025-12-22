import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// icons imported when needed

const Header: React.FC = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const location = useLocation();

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          {/* <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Jallery</h1>
          </Link> */}

          {/* Logo text: visible when on other pages OR when the home hero is scrolled to bottom */}
          <nav className="md:flex items-center space-x-2">
            <Link
              to="/"
              className={`pointer-events-auto transition-opacity duration-300 ${
                location.pathname !== '/' || isAtBottom ? 'opacity-100' : 'opacity-0'
              } bg-red px-4 py-3 hover:bg-white transition duration-800 hover:cursor-pointer rounded-full`}
              aria-hidden={location.pathname === '/' && !isAtBottom}
            >
              <span>程瓊慧 Joan Chen</span>
            </Link>
          </nav>

          {/* Navigation */}
          <nav className="md:flex items-center space-x-2">
            <Link to="/contact" className='bg-red px-4 py-3 hover:bg-white transition duration-800 hover:cursor-pointer rounded-sm'>
                Contact
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
