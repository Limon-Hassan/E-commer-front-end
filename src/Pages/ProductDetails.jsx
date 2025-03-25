import React from 'react';
import Container from '../Container/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductDetails = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <section className="mt-[180px] mb-[120px]">
        <Container>
          <h3 className="text-[25px] mt-[-100px] mb-[50px] font-Poppipns_FONT font-medium text-black leading-7">
            Product Details
          </h3>
          <div className="w-full grid grid-cols-2 ">
            <div className="flex items-center gap-[30px]">
              <div className="flex flex-col gap-4">
                <div className="w-[120px] h-[110px] rounded-lg bg-[#F5F5F5] p-4">
                  <img
                    src="/image 57.png"
                    alt="Thumb 1"
                    className="w-full h-full  rounded-lg"
                  />
                </div>
                <div className="w-[120px] h-[110px] rounded-lg bg-[#F5F5F5] p-4">
                  <img
                    src="/image 58.png"
                    alt="Thumb 2"
                    className="w-full h-full  rounded-lg"
                  />
                </div>
                <div className="w-[120px] h-[110px] rounded-lg bg-[#F5F5F5] p-4">
                  <img
                    src="/image 61.png"
                    alt="Thumb 3"
                    className="w-full h-full  rounded-lg"
                  />
                </div>
                <div className="w-[120px] h-[110px] rounded-lg bg-[#F5F5F5] p-4">
                  <img
                    src="/image 59.png"
                    alt="Thumb 4"
                    className="w-full h-full  rounded-lg"
                  />
                </div>
              </div>
              <div className=" w-[500px] h-[485px] bg-[#F5F5F5] rounded ">
                <img
                  src="/image 63.png"
                  alt="Main Product"
                  className="w-full h-full py-[130px] px-[30px]"
                />
              </div>
            </div>

            <div className="ml-[150px]">
              <div className="border-b-2 border-black/20">
                <h2 className="text-2xl font-Inter_FONT mb-[16px] font-semibold">
                  Havic HV G-92 Gamepad
                </h2>
                <div className="flex items-center mt-2 text-gray-600">
                  ⭐⭐⭐⭐⭐ <span className="ml-2 text-sm">(150 Reviews)</span>
                  <span className="ml-4 text-green-500">In Stock</span>
                </div>
                <p className="text-2xl font-Inter_FONT font-bold mt-[16px] mb-[24px]">
                  $192.00
                </p>
                <p className="text-[14px] font-Poppipns_FONT font-normal text-[#000000] leading-5 w-[381px] mb-[24px]">
                  PlayStation 5 Controller Skin High quality vinyl with air
                  channel adhesive for easy bubble free install & mess free
                  removal Pressure sensitive.
                </p>
              </div>

              <div className="mt-4 flex items-center">
                <span className="font-medium">Colours:</span>
                <button className="w-6 h-6 bg-red-500 rounded-full ml-[24px]"></button>
                <button className="w-6 h-6 bg-gray-300 rounded-full ml-[8px]"></button>
              </div>

              <div className="mt-4">
                <span className="font-medium">Size:</span>
                <div className="inline-flex ml-2 space-x-2">
                  <button className="border px-3 py-1 rounded">XS</button>
                  <button className="border px-3 py-1 rounded">S</button>
                  <button className="border px-3 py-1 rounded bg-red-500 text-white">
                    M
                  </button>
                  <button className="border px-3 py-1 rounded">L</button>
                  <button className="border px-3 py-1 rounded">XL</button>
                </div>
              </div>

              <div className="mt-4 flex items-center">
                <button className="text-[24px] border w-[40px] hover:bg-[#DB4444] hover:text-white ease-in-out duration-300">
                  -
                </button>
                <span className="px-4">2</span>
                <button className="text-[24px] border w-[40px] hover:bg-[#DB4444] hover:text-white ease-in-out duration-300">
                  +
                </button>
                <button className="ml-4 bg-red-500 text-white px-6 py-2 rounded">
                  Buy Now
                </button>
              </div>

              <div className="mt-6 border p-4 flex gap-[10px] items-center rounded-lg">
                <div>
                  <i class="fa-thin fa-truck-fast text-[24px]"></i>
                </div>
                <div>
                  <p className="font-medium font-Poppipns_FONT">
                    Free Delivery
                  </p>
                  <p className="text-sm text-gray-600 font-Poppipns_FONT">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="mt-2 border flex gap-[10px] items-center p-4 rounded-lg">
                <div>
                  <i class="fa-solid fa-rotate-reverse text-[24px]"></i>
                </div>
                <div>
                  <p className="font-medium">Return Delivery</p>
                  <p className="text-sm text-gray-600">
                    Free 30 Days Delivery Returns.
                    <span className="text-blue-500 ml-2 cursor-pointer">
                      Details
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[40px] mt-[120px]">
            <div className="flex items-center space-x-2 ">
              <span className="w-[20px] h-[40px] bg-red-500 rounded-md"></span>
              <span className="text-[#DB4444] text-[18px] font-Poppipns_FONT  font-semibold leading-[20px]">
                Related Item
              </span>
            </div>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              <div className="1">
                <div>
                  <div className="w-[270px] h-[250px] bg-[#F5F5F5] items-center justify-center flex rounded-[4px] relative group overflow-hidden">
                    <div className="text-[12px] font-Poppipns_FONT bg-[#DB4444] py-[8px] px-[12px] font-medium text-[#FAFAFA] leading-[18px] rounded-[4px] absolute top-[12px] left-[12px]">
                      -40%
                    </div>
                    <img src="/image_1.png" alt="image_1" />
                    <div className="w-[34px] h-[34px] rounded-full bg-[#FFFFFF] flex items-center justify-center mt-[-190px] ml-[200px] absolute">
                      <i class="fa-regular fa-heart cursor-pointer"></i>
                    </div>
                    <button class="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-[16px] leading-6 font-Poppipns_FONT font-medium transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Add To Cart
                    </button>
                  </div>
                  <h3 className="text-[18px] font-Poppipns_FONT font-medium leading-6 text-[#000000] mt-[16px] mb-[10px]">
                    HAVIT HV-G92 Gamepad
                  </h3>
                  <div className="flex gap-[12px] items-center mb-[10px]">
                    <span className="text-[16px] font-Poppipns_FONT font-bold text-[#DB4444] ">
                      $120
                    </span>
                    <span className="text-[16px] font-Poppipns_FONT font-bold text-[#000000]/50 line-through">
                      $160
                    </span>
                  </div>
                  <div className="flex gap-[10px]">
                    <span className="text-[#FFAD33] flex">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span className="text-[14px] font-Poppipns_FONT font-semibold leading-[21px] text-[#000000]/50">
                      (88)
                    </span>
                  </div>
                </div>
              </div>
              <div className="2">
                <div>
                  <div className="w-[270px] h-[250px] bg-[#F5F5F5] items-center justify-center flex rounded-[4px] relative group overflow-hidden">
                    <div className="text-[12px] font-Poppipns_FONT bg-[#DB4444] py-[8px] px-[12px] font-medium text-[#FAFAFA] leading-[18px] rounded-[4px] absolute top-[12px] left-[12px]">
                      -35%
                    </div>
                    <img src="/keyboard.png" alt="keyboard" />
                    <div className="w-[34px] h-[34px] rounded-full bg-[#FFFFFF] flex items-center justify-center mt-[-190px] ml-[200px] absolute">
                      <i class="fa-regular fa-heart cursor-pointer"></i>
                    </div>
                    <button class="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-[16px] leading-6 font-Poppipns_FONT font-medium transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Add To Cart
                    </button>
                  </div>
                  <h3 className="text-[18px] font-Poppipns_FONT font-medium leading-6 text-[#000000] mt-[16px] mb-[10px]">
                    AK-900 Wired Keyboard
                  </h3>
                  <div className="flex gap-[12px] items-center mb-[10px]">
                    <span className="text-[16px] font-Poppipns_FONT font-bold text-[#DB4444] ">
                      $960
                    </span>
                    <span className="text-[16px] font-Poppipns_FONT font-bold text-[#000000]/50 line-through">
                      $1160
                    </span>
                  </div>
                  <div className="flex gap-[10px]">
                    <span className="text-[#FFAD33] flex">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span className="text-[14px] font-Poppipns_FONT font-semibold leading-[21px] text-[#000000]/50">
                      (88)
                    </span>
                  </div>
                </div>
              </div>
              <div className="3">
                <div>
                  <div className="w-[270px] h-[250px] bg-[#F5F5F5] items-center justify-center flex rounded-[4px] relative group overflow-hidden">
                    <div className="text-[12px] font-Poppipns_FONT bg-[#DB4444] py-[8px] px-[12px] font-medium text-[#FAFAFA] leading-[18px] rounded-[4px] absolute top-[12px] left-[12px]">
                      -30%
                    </div>
                    <img src="/monitor.png" alt="monitor" />
                    <div className="w-[34px] h-[34px] rounded-full bg-[#FFFFFF] flex items-center justify-center mt-[-190px] ml-[200px] absolute">
                      <i class="fa-regular fa-heart cursor-pointer"></i>
                    </div>
                    <button class="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-[16px] leading-6 font-Poppipns_FONT font-medium transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Add To Cart
                    </button>
                  </div>
                  <h3 className="text-[18px] font-Poppipns_FONT font-medium leading-6 text-[#000000] mt-[16px] mb-[10px]">
                    IPS LCD Gaming Monitor
                  </h3>
                  <div className="flex gap-[12px] items-center mb-[10px]">
                    <span className="text-[16px] font-Poppipns_FONT font-bold text-[#DB4444] ">
                      $120
                    </span>
                    <span className="text-[16px] font-Poppipns_FONT font-bold text-[#000000]/50 line-through">
                      $160
                    </span>
                  </div>
                  <div className="flex gap-[10px]">
                    <span className="text-[#FFAD33] flex">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span className="text-[14px] font-Poppipns_FONT font-semibold leading-[21px] text-[#000000]/50">
                      (88)
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="w-[270px] h-[250px] bg-[#F5F5F5] items-center justify-center flex rounded-[4px] relative group overflow-hidden">
                    <div className="text-[12px] font-Poppipns_FONT bg-[#DB4444] py-[8px] px-[12px] font-medium text-[#FAFAFA] leading-[18px] rounded-[4px] absolute top-[12px] left-[12px]">
                      -20%
                    </div>
                    <img src="/chair.png" alt="chair" />
                    <div className="w-[34px] h-[34px] rounded-full bg-[#FFFFFF] flex items-center justify-center mt-[-190px] ml-[200px] absolute">
                      <i class="fa-regular fa-heart cursor-pointer"></i>
                    </div>
                    <button class="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-[16px] leading-6 font-Poppipns_FONT font-medium transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Add To Cart
                    </button>
                  </div>
                  <h3 className="text-[18px] font-Poppipns_FONT font-medium leading-6 text-[#000000] mt-[16px] mb-[10px]">
                    S-Series Comfort Chair
                  </h3>
                  <div className="flex gap-[12px] items-center mb-[10px]">
                    <span className="text-[16px] font-Poppipns_FONT font-bold text-[#DB4444] ">
                      $120
                    </span>
                    <span className="text-[16px] font-Poppipns_FONT font-bold text-[#000000]/50 line-through">
                      $160
                    </span>
                  </div>
                  <div className="flex gap-[10px]">
                    <span className="text-[#FFAD33] flex">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span className="text-[14px] font-Poppipns_FONT font-semibold leading-[21px] text-[#000000]/50">
                      (88)
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          {/* <div className="flex gap-[30px] items-center">
            <div>
              <div className="w-[270px] h-[250px] bg-[#F5F5F5] items-center justify-center flex rounded-[4px] relative group overflow-hidden">
                <div className="text-[12px] font-Poppipns_FONT bg-[#DB4444] py-[8px] px-[12px] font-medium text-[#FAFAFA] leading-[18px] rounded-[4px] absolute top-[12px] left-[12px]">
                  -40%
                </div>
                <img src="/image_1.png" alt="image_1" />
                <div className="w-[34px] h-[34px] rounded-full bg-[#FFFFFF] flex items-center justify-center mt-[-190px] ml-[200px] absolute">
                  <i class="fa-regular fa-heart cursor-pointer"></i>
                </div>
                <button class="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-[16px] leading-6 font-Poppipns_FONT font-medium transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Add To Cart
                </button>
              </div>
              <h3 className="text-[18px] font-Poppipns_FONT font-medium leading-6 text-[#000000] mt-[16px] mb-[10px]">
                HAVIT HV-G92 Gamepad
              </h3>
              <div className="flex gap-[12px] items-center mb-[10px]">
                <span className="text-[16px] font-Poppipns_FONT font-bold text-[#DB4444] ">
                  $120
                </span>
                <span className="text-[16px] font-Poppipns_FONT font-bold text-[#000000]/50 line-through">
                  $160
                </span>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[#FFAD33] flex">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <span className="text-[14px] font-Poppipns_FONT font-semibold leading-[21px] text-[#000000]/50">
                  (88)
                </span>
              </div>
            </div>
            <div>
              <div className="w-[270px] h-[250px] bg-[#F5F5F5] items-center justify-center flex rounded-[4px] relative group overflow-hidden">
                <div className="text-[12px] font-Poppipns_FONT bg-[#DB4444] py-[8px] px-[12px] font-medium text-[#FAFAFA] leading-[18px] rounded-[4px] absolute top-[12px] left-[12px]">
                  -35%
                </div>
                <img src="/keyboard.png" alt="keyboard" />
                <div className="w-[34px] h-[34px] rounded-full bg-[#FFFFFF] flex items-center justify-center mt-[-190px] ml-[200px] absolute">
                  <i class="fa-regular fa-heart cursor-pointer"></i>
                </div>
                <button class="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-[16px] leading-6 font-Poppipns_FONT font-medium transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Add To Cart
                </button>
              </div>
              <h3 className="text-[18px] font-Poppipns_FONT font-medium leading-6 text-[#000000] mt-[16px] mb-[10px]">
                AK-900 Wired Keyboard
              </h3>
              <div className="flex gap-[12px] items-center mb-[10px]">
                <span className="text-[16px] font-Poppipns_FONT font-bold text-[#DB4444] ">
                  $960
                </span>
                <span className="text-[16px] font-Poppipns_FONT font-bold text-[#000000]/50 line-through">
                  $1160
                </span>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[#FFAD33] flex">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <span className="text-[14px] font-Poppipns_FONT font-semibold leading-[21px] text-[#000000]/50">
                  (88)
                </span>
              </div>
            </div>
            <div>
              <div className="w-[270px] h-[250px] bg-[#F5F5F5] items-center justify-center flex rounded-[4px] relative group overflow-hidden">
                <div className="text-[12px] font-Poppipns_FONT bg-[#DB4444] py-[8px] px-[12px] font-medium text-[#FAFAFA] leading-[18px] rounded-[4px] absolute top-[12px] left-[12px]">
                  -30%
                </div>
                <img src="/monitor.png" alt="monitor" />
                <div className="w-[34px] h-[34px] rounded-full bg-[#FFFFFF] flex items-center justify-center mt-[-190px] ml-[200px] absolute">
                  <i class="fa-regular fa-heart cursor-pointer"></i>
                </div>
                <button class="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-[16px] leading-6 font-Poppipns_FONT font-medium transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Add To Cart
                </button>
              </div>
              <h3 className="text-[18px] font-Poppipns_FONT font-medium leading-6 text-[#000000] mt-[16px] mb-[10px]">
                IPS LCD Gaming Monitor
              </h3>
              <div className="flex gap-[12px] items-center mb-[10px]">
                <span className="text-[16px] font-Poppipns_FONT font-bold text-[#DB4444] ">
                  $120
                </span>
                <span className="text-[16px] font-Poppipns_FONT font-bold text-[#000000]/50 line-through">
                  $160
                </span>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[#FFAD33] flex">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <span className="text-[14px] font-Poppipns_FONT font-semibold leading-[21px] text-[#000000]/50">
                  (88)
                </span>
              </div>
            </div>
            <div>
              <div className="w-[270px] h-[250px] bg-[#F5F5F5] items-center justify-center flex rounded-[4px] relative group overflow-hidden">
                <div className="text-[12px] font-Poppipns_FONT bg-[#DB4444] py-[8px] px-[12px] font-medium text-[#FAFAFA] leading-[18px] rounded-[4px] absolute top-[12px] left-[12px]">
                  -20%
                </div>
                <img src="/chair.png" alt="chair" />
                <div className="w-[34px] h-[34px] rounded-full bg-[#FFFFFF] flex items-center justify-center mt-[-190px] ml-[200px] absolute">
                  <i class="fa-regular fa-heart cursor-pointer"></i>
                </div>
                <button class="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-[16px] leading-6 font-Poppipns_FONT font-medium transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Add To Cart
                </button>
              </div>
              <h3 className="text-[18px] font-Poppipns_FONT font-medium leading-6 text-[#000000] mt-[16px] mb-[10px]">
                S-Series Comfort Chair
              </h3>
              <div className="flex gap-[12px] items-center mb-[10px]">
                <span className="text-[16px] font-Poppipns_FONT font-bold text-[#DB4444] ">
                  $120
                </span>
                <span className="text-[16px] font-Poppipns_FONT font-bold text-[#000000]/50 line-through">
                  $160
                </span>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[#FFAD33] flex">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <span className="text-[14px] font-Poppipns_FONT font-semibold leading-[21px] text-[#000000]/50">
                  (88)
                </span>
              </div>
            </div>
          </div> */}
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
