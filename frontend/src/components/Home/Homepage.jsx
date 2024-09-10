import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const imageUrl = "https://www.shutterstock.com/image-photo/ahmedabad-india-december-10-2017-unidentified-1143708920";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Rina’s Journey to Success",
      info: "Rina, from a small Maharashtra village, almost dropped out due to financial issues. With JTD Foundation's scholarship, supplies, and mentorship, she excelled in school, graduated with top grades, and pursued engineering. Now a successful software engineer, Rina inspires her village, showcasing JTD Foundation's profound impact on rural education."
    },
    {
      image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Thousands of Scholarships Awarded",
      info: "Since 2015, Joining the Dots (JTD) Foundation has awarded thousands of scholarships to students in rural India. By easing financial burdens, we empower students to continue their education, achieve academic success, and build brighter futures."
    },
    {
      image: "https://images.unsplash.com/photo-1707811180403-c22b7ef06476?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Volunteer Mobilization",
      info: "Our dedicated volunteers are the backbone of Joining the Dots (JTD) Foundation. They generously contribute their time and expertise to mentor students and support our educational initiatives, creating a nurturing environment where students can thrive and succeed."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      {/* Carousel Section */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative h-[700px] min-w-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute bottom-[15px] m-auto text-white text-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
                <h2 className="text-6xl font-bold">{slide.heading}</h2>
                <p className="mt-2">{slide.info}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2">Prev</button>
        <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2">Next</button>
      </div>

      {/* Statistics Section */}
      <div className="mt-[50px] flex justify-around py-10">
        <div className="text-center bg-[#E9EDC9] rounded-xl px-[30px] py-[20px]">
          <h3 className="text-3xl font-bold">Volunteers</h3>
          <p className="text-2xl mt-2">2000+</p>
        </div>
        <div className="text-center bg-[#E9EDC9] rounded-xl px-[30px] py-[20px]">
          <h3 className="text-3xl font-bold">Colleges in Contact</h3>
          <p className="text-2xl mt-2">169+</p>
        </div>
        <div className="text-center bg-[#E9EDC9] rounded-xl px-[30px] py-[20px]">
          <h3 className="text-3xl font-bold">Children Helped</h3>
          <p className="text-2xl mt-2">2000+</p>
        </div>
        <div className="text-center bg-[#E9EDC9] rounded-xl px-[30px] py-[20px]">
          <h3 className="text-3xl font-bold">Funds Raised</h3>
          <p className="text-2xl mt-2">₹21,33,686</p>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-[100px] px-6 max-w-[800px] m-auto" id="AboutUs">
        <h2 className="text-4xl font-bold text-center mb-6">About Us</h2>
        <p className="text-xl text-center">
          Joining the Dots (JTD) foundation is a not for profit organisation registered under the Govt. Of India in Jan 2015. Team JTD is a group of like-minded individuals who have come together to make a difference and contribute in the field of rural education. At JTD we want to prevent students from discontinuing their education due to socio-economic factors.
        </p>
      </div>

      {/* Success Stories Section */}
      <div className="bg-[#E9EDC9] py-10 px-6">
        <h2 className="text-4xl font-bold text-center mb-6">Success Stories</h2>
        <div className="flex flex-wrap justify-center gap-9">
          <div className="bg-white m-6 p-6 rounded-lg shadow-md" style={{ height: '300px', width: '300px' }}>
            <h3 className="text-2xl font-bold mb-2">Story of Durga</h3>
            <p>Our efforts helped a child achieve their dreams.</p>
          </div>
          <div className="bg-white m-6 p-6 rounded-lg shadow-md" style={{ height: '300px', width: '300px' }}>
            <h3 className="text-2xl font-bold mb-2">Story 2</h3>
            <p>We provided essential support to a struggling Girl.</p>
          </div>
          <div className="bg-white m-6 p-6 rounded-lg shadow-md" style={{ height: '300px', width: '300px' }}>
            <h3 className="text-2xl font-bold mb-2">Story 3</h3>
            <p>Our volunteers made a significant impact in the community.</p>
          </div>
          {/* Add more stories as needed */}
        </div>
      </div>
      <footer className="bg-[#E9EDC9] text-white py-12 border-t-2 border-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          
          <div className="mb-6 md:mb-0 md:w-1/3">
            <img src="https://d1vdjc70h9nzd9.cloudfront.net/media/ngo/259000/259916/image/658f4cf8ab9f7.jpg" alt="JTD Foundation Logo" className="h-16 mb-4" />
            <p className="text-gray-400">
              Joining the Dots (JTD) Foundation is committed to bridging the educational gap in rural areas.
            </p>
          </div>

          
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h4 className="text-lg font-bold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white">Projects</a></li>
              <li><a href="/get-involved" className="text-gray-400 hover:text-white">Get Involved</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h4 className="text-lg font-bold mb-4 text-black">Contact Us</h4>
            <p className="text-gray-400">Email: info@jtdfoundation.org</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
            <p className="text-gray-400"> 315/8, 1st ‘H’ Cross, Subbanna Garden, Vijayanagar, Bengaluru, Karnataka 560040</p>
          </div>
        </div>

        
        <div className="flex justify-center space-x-6 mb-8">
            <FaInstagram className='text-black' size={20} />
            <FaTwitter className='text-black' size={20} />
            <FaFacebook className='text-black' size={20} />

          
        </div>

        
        <div className="text-center text-gray-400">
          &copy; 2024 Joining the Dots (JTD) Foundation. All Rights Reserved.
        </div>
      </div>
    </footer>
      

    </div>
  );
};

export default Homepage;
