import React, { useState } from 'react';
import CI1 from './images/Herobg.png';
import CI2 from './images/Bg.png';
import CI3 from './images/Herobg.png';
import CI4 from './images/Bg.png';
import CI5 from './images/Herobg.png';
import CI6 from './images/Bg.png';
import CI7 from './images/Herobg.png';
import CI8 from './images/Bg.png';
import CI9 from './images/Herobg.png';
import CI10 from './images/Bg.png';
import CI11 from './images/Herobg.png';
import CI12 from './images/Bg.png';
import CI13 from './images/Herobg.png';
import CI14 from './images/Bg.png';
import CI15 from './images/Herobg.png';

const Blog = () => {
  const images = [
    { src: CI1, title: 'Making a Successful Corporate Video: About eIDRAW', link: 'https://youtu.be/Y0Spn1ey3S4' },
    { src: CI2, title: 'Making a Successful Corporate Video: About eIDRAW', link: 'https://youtu.be/Y0Spn1ey3S4' },
    { src: CI3, title: 'Making a Successful Corporate Video: About eIDRAW', link: 'https://youtu.be/Y0Spn1ey3S4' },
    { src: CI4, title: 'Making a Successful Corporate Video: About eIDRAW', link: 'https://youtu.be/Y0Spn1ey3S4' },
    { src: CI5, title: 'Making a Successful Corporate Video: About eIDRAW', link: 'https://youtu.be/Y0Spn1ey3S4' },
    { src: CI6, title: 'Making a Successful Corporate Video: About eIDRAW', link: 'https://youtu.be/Y0Spn1ey3S4' },
    { src: CI7, title: 'Making a Successful Corporate Video: About eIDRAW', link: 'https://youtu.be/Y0Spn1ey3S4' },
    { src: CI8, title: 'Making a Successful Corporate Video: About eIDRAW', link: 'https://youtu.be/Y0Spn1ey3S4' },
    { src: CI9, title: 'Making a Successful Corporate Video: About eIDRAW', link: 'https://youtu.be/Y0Spn1ey3S4' },
    { src: CI10, title: 'Making a Successful Corporate Video: About eIDRAW', link: 'https://youtu.be/Y0Spn1ey3S4' },
    { src: CI11, title: 'Making a Successful Corporate Video: About eIDRAW', link: 'https://youtu.be/Y0Spn1ey3S4' },
    { src: CI12, title: 'Making a Successful Corporate Video: About eIDRAW', link: 'https://youtu.be/Y0Spn1ey3S4' },
    { src: CI13, title: 'Making a Successful Corporate Video: About eIDRAW', link: 'https://youtu.be/Y0Spn1ey3S4' },
    { src: CI14, title: 'Making a Successful Corporate Video: About eIDRAW', link: 'https://youtu.be/Y0Spn1ey3S4' },
    { src: CI15, title: 'Making a Successful Corporate Video: About eIDRAW', link: 'https://youtu.be/Y0Snp1ey3S4' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const groups = [];
  for (let i = 0; i < images.length; i += 5) {
    groups.push(images.slice(i, i + 5));
  }

  return (
    <section className="about-us flex flex-col items-center py-10" style={{ paddingTop: '7rem' }}>
      <h2 className="text-5xl md:text-3xl lg:text-5xl font-bold mb-8 text-accent" style={{ paddingBottom: '4rem' }}>Blog Posts</h2>
      <div className="bg-black p-4 md:p-6 lg:p-10 rounded-lg w-full flex flex-col items-center justify-center md:h-auto sm:h-auto h-[85vh]">
        <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {groups[currentIndex].map((image, index) => (
            <div key={index} className="relative group w-full h-auto md:w-auto">
              <img src={image.src} alt={image.title} className="w-full h-80 md:h-48 object-cover rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <a href={image.link} className="bg-black text-white rounded-xl py-1 px-2 md:py-2 md:px-4">Watch Now</a>
              </div>
              <p className="text-white mt-2 text-center text-xs md:text-sm lg:text-base">{image.title}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {groups.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 md:h-3 md:w-3 lg:h-4 lg:w-4 mx-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-accent' : 'bg-gray-500'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
