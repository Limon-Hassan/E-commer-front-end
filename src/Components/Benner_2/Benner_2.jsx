import React from 'react';
import Container from '../../Container/Container';

const Benner_2 = () => {
  return (
    <section className="mb-[200px]">
      <Container>
        <div className="mb-[40px]">
          <div className="flex items-center space-x-2 ">
            <span className="w-[20px] h-[40px] bg-red-500 rounded-md"></span>
            <span className="text-[#DB4444] text-[18px] font-Poppipns_FONT  font-semibold leading-[20px]">
              Features
            </span>
          </div>

          <div className="flex justify-between items-center">
            <h2 className="text-[36px] font-Inter_FONT font-semibold leading-[48px] text-black mt-[25px]">
              Features Products
            </h2>
            <span className="flex items-center gap-[12px] ">
              <button class=" bg-gray-100 hover:bg-gray-200 focus:outline-none after:content[''] after:w-[48px] after:h-[48px] rounded-full px-[12px] pt-[10px] pb-[9px]">
                <i class="fa-solid fa-arrow-left text-[24px]"></i>
              </button>
              <button class=" bg-gray-100 hover:bg-gray-200 focus:outline-none after:content[''] after:w-[48px] after:h-[48px] rounded-full px-[12px] pt-[10px] pb-[9px]">
                <i class="fa-solid fa-arrow-right text-[24px]"></i>
              </button>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Benner_2;
