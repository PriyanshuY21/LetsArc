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
import PI1 from './images/Bg.png';
import PI2 from './images/Herobg.png';
import PI3 from './images/Bg.png';
import PI4 from './images/Herobg.png';
import PI5 from './images/Bg.png';
import PI6 from './images/Herobg.png';
import PI7 from './images/Bg.png';
import PI8 from './images/Herobg.png';
import PI9 from './images/Bg.png';
import PI10 from './images/Herobg.png';
import PI11 from './images/Bg.png';
import PI12 from './images/Herobg.png';
import EI1 from './images/Bg.png';
import EI2 from './images/Herobg.png';
import EI3 from './images/Bg.png';
import EI4 from './images/Herobg.png';
import EI5 from './images/Bg.png';
import EI6 from './images/Herobg.png';
import EI7 from './images/Bg.png';
import EI8 from './images/Herobg.png';
import EI9 from './images/Bg.png';
import EI10 from './images/Herobg.png';
import EI11 from './images/Bg.png';
import EI12 from './images/Herobg.png';
import SI1 from './images/Herobg.png';
import SI2 from './images/Bg.png';
import SI3 from './images/Herobg.png';
import SI4 from './images/Bg.png';
import SI5 from './images/Herobg.png';
import SI6 from './images/Bg.png';
import SI7 from './images/Herobg.png';
import SI8 from './images/Bg.png';
import SI9 from './images/Herobg.png';
import SI10 from './images/Bg.png';
import SI11 from './images/Herobg.png';
import SI12 from './images/Bg.png';
import TI1 from './images/Bg.png';
import TI2 from './images/Herobg.png';
import TI3 from './images/Bg.png';
import TI4 from './images/Herobg.png';
import TI5 from './images/Bg.png';
import TI6 from './images/Herobg.png';
import TI7 from './images/Bg.png';
import TI8 from './images/Herobg.png';
import TI9 from './images/Bg.png';
import TI10 from './images/Herobg.png';
import TI11 from './images/Bg.png';
import TI12 from './images/Herobg.png';
import ETI1 from './images/Herobg.png';
import ETI2 from './images/Bg.png';
import ETI3 from './images/Herobg.png';
import ETI4 from './images/Bg.png';
import ETI5 from './images/Herobg.png';
import ETI6 from './images/Bg.png';
import ETI7 from './images/Herobg.png';
import ETI8 from './images/Bg.png';
import ETI9 from './images/Herobg.png';
import ETI10 from './images/Bg.png';
import ETI11 from './images/Herobg.png';
import ETI12 from './images/Bg.png';

const headings = [
  'Corporate Videos',
  'ProSe Videos',
  'Explainer Videos',
  'Social Media Videos',
  'YouTube and TV Commercials',
  'Educational and Training Videos'
];

const imageMap = {
  'Corporate Videos': [CI1, CI2, CI3, CI4, CI5, CI6, CI7, CI8, CI9, CI10, CI11, CI12],
  'ProSe Videos': [PI1, PI2, PI3, PI4, PI5, PI6, PI7, PI8, PI9, PI10, PI11, PI12],
  'Explainer Videos': [EI1, EI2, EI3, EI4, EI5, EI6, EI7, EI8, EI9, EI10, EI11, EI12],
  'Social Media Videos': [SI1, SI2, SI3, SI4, SI5, SI6, SI7, SI8, SI9, SI10, SI11, SI12],
  'YouTube and TV Commercials': [TI1, TI2, TI3, TI4, TI5, TI6, TI7, TI8, TI9, TI10, TI11, TI12],
  'Educational and Training Videos': [ETI1, ETI2, ETI3, ETI4, ETI5, ETI6, ETI7, ETI8, ETI9, ETI10, ETI11, ETI12]
};

const videoMap = {
  'Corporate Videos': ['qWhqX6gaEpc', 'def456', 'ghi789', 'jkl012'],
  'ProSe Videos': ['mno345', 'pqr678', 'stu901', 'vwx234'],
  'Explainer Videos': ['yza567', 'bcd890', 'efg123', 'hij456'],
  'Social Media Videos': ['klm789', 'nop012', 'qrs345', 'tuv678'],
  'YouTube and TV Commercials': ['wxy901', 'zab234', 'cde567', 'fgh890'],
  'Educational and Training Videos': ['ijk123', 'lmn456', 'opq789', 'rst012']
};

