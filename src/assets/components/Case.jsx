import React, { useState } from 'react';

const reviews = [
  {
    text: "LetsArc understands the requirement and provides the best of their's. The process, support and the output of the video quality is so amazing. Audience has appreciated it very positively.",
    author: 'Wedding Tales',
  },
  {
    text: "Their video has really helped me a lot in my business.",
    author: 'EasyMovr.com',
  },
  {
    text: "Their video has really helped me a lot in my business.",
    author: 'Devam Electric Vehicles',
  },
  {
    text: "LetsArc has very well understood the technicalities of the entire system and presented in a lucid manner in the video. They have an excellent understanding of technical concepts which is further combined with powerful creative skills.",
    author: 'Vasu Automation and Electricals',
  },
  {
    text: "I really see the dedication of your work towards customer's satisfaction. Inspired!",
    author: 'Aaditya Techtronics Pvt Ltd.',    
  },
];

const Case = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNext = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="about-us flex flex-col items-center py-10" style={{ paddingTop: '7rem' }}>
      <h2 className="text-5xl font-bold mb-8 text-accent" style={{ paddingBottom: '7rem' }}>What Clients Say</h2>
      <div className="relative bg-gray-100 p-10 rounded-lg w-full flex flex-col items-center justify-center" style={{ height: '70vh' }}>
        <div className="text-center">
          <p className="Monsterrat px-80 text-xl font-medium mb-4">“{reviews[currentReviewIndex].text}”</p>
          <p className="Monsterrat text-lg font-normal text-ab">{reviews[currentReviewIndex].author}</p>
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-48 top-1/2 transform -translate-y-1/2 w-16 h-40 text-accent flex items-center justify-center text-7xl"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-48 top-1/2 transform -translate-y-1/2 w-16 h-40 text-accent flex items-center justify-center text-7xl"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Case;
