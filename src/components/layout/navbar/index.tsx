'use client';

import { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import Nav from './Nav';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{isMobile ? <MobileNav /> : <Nav />}</>;
};

export default Navbar;
