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
    { src: CI15, title: 'Making a Successful Corporate Video: About eIDRAW', link: 'https://youtu.be/Y0Spn1ey3S4' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const groups = [];
  for (let i = 0; i < images.length; i += 5) {
    groups.push(images.slice(i, i + 5));
  }

  return (
    <section className="about-us flex flex-col items-center py-10" style={{ paddingTop: '7rem' }}>
      <h2 className="text-5xl font-bold mb-8 text-accent" style={{ paddingBottom: '7rem' }}>Blog Posts</h2>
      <div className="bg-black p-10 rounded-lg w-full flex flex-col items-center justify-center" style={{ height: '85vh' }}>
        <div className="grid grid-cols-5 gap-4">
          {groups[currentIndex].map((image, index) => (
            <div key={index} className="relative group w-60 h-80">
              <img src={image.src} alt={image.title} className="w-full h-full object-cover rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <a href={image.link} className="bg-black text-white rounded-xl py-2 px-4">Watch Now</a>
              </div>
              <p className="text-white mt-2 text-center">{image.title}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center translate-y-12 mt-12">
          {groups.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-accent' : 'bg-gray-500'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
