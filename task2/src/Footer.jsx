// import React from 'react';
import logo from "./assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/4 text-center mb-8 md:mb-0">
            <img src={logo} alt="Logo" className="mx-auto mb-4" />
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Nibh leo amet sed orci ipsum lectus pretium diam. Placerat ipsum volutpat commodo sodales.</p>
          </div>
          <div className="w-full md:w-1/4 text-center">
            <h3 className="text-lg font-semibold mb-4">Job Seekers</h3>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Search Jobs</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Explore Jobs</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Saved Jobs</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Applied Jobs</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center">
            <h3 className="text-lg font-semibold mb-4">Employers</h3>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Register</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Post Jobs</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Applications</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">My Job Postings</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Cookies Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Terms of Services</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
