import React from 'react';
import Img1 from './images/2.png'; 
import Img2 from './images/1.png'; 
import Img3 from './images/3.png';
import Img4 from './images/4.png';

const texts = ['Fill Our Contact Form', 'You Will Be Contacted By Our Experts', 'Ideate And Finalise The Video', 'Video Approval'];

const Have = () => {
  return (
    <section className="about-us flex flex-col items-center py-10 pt-28">
      <h2 className="text-5xl md:text-3xl font-bold text-accent text-center pb-16">Have a Project?</h2>
      <div className="p-6 md:p-10 rounded-lg w-full flex flex-col items-center justify-center min-h-[70vh]">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12 -mt-16">
          {[Img1, Img2, Img3, Img4].map((imgSrc, index) => (
            <div key={index} className="relative w-full h-auto lg:w-56 lg:h-96 md:w-44 md:h-48 sm:w-28 sm:h-40">
              <img src={imgSrc} alt={`Process ${index + 1}`} className="w-full h-full object-cover rounded-xl md:h-60"style={{height:'32rem'}} />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="Monsterrat text-black text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-center lg:pt-40 md:pt-80">
                  {texts[index]}
                </p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSca1d_VziUAaJkVwPme1GjK-yVKLrc14dqsjOec8dl1GIcxWg/viewform"
          className="bg-accent/90 hover:bg-accent/100 text-white font-bold py-4 px-6 md:px-12 rounded-xl items-center justify-center text-center lg:translate-y-40 mt-1 mb-16 md:mt-96"
          style={{ position: 'relative', zIndex: '5' }}
        >
          Fill Your Project Details
        </a>
      </div>
    </section>
  );
};

export default Have;
