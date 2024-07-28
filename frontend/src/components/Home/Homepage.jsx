import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageUrl = "https://www.shutterstock.com/image-photo/ahmedabad-india-december-10-2017-unidentified-1143708920";

const Homepage = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const successStoriesSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      {/* Carousel Section */}
      <Slider {...carouselSettings} className="mt-[20px] w-full">
        <div
          className={`relative h-[500px] bg-cover bg-center flex items-center justify-center bg-[url('https://media.istockphoto.com/id/1125692925/photo/girl-working-on-laptop-stock-images.jpg?s=612x612&w=0&k=20&c=cQD06VyiTF78_s-KcA9RBmZayX-0gNyVxxFKBm3pXys=')]`}
        >
          <div className="absolute bottom-[15px] left-[100px] text-white text-center p-4 bg-white bg-opacity-10 backdrop-blur-sm">
            <h2 className="text-6xl font-bold">Slide 1 Heading</h2>
            <p className="mt-2">Some information about slide 1.</p>
          </div>
        </div>
        <div
          className={`relative h-[500px] bg-cover bg-center flex items-center justify-center bg-[url('https://media.istockphoto.com/id/2013549567/photo/happy-indian-girls-using-laptop-india.jpg?s=612x612&w=0&k=20&c=poOGmYv1rsPnMH5Op5WWmGFAP-VS9kJcP3ygWzF4KBY=')]`}
        >
          <div className="absolute bottom-[15px] left-[100px]  text-white text-center p-4 bg-white bg-opacity-10 backdrop-blur-sm">
            <h2 className="text-6xl font-bold">Slide 2 Heading</h2>
            <p className="mt-2">Some information about slide 2.</p>
          </div>
        </div>
        <div
          className={`relative h-[500px] bg-cover bg-center flex items-center justify-center bg-[url('https://media.istockphoto.com/id/1147987265/photo/indian-young-girl-working-on-laptop-stock-images.jpg?s=612x612&w=0&k=20&c=7HygGITPD9Iwa7JnGoZxhrEg-FB42Ue0r1ulyttSb2k=')]`}
        >
          <div className="absolute bottom-[15px] left-[100px] text-white text-center p-4 bg-white bg-opacity-10 backdrop-blur-sm">
            <h2 className="text-6xl font-bold">Slide 3 Heading</h2>
            <p className="mt-2">Some information about slide 3.</p>
          </div>
        </div>
      </Slider>

      {/* Statistics Section */}
      <div className="mt-[50px] flex justify-around  py-10">
        <div className="text-center bg-[#E9EDC9] rounded-xl px-[30px] py-[20px]">
          <h3 className="text-3xl font-bold">Volunteers</h3>
          <p className="text-2xl mt-2">2000+</p>
        </div>
        <div className="text-center bg-[#E9EDC9] rounded-xl px-[30px] py-[20px]">
          <h3 className="text-3xl font-bold ">Colleges in Contact</h3>
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
      <div className="bg-white py-[100px] px-6 max-w-[800px] m-auto">
        <h2 className="text-4xl font-bold text-center mb-6">About Us</h2>
        <p className="text-xl text-center">
        Joining the Dots (JTD) foundation is a not for profit organisation registered under the Govt. Of India in Jan 2015. Team JTD is a group of like-minded individuals who have come together to make a difference and contribute in the field of rural education. At JTD we want to prevent students from discontinuing their education due to socio-economic factors.</p>
      </div>

      {/* Success Stories Section */}
      <div className="bg-[#E9EDC9] py-10 px-6">
        <h2 className="text-4xl font-bold text-center mb-6">Success Stories</h2>
        <Slider {...successStoriesSettings} className="w-full">
          <div className="bg-white mx-6 p-6 rounded-lg shadow-md ">
            <h3 className="text-2xl font-bold mb-2">Story of Durga</h3>
            <p>Our efforts helped a child achieve their dreams.</p>
          </div>
          <div className="bg-white mx-6 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Story 2</h3>
            <p>We provided essential support to a struggling Girl.</p>
          </div>
          <div className="bg-white mx-6 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Story 3</h3>
            <p>Our volunteers made a significant impact in the community.</p>
          </div>
          {/* Add more stories as needed */}
        </Slider>
      </div>
    </div>
  );
};

export default Homepage;
