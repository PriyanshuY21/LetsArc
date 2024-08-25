import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 

const Faq = () => {
  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle display of answer
  const toggleAnswer = (index) => {
    // If same FAQ is clicked again, closes it by setting openIndex to null; otherwise, open the clicked FAQ
    setOpenIndex(openIndex === index ? null : index);
  };

  // Array of FAQs with questions and answers
  const faqs = [
    {
      question: "What kind of video and production skills does LetArc Media offer?",
      answer: "LetArc Media offers a wide range of video and production skills including filming, editing, animation, and post-production services."
    },
    {
      question: "How long does it take to produce a video production project?",
      answer: "The time it takes to produce a video production project varies depending on the complexity and scope of the project. On average, it can take anywhere from a few weeks to several months."
    },
    {
      question: "How much involvement do you require from my side?",
      answer: "We require your input during the planning and review stages to ensure the final product meets your expectations. Your level of involvement can be adjusted based on your preferences."
    },
    {
      question: "Does LetsArc Media handle an entire video production project or only parts?",
      answer: "LetsArc Media can handle an entire video production project from start to finish or only specific parts as needed."
    }
  ];

  return (
    <section className="about-us flex flex-col items-center py-10" style={{ paddingTop: '7rem' }}>
      <h2 className="text-5xl md:text-3xl font-bold mb-8 text-cl" style={{ paddingBottom: '7rem' }}>Frequently Asked Questions</h2>
      
      <div className="bg-gray-100 p-6 md:p-10 rounded-lg w-full flex flex-col items-center justify-center h-[70vh] md:h-auto sm:h-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full">
            {/* FAQ question, clickable to toggle answer */}
            <div className="flex justify-between items-center w-full p-4 cursor-pointer" onClick={() => toggleAnswer(index)}>
              <span className="font-medium text-2xl md:text-lg">{faq.question}</span>
              {/* Chevron icon changes based on whether FAQ is open */}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>      
            {/* Displays answer if this FAQ is currently open */}
            {openIndex === index && (
              <div className="p-2 text-xl md:text-base px-4">
                <p>{faq.answer}</p>
              </div>
            )}
            <hr className="my-2 md:my-4" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
