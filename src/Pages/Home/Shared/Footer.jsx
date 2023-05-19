import React from 'react';
import logo from '../../../assets/the-word-of-toys-making-from-little-acrylic-cubes-in-black-background-2JDW7YR.jpg'

const Footer = () => {
  return (
    <div className='mt-96'>
      <footer className="  footer p-10  text-base-content">
        <div className='text-center lg:text-left'>
          <img className='w-[100px] h-[100px] rounded-full' src={logo} alt="" />
          <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;