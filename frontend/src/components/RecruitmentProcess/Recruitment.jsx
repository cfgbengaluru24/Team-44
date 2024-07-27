import React from 'react';

const Recruitment = () => {
  return (
    <>
    
      
        <div className="shadow-md w-full rounded-lg p-4 m-4 bg-[#E9EDC9]">
            <h2 className="text-xl font-bold mb-2">Webinar</h2>
            <p className="text-gray-700">Join us for an informative webinar on our latest recruitment process and opportunities.</p>
            <p className="text-gray-600">Date: August 10, 2024</p>
            <p className="text-gray-600">Time: 10:00 AM - 11:30 AM</p>
            <a href="https://www.google.com" className="bg-white text-blue-500 hover:underline px-4 rounded-full">Join Webinar</a>
        </div>
        <div className=" shadow-md rounded-lg p-4 m-4 bg-[#E9EDC9]">
            <h2 className="text-xl font-bold mb-2">Test</h2>
            <p className="text-gray-700">Take our aptitude and technical test to qualify for the next round of the recruitment process.</p>
            <p className="text-gray-600">Date: August 15, 2024</p>
            <p className="text-gray-600">Time: 2:00 PM - 4:00 PM</p>
            <a href="https://example.com/test-link" className="bg-white text-blue-500 hover:underline px-4 rounded-full">Take Test</a>
        </div>
        <div className="shadow-md rounded-lg p-4 m-4 bg-[#E9EDC9]">
            <h2 className="text-xl font-bold mb-2">Interview</h2>
            <p className="text-gray-700">Prepare for your interview with our team. Review the job description and come with your best self.</p>
            <p className="text-gray-600">Date: August 20, 2024</p>
            <p className="text-gray-600">Time: 9:00 AM - 12:00 PM</p>
            <a href="https://example.com/interview-link" className="bg-white text-blue-500 hover:underline px-4 rounded-full">Join Interview</a>
        </div>
      
    
    
    </>
  );
};

export default Recruitment;
