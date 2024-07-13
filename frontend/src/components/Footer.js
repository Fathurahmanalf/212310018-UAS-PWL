import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-blue-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-400">About Us</a>
            <a href="#" className="hover:text-gray-400">Press Releases</a>
            <a href="#" className="hover:text-gray-400">Environment</a>
            <a href="#" className="hover:text-gray-400">Jobs</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <div className="mt-4">
          &copy; 2024 HappyParenting | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
