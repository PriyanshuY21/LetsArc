import React, { useRef } from 'react';
import Navbar from './Navbar';
import Herobg from './images/Herobg.png';
import AboutUs from './AboutUs';
import Portfolio from './Portfolio';
import Services from './Services';
import Case from './Case';
import Have from './Have';
import Blog from './Blog';
import Start from './Start';
import Faq from './Faq';
import Footer from './Footer';

const Header = () => {
  // Create refs for different sections to enable smooth scrolling
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const servicesRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const blogRef = useRef(null);

  // Function to scroll to a specific section smoothly
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Navbar component with scroll functions passed as props */}
      <Navbar 
        scrollToHome={() => scrollToSection(homeRef)} 
        scrollToAbout={() => scrollToSection(aboutRef)} 
        scrollToPortfolio={() => scrollToSection(portfolioRef)} 
        scrollToServices={() => scrollToSection(servicesRef)} 
        scrollToCaseStudies={() => scrollToSection(caseStudiesRef)} 
        scrollToBlog={() => scrollToSection(blogRef)} 
      />
      
      {/* Hero section with background image */}
      <header ref={homeRef}>
        <div
          className="flex flex-col justify-center items-center text-white text-center"
          style={{
            backgroundImage: `url(${Herobg})`,
            height: '90vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div>
            <h1 className="Montserrat font-semibold text-5xl pb-1" style={{ color: 'text', paddingTop: '40px' }}>Your Vision, </h1>
            <h1 className="Montserrat font-semibold text-5xl pb-8" style={{ color: 'text' }}>Seamlessly Captured</h1>
            {/* Call-to-action button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSca1d_VziUAaJkVwPme1GjK-yVKLrc14dqsjOec8dl1GIcxWg/viewform"
              className="bg-cl/90 hover:bg-cl/100 text-white text-xl font-bold py-3 px-6"
              style={{ borderRadius: '10px' }}
            >
              Start Now
            </a>
          </div>
        </div>
      </header>
      
      <section ref={aboutRef}>
        <AboutUs /> 
      </section>
      <section ref={portfolioRef}>
        <Portfolio />
      </section>
      <section ref={servicesRef}>
        <Services />
      </section>
      <section ref={caseStudiesRef}>
        <Case />
      </section>
      <Have />
      <section ref={blogRef}>
        <Blog />
      </section>
      <Start />
      <Faq /> 
      <Footer />
    </>
  );
};

export default Header;
