import React from 'react';

const PlacementPage = () => {
  return (
    <div className="bg-[#E9EDC9] text-gray-800 dark:text-gray-300 min-h-screen mt-16">
      {/* Placement Overview Section */}
      <section className="bg-white dark:bg-gray-900 p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Placement Overview</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Our placement cell works diligently to provide students with excellent career opportunities. We have a strong network of top recruiters from various industries.
          </p>
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="bg-[#E9EDC9] p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Top Recruiters</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white  p-4 rounded-lg shadow-md">
              <img src="https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2021/10/notion.png" alt="Notion Labs Inc" className="h-20 mx-auto mb-2 w-[200px]" />
              <p className="text-center text-gray-600 dark:text-gray-300">Notion Labs Inc</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <img src="https://1000logos.net/wp-content/uploads/2022/05/Airtable-Logo.jpg" alt="Airtable" className="h-12 mx-auto mt-4 " />
              <p className="text-center text-gray-600 dark:text-gray-300">Airtable</p>
            </div>
            {/* Add more recruiters as needed */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white dark:bg-gray-900 p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Student Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300">
                "The placement cell provided excellent support and guidance. I secured a job at my dream company."
              </p>
              <p className="text-right text-gray-800 dark:text-white font-bold mt-2">- Gargi</p>
            </div>
            {/* Add more testimonials as needed */}
          </div>
        </div>
      </section>

      {/* Placement Process Section */}
      <section className="bg-[#E9EDC9] p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Placement Process</h2>
          <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300">
            <li>Registration for placement</li>
            <li>Pre-placement training and workshops</li>
            <li>Application submission to companies</li>
            <li>Interview and selection process</li>
            <li>Offer and acceptance</li>
          </ol>
        </div>
      </section>

      {/* Placement Resources Section */}
      <section className="bg-white dark:bg-gray-900 p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Placement Resources</h2>
          <p className="text-gray-600 dark:text-gray-300">
            For additional help with placements and internships, explore the following resources:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-300">
            <li>
              <a href="https://www.naukri.com" className="text-blue-600 dark:text-blue-400">Naukri.com</a> - One of India's leading job portals.
            </li>
            <li>
              <a href="https://www.internshala.com" className="text-blue-600 dark:text-blue-400">Internshala</a> - A platform offering internships and training programs.
            </li>
            <li>
              <a href="https://unstop.com" className="text-blue-600 dark:text-blue-400">Unstop</a> - A community engagement platform with various competitions and opportunities.
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-[#E9EDC9] p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300">
            For more information, please contact our placement cell at{' '}
            <a href="mailto:placement@example.com" className="text-blue-600 dark:text-blue-400">
              placement@example.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default PlacementPage;