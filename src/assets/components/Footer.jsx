import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from './images/Logo.png'; 

const Footer = () => {
  return (
    <section className="about-us flex flex-col items-center" style={{ paddingTop: '7rem' }}>
      <div className="bg-black p-10 w-full flex flex-col items-center justify-center text-white">
        <div className="w-full flex justify-between items-start mb-10">
          <div className="flex flex-col items-center">
            <img src={Logo} alt="LetsArc Media" className="Monsterrat mr-2" style={{ height: '180px' }} />
            <p className="text-base -translate-y-12">Follow us on social media</p>
            <div className="flex space-x-4 -mt-6">
              <a href="https://www.facebook.com/letsarcmedia/">
                <FaFacebook className="text-gray-400 hover:text-white" size={24} />
              </a>
              <a href="https://www.linkedin.com/company/letsarc-media/">
                <FaLinkedin className="text-gray-400 hover:text-white" size={24} />
              </a>
              <a href="https://www.youtube.com/@letsarcmedia4157">
                <FaYoutube className="text-gray-400 hover:text-white" size={24} />
              </a>
              <a href="https://x.com/LetsarcM">
                <FaTwitter className="text-gray-400 hover:text-white" size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6 w-full">
            <h3 className="Monsterrat text-xl font-semibold">Contact Us</h3>
            <div className="flex justify-between w-full ">
              <div className="flex flex-col space-y-4 translate-x-16" style={{ maxWidth: '28%' }}>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mr-2 text-5xl" />
                  <div>
                    <p>Address: C-1233, Siddhivinayak Towers, Behind Adani Gas Station, Off SG Highway Makarba, Ahmedabad-380051</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="mr-2 text-xl" />
                  <div>
                    <p>Phone: +91 9723 557 555</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="mr-2 text-xl" />
                  <div>
                    <p>Email: <a href="mailto:info@letsarc.com" className="text-gray-400 hover:text-white">info@letsarc.com</a></p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 translate-x-6" style={{ maxWidth: '28%' }}>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mr-2 text-2xl" />
                  <div>
                    <p>Address: Hillsborough, New Jersy,NJ-08844, USA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="mr-2 text-xl" />
                  <div>
                    <p>Phone: +1 908 450 9880</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="mr-2 text-xl" />
                  <div>
                    <p>Email: <a href="mailto:info@letsarc.com" className="text-gray-400 hover:text-white">info@letsarc.com</a></p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4" style={{ maxWidth: '28%' }}>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mr-2 text-3xl" />
                  <div>
                    <p>Address: 208, H15, BSI Business Center, Rise Tower, Sector 63, Noida-201301
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="mr-2 text-xl" />
                  <div>
                    <p>Phone: +91 9999 598 131</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="mr-2 text-xl" />
                  <div>
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
