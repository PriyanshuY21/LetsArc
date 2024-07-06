import React, { useState } from 'react';
import Logo from './images/Logo.png';

const Navbar = ({ scrollToHome, scrollToAbout, scrollToPortfolio, scrollToServices, scrollToCaseStudies, scrollToBlog }) => {
  const [activeLink, setActiveLink] = useState('home');

  const handleClick = (link) => {
    setActiveLink(link);
    if (link === 'home') scrollToHome();
    else if (link === 'about') scrollToAbout();
    else if (link === 'portfolio') scrollToPortfolio();
    else if (link === 'services') scrollToServices();
    else if (link === 'caseStudies') scrollToCaseStudies();
    else if (link === 'blog') scrollToBlog();
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-text shadow-md" style={{ height: '10vh' }}>
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="mr-2 pl-9" style={{ height: '120px' }} />
        <h3 
          className={`Montserrat text-sm font-normal px-4 ${activeLink === 'home' ? 'text-accent border-b-2 border-accent' : 'text-primary'}`}
          onClick={() => handleClick('home')}
          style={{ cursor: 'pointer' }}
        >
          Home
        </h3>
        <h3 
          className={`Montserrat text-sm font-normal px-4 ${activeLink === 'about' ? 'text-accent border-b-2 border-accent' : 'text-primary'}`}
          onClick={() => handleClick('about')}
          style={{ cursor: 'pointer' }}
        >
          About Us
        </h3>
        <h3 
          className={`Montserrat text-sm font-normal px-4 ${activeLink === 'portfolio' ? 'text-accent border-b-2 border-accent' : 'text-primary'}`}
          onClick={() => handleClick('portfolio')}
          style={{ cursor: 'pointer' }}
        >
          Portfolio
        </h3>
        <h3 
          className={`Montserrat text-sm font-normal px-4 ${activeLink === 'services' ? 'text-accent border-b-2 border-accent' : 'text-primary'}`}
          onClick={() => handleClick('services')}
          style={{ cursor: 'pointer' }}
        >
          Services
        </h3>
        <h3 
          className={`Montserrat text-sm font-normal px-4 ${activeLink === 'caseStudies' ? 'text-accent border-b-2 border-accent' : 'text-primary'}`}
          onClick={() => handleClick('caseStudies')}
          style={{ cursor: 'pointer' }}
        >
          Case Studies
        </h3>
        <h3 
          className={`Montserrat text-sm font-normal px-4 ${activeLink === 'blog' ? 'text-accent border-b-2 border-accent' : 'text-primary'}`}
          onClick={() => handleClick('blog')}
          style={{ cursor: 'pointer' }}
        >
          Blog
        </h3>
      </div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSca1d_VziUAaJkVwPme1GjK-yVKLrc14dqsjOec8dl1GIcxWg/viewform"
        className="bg-accent/90 hover:bg-accent/100 text-white font-bold py-2 px-4"
        style={{ position: 'relative', right: '4%', zIndex: '5', borderRadius: '10px' }}
      >
        Start Now
      </a>
    </nav>
  );
};

export default Navbar;
