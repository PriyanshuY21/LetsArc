import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from './images/Logo.png'; 

const Footer = () => {
  return (
    <section className="about-us flex flex-col items-center pt-28">
      <div className="bg-nav p-10 w-full flex flex-col items-center justify-center text-white">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start mb-10">
          <div className="flex flex-col items-center mb-6 lg:mb-0">
            <img src={Logo} alt="LetsArc Media" className="Monsterrat mr-2 h-24 sm:h-32 lg:h-44" />
            <p className="text-base sm:text-lg -translate-y-8 sm:-translate-y-10 lg:-translate-y-12">Follow us on social media</p>
            <div className="flex space-x-4 mt-2 sm:mt-4 -translate-y-8">
              <a href="https://www.facebook.com/letsarcmedia/">
                <FaFacebook className="text-gray-400 hover:text-white" size={25} />
              </a>
              <a href="https://linkedin.com">
                <FaLinkedin className="text-gray-400 hover:text-white" size={25} />
              </a>
              <a href="https://www.youtube.com/@letsarcmedia4157">
                <FaYoutube className="text-gray-400 hover:text-white" size={25} />
              </a>
              <a href="https://x.com/LetsarcM">
                <FaTwitter className="text-gray-400 hover:text-white" size={25} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6 w-full lg:w-5/6">
            <h3 className="Monsterrat text-lg sm:text-xl lg:text-3xl font-semibold">Contact Us</h3>
            <div className="flex flex-col lg:flex-row justify-between w-full space-y-6 lg:space-y-0 lg:space-x-6">
              <div className="flex flex-col space-y-4 lg:translate-x-4" style={{ maxWidth: '100%' }}>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mr-2 text-xl lg:text-2xl" />
                  <div className="text-sm sm:text-base lg:text-lg ">
                    <p>Address: C-1233, Siddhivinayak Towers, Behind Adani Gas Station, Off SG Highway Makarba, Ahmedabad-380051</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="mr-2 text-xl" />
                  <div className="text-sm sm:text-base lg:text-lg">
                    <p>Phone: +91 9723 557 555</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="mr-2 text-xl" />
                  <div className="text-sm sm:text-base lg:text-lg">
                    <p>Email: <a href="mailto:info@letsarc.com" className="text-gray-400 hover:text-white">info@letsarc.com</a></p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 lg:translate-x-2" style={{ maxWidth: '100%' }}>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mr-2 text-xl lg:text-2xl" />
                  <div className="text-sm sm:text-base lg:text-lg">
                    <p>Address: Hillsborough, New Jersey, NJ-08844, USA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="mr-2 text-xl" />
                  <div className="text-sm sm:text-base lg:text-lg">
                    <p>Phone: +1 908 450 9880</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="mr-2 text-xl" />
                  <div className="text-sm sm:text-base lg:text-lg">
                    <p>Email: <a href="mailto:info@letsarc.com" className="text-gray-400 hover:text-white">info@letsarc.com</a></p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4" style={{ maxWidth: '100%' }}>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mr-2 text-xl lg:text-2xl" />
                  <div className="text-sm sm:text-base lg:text-lg">
                    <p>Address: 208, H15, BSI Business Center, Rise Tower, Sector 63, Noida-201301</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="mr-2 text-xl" />
                  <div className="text-sm sm:text-base lg:text-lg">
                    <p>Phone: +91 9999 598 131</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="mr-2 text-xl" />
                  <div className="text-sm sm:text-base lg:text-lg">
                    <p>Email: <a href="mailto:monis@letsarc.com" className="text-gray-400 hover:text-white">monis@letsarc.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
