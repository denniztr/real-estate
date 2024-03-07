/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from '../mob-menu/menu';

function Header({
  scrollToListings,
  scrollToNewsroom,
  scrollToContact,
  scrollToTeam,
  scrollToTop,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (scrollFunction, event) => {
    event.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      scrollFunction();
    }, 0.1); // Установите задержку, равную времени анимации закрытия хедера
  };

  return (
    <motion.header
      className={`w-full bg-white drop-shadow-sm md:block fixed z-50 top-0 opacity-95 ${
        visible ? '' : 'hidden'
      }`}
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-4 md:px-36 px-4 flex flex-row justify-between">
        <div>
          <div className="flex flex-row gap-2 items-center">
            <img
              src="/public/logo.svg"
              alt="Logo"
              className="w-8 h-8 cursor-pointer"
              onClick={() => scrollToTop()}
            />
            <span className="text-md text-black tracking-tight font-semibold">
              Estate
            </span>
          </div>
        </div>
        <nav className="hidden md:flex flex-row flex-nowrap gap-12 text-sm items-center">
          <a
            className="transition duration-200 hover:text-orange-600/90 cursor-pointer"
            onClick={() => scrollToListings()}
          >
            Listings
          </a>
          <a
            className="transition duration-200 hover:text-orange-600/90 cursor-pointer"
            onClick={() => scrollToNewsroom()}
          >
            Newsroom
          </a>
          <a
            className="transition duration-200 hover:text-orange-600/90 cursor-pointer"
            onClick={() => scrollToContact()}
          >
            Contact
          </a>
          <a
            className="transition duration-200 hover:text-orange-600/90 cursor-pointer"
            onClick={() => scrollToTeam()}
          >
            Our team
          </a>
        </nav>
        <Menu handleClick={handleClick} />
      </div>
      {isOpen && (
        <motion.div
          className="p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-row gap-8 justify-center">
            <a
              onClick={(event) => {
                handleMenuClick(scrollToListings, event);
              }}
              className="text-md font-semibold tracking-wide"
              href="#"
            >
              Listings
            </a>
            <a
              onClick={(event) => {
                handleMenuClick(scrollToNewsroom, event);
              }}
              className="text-md font-semibold tracking-wide"
              href="#"
            >
              Newsroom
            </a>
            <a
              onClick={(event) => {
                handleMenuClick(scrollToContact, event);
              }}
              className="text-md font-semibold tracking-wide"
              href="#"
            >
              Contact
            </a>
            <a
              onClick={(event) => {
                handleMenuClick(scrollToTeam, event);
              }}
              className="text-md font-semibold tracking-wide"
              href="#"
            >
              Our team
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

export default Header;
