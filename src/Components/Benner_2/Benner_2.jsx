import React, { useRef } from 'react';
import Container from '../../Container/Container';
import Slider from 'react-slick';

const Benner_2 = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false, 
  };
  return (
    <section className='mb-[80px]'>
      <Container>
        <div className="mb-[40px]">
          <div className="flex items-center space-x-2 ">
            <span className="w-[20px] h-[40px] bg-red-500 rounded-md"></span>
            <span className="text-[#DB4444] text-[18px] font-semibold leading-[20px]">
              Features
            </span>
          </div>

          <div className="flex justify-between items-center">
            <h2 className="text-[36px] font-semibold leading-[48px] text-black mt-[25px]">
              Features Products
            </h2>
            <span className="flex items-center gap-[12px] ">
              <button
                className="bg-gray-100 hover:bg-gray-200 focus:outline-none rounded-full px-[12px] pt-[10px] pb-[9px]"
                onClick={() => sliderRef.current?.slickPrev()}
              >
                <i className="fa-solid fa-arrow-left text-[24px]"></i>
              </button>
              <button
                className="bg-gray-100 hover:bg-gray-200 focus:outline-none rounded-full px-[12px] pt-[10px] pb-[9px]"
                onClick={() => sliderRef.current?.slickNext()}
              >
                <i className="fa-solid fa-arrow-right text-[24px]"></i>
              </button>
            </span>
          </div>
        </div>

        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {[
              { icon: 'fa-mobile', label: 'Phones' },
              { icon: 'fa-desktop', label: 'Computers' },
              { icon: 'fa-watch-smart', label: 'SmartWatch' },
              { icon: 'fa-camera', label: 'Camera' },
              { icon: 'fa-headphones', label: 'HeadPhones' },
              { icon: 'fa-gamepad', label: 'Gaming' },
              { icon: 'fa-laptop', label: 'Laptop' },
              { icon: 'fa-tv', label: 'TV' },
              { icon: 'fa-tablet', label: 'Tablet' },
              { icon: 'fa-tv', label: 'Monitor' },
            ].map((item, index) => (
              <div key={index}>
                <div className="w-[170px] h-[145px] flex justify-center items-center flex-col border border-[#000000]/30 rounded-[4px] hover:bg-[#DB4444] ease-in-out duration-300 group cursor-pointer">
                  <i
                    className={`fa-thin ${item.icon} text-[56px] mb-[18px] group-hover:text-[#FFF] ease-in-out duration-300`}
                  ></i>
                  <span className="text-[16px] font-Poppipns_FONT font-medium text-[#000] leading-6 group-hover:text-[#FFF] ease-in-out duration-300">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Benner_2;
