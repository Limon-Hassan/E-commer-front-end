import React from 'react';
import Container from '../../Container/Container';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav className="pt-[40px] pb-[20px] border-b border-[#000000]/20">
        <Container>
          <div className="flex justify-between items-center ">
            <a href="#">
              <img src="/Logo.png" alt="Logo" />
            </a>
            <ul className="flex">
              <li>
                <Link
                  to="/"
                  class="relative text-[16px] font-Poppipns_FONT leading-6 font-medium ml-[48px] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  class="relative text-[16px] font-Poppipns_FONT leading-6 font-medium ml-[48px] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  class="relative text-[16px] font-Poppipns_FONT leading-6 font-medium ml-[48px] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/sign up"
                  class="relative text-[16px] font-Poppipns_FONT leading-6 font-medium ml-[48px] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            <div className="w-[350px] h-[40px] relative">
              <input
                className="w-full h-full rounded-[5px] pl-[20px] pr-[40px] placeholder:text-[12px] placeholder:text-[#000000]  placeholder:font-Poppipns_FONT pb-[5px] bg-[#F5F5F5] "
                placeholder="What are you looking for?"
                type="text"
              />
              <span className="absolute top-[8px] right-[10px] text-[15px] cursor-pointer  after:content-[''] after:absolute after:w-[30px] after:h-[30px] after:bg-[#000]/20 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2">
                <i class="fa-sharp fa-regular fa-magnifying-glass relative z-10"></i>
              </span>
            </div>
            <span className="text-[24px] cursor-pointer">
              <i class="fa-regular fa-cart-shopping"></i>
            </span>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Nav;
