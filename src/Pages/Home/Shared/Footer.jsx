import React from 'react';

const Footer = () => {
    return (
        <div className='mt-96'>
            <footer className="py-8 shadow-xl p-10 rounded-lg">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center justify-between">
      <div className="w-full md:w-auto text-center md:text-left">
        <p className=" text-lg font-bold">Your Company Name</p>
        <p className="text-gray-400 text-sm">123 Street, City, Country</p>
      </div>
      <div className="w-full md:w-auto text-center md:text-right mt-4 md:mt-0">
        <p className=" text-sm">Phone: (123) 456-7890</p>
        <p className=" text-sm">Email: info@example.com</p>
      </div>
      <div className="w-full md:w-auto text-center">
        <ul className="flex justify-center md:justify-end space-x-4">
          <li><a href="#" className="text-gray-500 hover: text-sm">Home</a></li>
          <li><a href="#" className="text-gray-500 hover: text-sm">About</a></li>
          <li><a href="#" className="text-gray-500 hover: text-sm">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;