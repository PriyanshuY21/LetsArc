import React from 'react';
import Img1 from './images/1.png'; 
import Img2 from './images/2.png'; 
import Img3 from './images/3.png';
import Img4 from './images/4.png';

const texts = ['Fill Our Contact Form', 'You Will Be Contacted By Our Experts', 'Ideate And Finalise The Video', 'Video Approval'];

const Have = () => {
  return (
    <section className="about-us flex flex-col items-center py-10" style={{ paddingTop: '7rem' }}>
      <h2 className="text-5xl font-bold text-accent" style={{ paddingBottom: '7rem' }}>Have a Project ?</h2>
      <div className="p-10 rounded-lg w-full flex flex-col items-center justify-center" style={{ height: '70vh' }}>
        <div className="grid grid-cols-4 gap-12 -mt-16">
          {[Img1, Img2, Img3, Img4].map((imgSrc, index) => (
            <div key={index} className="relative w-56" style={{ height: '28rem' }}>
              <img src={imgSrc} alt={`Process ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="Monsterrat text-black text-lg font-semibold text-center pt-10">
                  {texts[index]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Have;
