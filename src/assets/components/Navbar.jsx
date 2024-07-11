import React, { useState } from 'react';
import Logo from './images/Logo.png';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ scrollToHome, scrollToAbout, scrollToPortfolio, scrollToServices, scrollToCaseStudies, scrollToBlog }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
    if (link === 'home') scrollToHome();
    else if (link === 'about') scrollToAbout();
    else if (link === 'portfolio') scrollToPortfolio();
    else if (link === 'services') scrollToServices();
    else if (link === 'caseStudies') scrollToCaseStudies();
    else if (link === 'blog') scrollToBlog();
    setIsDropdownOpen(false); 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-text shadow-md md:h-auto sm:h-auto h-[10vh]">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="mr-2 pl-2 sm:pl-9" style={{ height: '76px', width: 'auto' }} />
        <div className="hidden lg:flex flex-wrap">
          <h3
            className={`Montserrat text-sm font-normal px-2 sm:px-4 ${activeLink === 'home' ? 'text-accent border-b-2 border-accent' : 'text-primary'}`}
            onClick={() => handleClick('home')}
            style={{ cursor: 'pointer' }}
          >
            Home
          </h3>
          <h3
            className={`Montserrat text-sm font-normal px-2 sm:px-4 ${activeLink === 'about' ? 'text-accent border-b-2 border-accent' : 'text-primary'}`}
            onClick={() => handleClick('about')}
            style={{ cursor: 'pointer' }}
          >
            About Us
          </h3>
          <h3
            className={`Montserrat text-sm font-normal px-2 sm:px-4 ${activeLink === 'portfolio' ? 'text-accent border-b-2 border-accent' : 'text-primary'}`}
            onClick={() => handleClick('portfolio')}
            style={{ cursor: 'pointer' }}
          >
            Portfolio
          </h3>
          <h3
            className={`Montserrat text-sm font-normal px-2 sm:px-4 ${activeLink === 'services' ? 'text-accent border-b-2 border-accent' : 'text-primary'}`}
            onClick={() => handleClick('services')}
            style={{ cursor: 'pointer' }}
          >
            Services
          </h3>
          <h3
            className={`Montserrat text-sm font-normal px-2 sm:px-4 ${activeLink === 'caseStudies' ? 'text-accent border-b-2 border-accent' : 'text-primary'}`}
            onClick={() => handleClick('caseStudies')}
            style={{ cursor: 'pointer' }}
          >
            Case Studies
          </h3>
          <h3
            className={`Montserrat text-sm font-normal px-2 sm:px-4 ${activeLink === 'blog' ? 'text-accent border-b-2 border-accent' : 'text-primary'}`}
            onClick={() => handleClick('blog')}
            style={{ cursor: 'pointer' }}
          >
            Blog
          </h3>
        </div>
      </div>
      <div className="flex items-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSca1d_VziUAaJkVwPme1GjK-yVKLrc14dqsjOec8dl1GIcxWg/viewform"
          className="bg-accent/90 hover:bg-accent/100 text-white font-bold py-2 px-4 rounded-lg hidden lg:block"
          style={{ marginRight: '1rem' }}
        >
          Start Now
        </a>
        <button
          className="lg:hidden text-primary focus:outline-none"
          onClick={toggleDropdown}
        >
          <FaBars className="w-6 h-6" />
        </button>
      </div>
      {isDropdownOpen && (
        <div className="lg:hidden flex flex-col items-end bg-black text-white w-48 absolute right-0 py-2 shadow-md z-10" style={{ top: 'calc(100% + 1rem)' }}>
          <h3
            className={`Montserrat text-sm font-normal px-4 py-2 w-full ${activeLink === 'home' ? 'text-accent border-b-2 border-accent' : 'text-white'}`}
            onClick={() => handleClick('home')}
            style={{ cursor: 'pointer' }}
          >
            Home
          </h3>
          <h3
            className={`Montserrat text-sm font-normal px-4 py-2 w-full ${activeLink === 'about' ? 'text-accent border-b-2 border-accent' : 'text-white'}`}
            onClick={() => handleClick('about')}
            style={{ cursor: 'pointer' }}
          >
            About Us
          </h3>
          <h3
            className={`Montserrat text-sm font-normal px-4 py-2 w-full ${activeLink === 'portfolio' ? 'text-accent border-b-2 border-accent' : 'text-white'}`}
            onClick={() => handleClick('portfolio')}
            style={{ cursor: 'pointer' }}
          >
            Portfolio
          </h3>
          <h3
            className={`Montserrat text-sm font-normal px-4 py-2 w-full ${activeLink === 'services' ? 'text-accent border-b-2 border-accent' : 'text-white'}`}
            onClick={() => handleClick('services')}
            style={{ cursor: 'pointer' }}
          >
            Services
          </h3>
          <h3
            className={`Montserrat text-sm font-normal px-4 py-2 w-full ${activeLink === 'caseStudies' ? 'text-accent border-b-2 border-accent' : 'text-white'}`}
            onClick={() => handleClick('caseStudies')}
            style={{ cursor: 'pointer' }}
          >
            Case Studies
          </h3>
          <h3
            className={`Montserrat text-sm font-normal px-4 py-2 w-full ${activeLink === 'blog' ? 'text-accent border-b-2 border-accent' : 'text-white'}`}
            onClick={() => handleClick('blog')}
            style={{ cursor: 'pointer' }}
          >
            Blog
          </h3>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
