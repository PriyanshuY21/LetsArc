import React, { useEffect } from 'react';
import Reddy from './images/Reddy.png';
import Icon1 from './images/Vid.png';
import Icon2 from './images/Coun.png';
import Icon3 from './images/Exp.png';
import Image from './images/Bg.png';
import Image1 from './images/Bg.png';
import Image2 from './images/Bg.png';
import Image3 from './images/Bg.png';
import Image4 from './images/Bg.png';

const images = [
  { src: Image, alt: 'IMG1',link:'https://youtu.be/Y0Spn1ey3S4' },
  { src: Image1, alt: 'IMG2',link:'https://youtu.be/Y0Spn1ey3S4' },
  { src: Image2, alt: 'IMG3',link:'https://youtu.be/Y0Spn1ey3S4'},
  { src: Image3, alt: 'IMG4', link:'https://youtu.be/Y0Spn1ey3S4'},
  { src: Image4, alt: 'IMG5', link:'https://youtu.be/Y0Spn1ey3S4'},
  { src: Image, alt: 'IMG6',  link:'https://youtu.be/Y0Spn1ey3S4'},
  { src: Image2, alt: 'IMG7', link:'https://youtu.be/Y0Spn1ey3S4'},
  { src: Image3, alt: 'IMG8', link:'https://youtu.be/Y0Spn1ey3S4' },
  { src: Image4, alt: 'IMG9', link:'https://youtu.be/Y0Spn1ey3S4'},
  { src: Image, alt: 'IMG10', link:'https://youtu.be/Y0Spn1ey3S4'},
  { src: Image, alt: 'IMG11', link:'https://youtu.be/Y0Spn1ey3S4'},
  { src: Image2, alt: 'IMG12', link:'https://youtu.be/Y0Spn1ey3S4'},
  { src: Image1, alt: 'IMG13',  link:'https://youtu.be/Y0Spn1ey3S4'},
  { src: Image4, alt: 'IMG14', link:'https://youtu.be/Y0Spn1ey3S4'},
  { src: Image3, alt: 'IMG15', link:'https://youtu.be/Y0Spn1ey3S4'},
  { src: Image, alt: 'IMG16', link:'https://youtu.be/Y0Spn1ey3S4'},
  { src: Image2, alt: 'IMG17', link:'https://youtu.be/Y0Spn1ey3S4'},
  { src: Image3, alt: 'IMG18', link:'https://youtu.be/Y0Spn1ey3S4'},
  { src: Image4, alt: 'IMG19', link:'https://youtu.be/Y0Spn1ey3S4'},
  { src: Image1, alt: 'IMG20', link:'https://youtu.be/Y0Spn1ey3S4'},
];

const Portfolio = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const row1 = document.querySelector('.image-row-1');
      const row2 = document.querySelector('.image-row-2');
      row1.appendChild(row1.firstElementChild);
      row2.appendChild(row2.firstElementChild);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white py-5" style={{ paddingTop: '5rem', height: '80rem' }}>
      <div className="logo-slider flex flex-col" style={{ paddingBottom: '5rem' }}>
        <div className="logo-row flex justify-between w-full animate-slide-fast">
          <img src={Reddy} alt="Logo 1" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 2" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 3" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 4" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 5" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 6" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 7" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 8" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 9" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 10" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 11" className="h-12 mx-4" />
        </div>
        <div className="logo-row flex justify-between w-full animate-slide-slow">
          <img src={Reddy} alt="Logo 12" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 13" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 14" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 15" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 16" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 17" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 18" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 19" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 20" className="h-12 mx-4" />
          <img src={Reddy} alt="Logo 21" className="h-12 mx-4" />
        </div>
      </div>
      <div className="text-center py-5">
        <div className="relative py-10 rounded-lg" style={{ height: '35rem' }}>
          <div className="icon-frame flex justify-around py-5 bg-gray-100 rounded-2xl z-20 shadow-xl mx-auto absolute pt-14 top-0 left-1/2 transform -translate-x-1/2" style={{ width: '50%', zIndex: 20, height: '15rem' }}>
            <div className="icon-item text-center">
              <img src={Icon1} alt="Icon 1" className="h-16 mb-1 ml-6" />
              <h3 className="Montserrat font-bold text-2xl text-gray-400" style={{ paddingBottom: '0.5rem' }}>200+ </h3>
              <p className="Montserrat text-sm">Client Videos Made</p>
            </div>
            <div className="icon-item text-center">
              <img src={Icon2} alt="Icon 2" className="h-16 mb-1 ml-6" />
              <h3 className="Montserrat font-bold text-2xl text-gray-400" style={{ paddingBottom: '0.5rem' }}>2+</h3>
              <p className="Montserrat text-sm">Available Countries</p>
            </div>
            <div className="icon-item text-center">
              <img src={Icon3} alt="Icon 3" className="h-16 mb-1 ml-9" />
              <h3 className="Montserrat font-bold text-2xl text-gray-400" style={{ paddingBottom: '0.5rem' }}>5+</h3>
              <p className="Montserrat text-sm">Years of Experienced Team</p>
            </div>
          </div>
          <div className="relative bg-black py-10 rounded-lg top-20" style={{ height: '45rem', zIndex: 10 }}>
            <div className="image-row image-row-1 flex justify-between w-full animate-slide-fast1 mt-36">
              {images.slice(0, 10).map((image, index) => (
                <div key={index} className="relative h-48 group"style={{width:'17.5rem'}}>
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-xl" />
                  <div className="Montserrat absolute top-0 right-0 text-white bg-black px-2 py-1 text-base">{image.alt}</div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={image.link} className="Montserrat bg-black text-white px-4 py-2 rounded-xl text-base">Watch Now</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="image-row image-row-2 flex justify-between w-full animate-slide-fast1 py-4">
              {images.slice(10).map((image, index) => (
                <div key={index} className="relative h-48 group"style={{width:'17.5rem'}}>
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-xl"/>
                  <div className="Montserrat absolute top-0 right-0 text-white bg-black px-2 py-1 text-base">{image.alt}</div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={image.link} className="Montserrat bg-black text-white px-4 py-2 rounded-xl text-base">Watch Now</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
