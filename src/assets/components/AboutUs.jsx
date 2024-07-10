import React from 'react';
import Mes from './images/mes.png'; 
import Id from './images/id.png';
import Self from './images/self.png';
import Eng from './images/eng.png';

const AboutUs = () => {
  const cards = [
    {
      imgSrc: Mes,
      title: "Conveying Message Effectively",
      description: "Our videos ensure that your message is conveyed effectively and resonates with your audience."
    },
    {
      imgSrc: Id,
      title: "Out-of-the-Box Thinking",
      description: "Our team offers out-of-the-box thinking to create unique and innovative content that sets your brand apart."
    },
    {
      imgSrc: Self,
      title: "Self Explanatory",
      description: "We ensure that your videos are self-explanatory and clearly communicate your key messages."
    },
    {
      imgSrc: Eng,
      title: "Engaging",
      description: "Our videos are designed to engage and captivate your audience with compelling visuals and dynamic storytelling."
    }
  ];

  return (
    <section className="about-us flex flex-col items-center py-10" style={{ paddingTop: '7rem' }}>
      <h2 className="text-5xl font-bold mb-8 text-accent" style={{ paddingBottom: '7rem' }}>What We Do</h2>
      <div className="bg-gray-100 p-10 rounded-lg w-full flex flex-col items-center justify-center">
        <div className="Monsterrat max-w-3xl text-center mb-12">
          <p className="Monsterrat text-lg md:text-base">
            LetsArc Media offer our video making services which not only put forward your products and offerings to your target audience but it also conveys your thoughts, your philosophy, and your passion to them. Our videos, apart from being eye-catchy, also make an impact which in turn gets your company, product, or services registered in the mind of the audience. Our each video contains these four elements abbreviated as COSE.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {cards.map((card, index) => (
            <div key={index} className="box relative w-64 h-40 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64">
              <div className="box-content absolute w-full h-full shadow-xl backface-hidden transform transition-transform duration-200 flex flex-col items-center justify-center bg-gray-50 p-4 border border-gray-300 rounded-lg">
                <img src={card.imgSrc} alt={card.title} className="mb-2" style={{ height: '15vh' }} />
                <p className="text-ab">{card.title}</p>
              </div>
              <div className="box-back absolute w-full h-full shadow-xl backface-hidden transform rotate-y-180 transition-transform duration-200 flex flex-col items-center justify-center bg-accent p-4 border border-gray-300 rounded-lg "style={{width:'115%',height:'115%'}}>
                <p className="text-white text-base">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