const labelMap = {
  'Corporate Videos': ['CI1', 'CI2', 'CI3', 'CI4', 'CI5', 'CI6', 'CI7', 'CI8', 'CI9', 'CI10', 'CI11', 'CI12'],
  'ProSe Videos': ['PI1', 'PI2', 'PI3', 'PI4', 'PI5', 'PI6', 'PI7', 'PI8', 'PI9', 'PI10', 'PI11', 'PI12'],
  'Explainer Videos': ['EI1', 'EI2', 'EI3', 'EI4', 'EI5', 'EI6', 'EI7', 'EI8', 'EI9', 'EI10', 'EI11', 'EI12'],
  'Social Media Videos': ['SI1', 'SI2', 'SI3', 'SI4', 'SI5', 'SI6', 'SI7', 'SI8', 'SI9', 'SI10', 'SI11', 'SI12'],
  'YouTube and TV Commercials': ['TI1', 'TI2', 'TI3', 'TI4', 'TI5', 'TI6', 'TI7', 'TI8', 'TI9', 'TI10', 'TI11', 'TI12'],
  'Educational and Training Videos': ['ETI1', 'ETI2', 'ETI3', 'ETI4', 'ETI5', 'ETI6', 'ETI7', 'ETI8', 'ETI9', 'ETI10', 'ETI11', 'ETI12']
};

const Services = () => {
  const [selectedHeading, setSelectedHeading] = useState('Corporate Videos');
  const [currentImageGroup, setCurrentImageGroup] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const imagesPerGroup = 4;
  const totalGroups = Math.ceil(imageMap[selectedHeading].length / imagesPerGroup);

  const handleImageClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  return (
    <section className="about-us flex flex-col items-center py-10" style={{ paddingTop: '4rem' }}>
      <h2 className="Monsterrat text-5xl justify-center font-bold text-accent">We Provide <span className="text-5xl font-light text-accent">videos in following</span></h2>
      <h2 className="Monsterrat text-5xl justify-center font-light mt-2 mb-12 text-accent" style={{ paddingBottom: '4rem' }}>industries</h2>
      <div className="flex justify-center mt-4">
        {headings.map((heading, index) => {
          const [firstLine, ...rest] = heading.split(' ');
          const secondLine = rest.join(' ');
          return (
            <div
              key={index}
              className={`Monsterrat mx-4 cursor-pointer font-semibold text-center ${selectedHeading === heading ? 'text-green-500 border-b-2 border-green-500' : ''}`}
              onClick={() => {
                setSelectedHeading(heading);
                setCurrentImageGroup(0);
                setSelectedVideo(null); 
              }}
            >
              <div>{firstLine}</div>
              <div>{secondLine}</div>
            </div>
          );
        })}
      </div>
      <div
        className="p-10 rounded-lg -mt-4 w-full flex flex-col items-center justify-center overflow-hidden"
        style={{ height: '70vh' }}
      >
        <div className="grid grid-cols-4 gap-4">
          {imageMap[selectedHeading].slice(currentImageGroup * imagesPerGroup, (currentImageGroup + 1) * imagesPerGroup).map((image, index) => (
            <div
              key={index}
              className="relative w-60 h-80 group cursor-pointer"
            >
              <img src={image} alt={`${selectedHeading} ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
              <div className="Monsterrat absolute top-0 right-0 text-white bg-black px-2 py-1 rounded-xl text-base">{labelMap[selectedHeading][currentImageGroup * imagesPerGroup + index]}</div>
              <div className="absolute inset-0 justify-center items-center bg-black bg-opacity-20 group-hover:bg-opacity-50 rounded-xl transition-opacity">
              <button
                 className="Monsterrat py-2 px-4 bg-black text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                 onClick={() => handleImageClick(videoMap[selectedHeading][currentImageGroup * imagesPerGroup + index])}
        >
                Watch Now
              </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-4 pt-8">
          {[...Array(totalGroups)].map((_, index) => (
            <div
              key={index}
              className={`mx-2 cursor-pointer rounded-full w-4 h-4 ${currentImageGroup === index ? 'bg-green-500' : 'bg-gray-300'}`}
              onClick={() => setCurrentImageGroup(index)}
            ></div>
          ))}
        </div>
      </div>
      {selectedVideo && (
        <div className="mt-1 w-full flex justify-center">
          <iframe
            width="800rem"
            height="450rem"
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default Services;
