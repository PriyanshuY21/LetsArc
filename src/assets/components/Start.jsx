import React from 'react';

const Start = () => {
  return (
    <section className="about-us flex flex-col items-center py-10"style={{paddingTop:'7rem'}}>
      <h2 className="text-5xl font-bold mb-8 text-accent"style={{paddingBottom:'7rem'}}>Start Now </h2>
      <div className="bg-gray-100 p-10 rounded-lg w-full flex flex-col items-center justify-center"style={{height:'70vh'}}>
        <div className="Monsterrat max-w-2xl text-center mb-8">
          <p className="Monsterrat text-2xl">
          Connect with our experts to make dedicated videos for you and your business so that you can have an edge above others. 
          </p>
        </div>
        <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSca1d_VziUAaJkVwPme1GjK-yVKLrc14dqsjOec8dl1GIcxWg/viewform"
              className="bg-accent/90 hover:bg-accent/100 text-white font-bold py-4 px-12 rounded-xl"
              style={{ position: 'relative', zIndex: '5' }}
            >
              Fill Your Project Details
        </a>
      </div>
    </section>
  );
};

export default Start;
