import React from 'react';

import insta2 from '../assets/insta2.png';
import insta3 from '../assets/insta3.png';
import insta4 from '../assets/insta4.png';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const instaImages = [insta4, insta2, insta3, insta4];

  return (
    <footer className="bg-black text-white md:mt-62">
      {/* Instagram images section */}
      <div className=" relative py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {instaImages.map((img, i) => (
            <div key={i} className="rounded-3xl w-auto h-auto shadow-lg">
              <img
                src={img}
                alt={`Instagram post ${i + 1}`}
                className="w-42 lg:w-60 lg:absolute lg:top-[-110px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer links section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="lg:col-span-1">
          <h3 className="text-3xl font-bold">Desgy Solutions</h3>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300">
              <Facebook className="text-white w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300">
              <Twitter className="text-white w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300">
              <Instagram className="text-white w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Menu Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Menu</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors duration-300">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Popular</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Category Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Category</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors duration-300">Design</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Mockup</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">View all</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Log In</a></li>
          </ul>
        </div>

        {/* Pages Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Pages</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors duration-300">404</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Instructions</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">License</a></li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Others</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors duration-300">Styleguide</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Changelog</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright section */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        <p>©2023 - All Rights Reserved by Adminmart. Distributed by ThemeWagon</p>
        <p className="mt-2">
          <a href="#" className="hover:text-white transition-colors duration-300">Privacy policy</a> |{' '}
          <a href="#" className="hover:text-white transition-colors duration-300">Terms & conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
