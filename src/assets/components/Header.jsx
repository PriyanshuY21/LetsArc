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
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const servicesRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const blogRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Navbar 
        scrollToHome={() => scrollToSection(homeRef)} 
        scrollToAbout={() => scrollToSection(aboutRef)} 
        scrollToPortfolio={() => scrollToSection(portfolioRef)} 
        scrollToServices={() => scrollToSection(servicesRef)} 
        scrollToCaseStudies={() => scrollToSection(caseStudiesRef)} 
        scrollToBlog={() => scrollToSection(blogRef)} 
      />
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
            <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSca1d_VziUAaJkVwPme1GjK-yVKLrc14dqsjOec8dl1GIcxWg/viewform"
            className="bg-accent/90 hover:bg-accent/100 text-white text-xl font-bold py-3 px-6"
            style={{ position: 'relative', right: '4%', zIndex: '5', borderRadius: '10px' }}
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
