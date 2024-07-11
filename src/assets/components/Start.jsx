import React from 'react';

const Start = () => {
  return (
    <section className="about-us flex flex-col items-center py-10" style={{ paddingTop: '7rem' }}>
      <h2 className="text-5xl md:text-3xl font-bold mb-8 text-accent" style={{ paddingBottom: '7rem' }}>Start Now</h2>
      <div className="bg-gray-100 p-6 md:p-10 rounded-lg w-full flex flex-col items-center justify-center h-[70vh] md:h-auto sm:h-[40vh]">
        <div className="Montserrat max-w-2xl text-center mb-8">
          <p className="Montserrat text-2xl font-medium md:text-lg md:font-normal">
            Connect with our experts to make dedicated videos for you and your business so that you can have an edge above others.
          </p>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSca1d_VziUAaJkVwPme1GjK-yVKLrc14dqsjOec8dl1GIcxWg/viewform"
          className="bg-accent/90 hover:bg-accent/100 text-white font-bold py-4 px-12 md:py-2 md:px-8 rounded-xl"
          style={{ position: 'relative', zIndex: '5' }}
        >
          Fill Your Project Details
        </a>
      </div>
    </section>
  );
};

export default Start;
