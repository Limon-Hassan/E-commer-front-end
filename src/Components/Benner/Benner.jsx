import React from 'react';
import Container from '../../Container/Container';
import Benner_1 from '../Benner_1/Benner_1';

const Benner = () => {
  return (
    <>
      <section>
        <Container>
          <div className="bg-[#000000] flex gap-[38px] mt-[40px]">
            <div className="pt-[58px] ml-[64px]">
              <div className="flex items-center gap-[24px] mb-[20px]">
                <i class="fa-brands fa-apple text-[40px] text-[#FFF]"></i>
                <span className="text-[16px] font-Poppipns_FONT font-medium leading-6 text-[#FFF]">
                  iPhone 14 Series
                </span>
              </div>
              <h1 className="text-[48px] font-Inter_FONT font-semibold text-[#FAFAFA] leading-[60px] w-[289px] mb-[22px]">
                Up to 10% off Voucher
              </h1>
              <button className=" mb-[48px]">
                <a
                  href="#"
                  class="relative text-white text-lg font-medium inline-flex items-center gap-2 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-[81px] hover:after:w-full after:ease-in-out after:h-[1.5px] after:bg-white after:scale-x-100 after:transition-transform after:duration-300 group"
                >
                  Shop Now
                  <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </a>
              </button>
            </div>
            <img className="mt-[15px]" src="/benner.png" alt="benner" />
          </div>
        </Container>
      </section>
      <Benner_1 />
    </>
  );
};

export default Benner;
