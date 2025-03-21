import React from 'react';
import Container from '../../Container/Container';
import Benner_3 from '../Benner_3/Benner_3';

const Benner_2 = () => {
  return (
    <>
      <section>
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
          <div className="flex items-center gap-[30px] mb-[80px]">
            <div className="main_1 w-[170px] h-[145px] flex justify-center items-center flex-col border border-[#000000]/30 rounded-[4px] hover:bg-[#DB4444] ease-in-out duration-300 group cursor-pointer">
              <i class="fa-thin fa-mobile text-[56px] mb-[18px] group-hover:text-[#FFF] ease-in-out duration-300"></i>
              <span className="text-[16px] font-Poppipns_FONT font-medium text-[#000] leading-6 group-hover:text-[#FFF] ease-in-out duration-300">
                Phones
              </span>
            </div>
            <div className="main_2 w-[170px] h-[145px] flex justify-center items-center flex-col border border-[#000000]/30 rounded-[4px] hover:bg-[#DB4444] ease-in-out duration-300 group cursor-pointer">
              <i class="fa-thin fa-desktop text-[56px] mb-[18px] group-hover:text-[#FFF] ease-in-out duration-300"></i>
              <span className="text-[16px] font-Poppipns_FONT font-medium text-[#000] leading-6 group-hover:text-[#FFF] ease-in-out duration-300">
                Computers
              </span>
            </div>
            <div className="main_3 w-[170px] h-[145px] flex justify-center items-center flex-col border border-[#000000]/30 rounded-[4px] hover:bg-[#DB4444] ease-in-out duration-300 group cursor-pointer">
              <i class="fa-thin fa-watch-smart text-[56px] mb-[18px] group-hover:text-[#FFF] ease-in-out duration-300"></i>
              <span className="text-[16px] font-Poppipns_FONT font-medium text-[#000] leading-6 group-hover:text-[#FFF] ease-in-out duration-300">
                SmartWatch
              </span>
            </div>
            <div className="main_4 w-[170px] h-[145px] flex justify-center items-center flex-col border border-[#000000]/30 rounded-[4px] hover:bg-[#DB4444] ease-in-out duration-300 group cursor-pointer">
              <i class="fa-thin fa-camera text-[56px] mb-[18px] group-hover:text-[#FFF] ease-in-out duration-300"></i>
              <span className="text-[16px] font-Poppipns_FONT font-medium text-[#000] leading-6 group-hover:text-[#FFF] ease-in-out duration-300">
                Camera
              </span>
            </div>
            <div className="main_5 w-[170px] h-[145px] flex justify-center items-center flex-col border border-[#000000]/30 rounded-[4px] hover:bg-[#DB4444] ease-in-out duration-300 group cursor-pointer">
              <i class="fa-thin fa-headphones text-[56px] mb-[18px] group-hover:text-[#FFF] ease-in-out duration-300"></i>
              <span className="text-[16px] font-Poppipns_FONT font-medium text-[#000] leading-6 group-hover:text-[#FFF] ease-in-out duration-300">
                HeadPhones
              </span>
            </div>
            <div className="main_6 w-[170px] h-[145px] flex justify-center items-center flex-col border border-[#000000]/30 rounded-[4px] hover:bg-[#DB4444] ease-in-out duration-300 group cursor-pointer">
              <i class="fa-sharp fa-thin fa-gamepad text-[56px] mb-[18px] group-hover:text-[#FFF] ease-in-out duration-300"></i>
              <span className="text-[16px] font-Poppipns_FONT font-medium text-[#000] leading-6 group-hover:text-[#FFF] ease-in-out duration-300">
                Gaming
              </span>
            </div>
          </div>
        </Container>
      </section>
      <Benner_3 />
    </>
  );
};

export default Benner_2;
