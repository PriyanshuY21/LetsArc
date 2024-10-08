import React, { useState, useEffect } from 'react';

// Array of clients testimonial containing clients and reviews 
const reviews = [
  {
    text: "LetsArc understands the requirement and provides the best of their's. The process, support and the output of the video quality is so amazing. Audience has appreciated it very positively.",
    author: 'Wedding Tales',
  },
  {
    text: "Best thing is that this team is capable of understanding a business quickly and that is evident in their videos.",
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
  {
    text: "Highly professional and knowledgeable team",
    author: 'TechShaadi.com',
  },
];

const Case = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0); // Tracks current review being displayed
  const [isAnimating, setIsAnimating] = useState(false); // Manages animation state during review transitions

  // Handles transition to next review
  const handleNext = () => {
    setIsAnimating(true); // Starts animation
    setTimeout(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length); // Moves to next review, loops back to first after last review
      setIsAnimating(false); // Ends animation
    }, 1000); // Waits 1 second for animation to complete
  };

  // Handles transition to previous review
  const handlePrev = () => {
    setIsAnimating(true); // Starts animation
    setTimeout(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length); // Moves to previous review, loops back to last review when reaching first
      setIsAnimating(false); // Ends animation
    }, 1000); // Waits 1 second for animation to complete
  };

  // Automatically transitions to next review every 3 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Sets up interval to move to next review
    return () => clearInterval(interval); // Cleans up interval when component unmounts
  }, []);

  return (
    <section className="about-us flex flex-col items-center py-10" style={{ paddingTop: '7rem' }}>
      <h2 className="text-5xl md:text-3xl font-bold mb-8 text-cl text-center" style={{ paddingBottom: '7rem' }}>What Clients Say</h2>
      <div className="relative bg-gray-50 shadow-lg p-10 md:p-6 rounded-lg w-full flex flex-col items-center justify-center md:h-auto sm:h-auto h-[70vh]">
        {/* Display current review text and client */}
        <div className={`text-center transition-opacity duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <p className="Montserrat px-80 md:px-6 text-xl md:text-lg font-medium mb-4">“{reviews[currentReviewIndex].text}”</p>
          <p className="Montserrat text-lg md:text-base font-normal text-ab">{reviews[currentReviewIndex].author}</p>
        </div>
        {/* Buttons for manual review navigation */}
        {/* 
        <button
          onClick={handlePrev}
          className="absolute left-48 md:left-4 top-1/2 transform -translate-y-1/2 w-16 md:w-8 h-40 md:h-20 text-accent flex items-center justify-center text-7xl md:text-4xl"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-48 md:right-4 top-1/2 transform -translate-y-1/2 w-16 md:w-8 h-40 md:h-20 text-accent flex items-center justify-center text-7xl md:text-4xl"
        >
          &gt;
        </button> 
        */}
      </div>
    </section>
  );
};

export default Case;
