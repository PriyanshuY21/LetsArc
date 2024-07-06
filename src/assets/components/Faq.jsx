import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

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
      <h2 className="text-5xl font-bold mb-8 text-accent" style={{ paddingBottom: '7rem' }}>Frequently Asked Questions</h2>
      <div className="bg-gray-100 p-10 rounded-lg w-full flex flex-col items-center justify-center" style={{ height: '70vh' }}>
        {faqs.map((faq, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between items-center w-full p-4 cursor-pointer" onClick={() => toggleAnswer(index)}>
              <span className="font-medium text-2xl">{faq.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openIndex === index && (
              <div className="p-1 text-xl px-4">
                <p>{faq.answer}</p>
              </div>
            )}
            <hr className="my-4" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
