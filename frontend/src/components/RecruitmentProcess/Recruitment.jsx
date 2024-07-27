import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Recruitment = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('../TestApp');
    }
  return (
    <>
      <div className='border-[5px] border-black relative w-[90vw] rounded-lg p-10 m-auto mt-[100px] px-10 shadow-xl' style={{ background: 'linear-gradient(to bottom, white, #E9EDC9)' }}>
        <div className="mt-10 w-1/2">
          <h1 className="bg-white absolute top-0 translate-y-[-60%] text-9xl font-bold mb-2 uppercase">1</h1>
          <h2 className="text-6xl font-bold mb-2 uppercase">Webinar</h2>
          <p className="text-gray-600 text-xl font-semibold mt-2">
            Join our webinar for third-year students to learn about our recruitment process. Get tips, ask questions, and prepare for your future job search. Don’t miss this chance to boost your career prospects!
          </p>
          <p className="text-gray-600 text-xl mt-10">Date: August 10, 2024</p>
          <p className="text-gray-600 text-xl">Time: 10:00 AM - 11:30 AM</p>
          <button className='text-white rounded-full mt-5 bg-[#697838] flex justify-center gap-2 items-center px-3 py-2 hover:bg-[#5a6b2f]'>
            Participate
            <FaLocationArrow />
          </button>
        </div>
      </div>

      <div className='border-[5px] border-black relative w-[90vw] rounded-lg p-10 m-auto mt-[100px] px-10 shadow-xl' style={{ background: 'linear-gradient(to bottom, white, #E9EDC9)' }}>
        <div className="mt-10 w-1/2">
          <h1 className="bg-white absolute top-0 translate-y-[-60%] text-9xl font-bold mb-2 uppercase">2</h1>
          <h2 className="text-6xl font-bold mb-2 uppercase">Test</h2>
          <p className="text-gray-600 text-xl font-semibold mt-2">
            Participate in our recruitment test to showcase your skills and knowledge. This is an excellent opportunity to demonstrate your abilities and stand out in the recruitment process.
          </p>
          <p className="text-gray-600 text-xl mt-10">Date: August 15, 2024</p>
          <p className="text-gray-600 text-xl">Time: 2:00 PM - 4:00 PM</p>
          <button onClick={handleClick} className='text-white rounded-full mt-5 bg-[#697838] flex justify-center gap-2 items-center px-3 py-2 hover:bg-[#5a6b2f]'>
            Start Test
            <FaLocationArrow />
          </button>
        </div>
      </div>

      <div className='border-[5px] border-black relative w-[90vw] rounded-lg p-10 m-auto mt-[100px] mb-[50px] px-10 shadow-xl' style={{ background: 'linear-gradient(to bottom, white, #E9EDC9)' }}>
        <div className="mt-10 w-1/2">
          <h1 className="bg-white absolute top-0 translate-y-[-60%] text-9xl font-bold mb-2 uppercase">3</h1>
          <h2 className="text-6xl font-bold mb-2 uppercase">Interview</h2>
          <p className="text-gray-600 text-xl font-semibold mt-2">
            Join our interview session to discuss your experiences and skills. This is your chance to make a strong impression and move forward in our recruitment process.
          </p>
          <p className="text-gray-600 text-xl mt-10">Date: August 20, 2024</p>
          <p className="text-gray-600 text-xl">Time: 10:00 AM - 12:00 PM</p>
          <button className='text-white rounded-full mt-5 bg-[#697838] flex justify-center gap-2 items-center px-3 py-2 hover:bg-[#5a6b2f]'>
            Join Now
            <FaLocationArrow />
          </button>
        </div>
      </div>
    </>
  );
};

export default Recruitment;
