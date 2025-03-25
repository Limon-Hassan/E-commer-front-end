import React from 'react';
import Container from '../Container/Container';
import Checkbox from './Checkbox';
import { useState } from 'react';

const CheckOut = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [saveInfo, setSaveInfo] = useState(false);
  const handlePaymentChange = option => {
    setSelectedPayment(option); 
  };
  return (
    <>
      <section className="mt-[30px] mb-[100px]">
        <Container>
          <h3 className="text-[36px] font-Poppipns_FONT font-medium leading-[30px] text-[#000] mb-[34px]">
            Billing Details
          </h3>
          <div className="mainpart flex gap-[170px]">
            <div>
              <div className="w-[470px] mb-[50px] h-[50px]">
                <label
                  htmlFor="name"
                  className="text-[15px] font-Poppipns_FONT font-[400]"
                >
                  Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="border-border border rounded-md outline-none px-4 text-[15px] font-Poppipns_FONT font-normal text-black/50  w-full mt-1 py-3 focus:border-primary transition-colors duration-300 bg-[#F5F5F5]"
                />
              </div>
              <div className="w-[470px] mb-[50px] h-[50px]">
                <label
                  htmlFor="name"
                  className="text-[15px] font-Poppipns_FONT font-[400]"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Company Name"
                  className="border-border border rounded-md outline-none px-4 text-[15px] font-Poppipns_FONT font-normal text-black/50  w-full mt-1 py-3 focus:border-primary transition-colors duration-300 bg-[#F5F5F5]"
                />
              </div>
              <div className="w-[470px] mb-[50px] h-[50px]">
                <label
                  htmlFor="name"
                  className="text-[15px] font-Poppipns_FONT font-[400]"
                >
                  Street Address <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Street Address"
                  className="border-border border rounded-md outline-none px-4 text-[15px] font-Poppipns_FONT font-normal text-black/50  w-full mt-1 py-3 focus:border-primary transition-colors duration-300 bg-[#F5F5F5]"
                />
              </div>
              <div className="w-[470px] mb-[50px] h-[50px]">
                <label
                  htmlFor="name"
                  className="text-[15px] font-Poppipns_FONT font-[400]"
                >
                  Apartment, floor, etc. (optional)
                  <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Apartment, floor, etc. (optional)"
                  className="border-border border rounded-md outline-none px-4 text-[15px] font-Poppipns_FONT font-normal text-black/50  w-full mt-1 py-3 focus:border-primary transition-colors duration-300 bg-[#F5F5F5]"
                />
              </div>
              <div className="w-[470px] mb-[50px] h-[50px]">
                <label
                  htmlFor="name"
                  className="text-[15px] font-Poppipns_FONT font-[400]"
                >
                  Town/City <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Town/City"
                  className="border-border border rounded-md outline-none px-4 text-[15px] font-Poppipns_FONT font-normal text-black/50  w-full mt-1 py-3 focus:border-primary transition-colors duration-300 bg-[#F5F5F5]"
                />
              </div>
              <div className="w-[470px] mb-[50px] h-[50px]">
                <label
                  htmlFor="name"
                  className="text-[15px] font-Poppipns_FONT font-[400]"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Phone Number"
                  className="border-border border rounded-md outline-none px-4 text-[15px] font-Poppipns_FONT font-normal text-black/50  w-full mt-1 py-3 focus:border-primary transition-colors duration-300 bg-[#F5F5F5]"
                />
              </div>
              <div className="w-[470px] mb-[50px] h-[50px]">
                <label
                  htmlFor="name"
                  className="text-[15px] font-Poppipns_FONT font-[400]"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Email Address"
                  className="border-border border rounded-md outline-none px-4 text-[15px] font-Poppipns_FONT font-normal text-black/50  w-full mt-1 py-3 focus:border-primary transition-colors duration-300 bg-[#F5F5F5]"
                />
                <div className="flex gap-4 items-center mt-[24px]">
                  <Checkbox
                    label="Save this information for faster check-out next time"
                    checked={saveInfo}
                    onChange={() => setSaveInfo(!saveInfo)}
                  />
                </div>
              </div>
            </div>

            <div className="part-2 w-[420px]">
              <div className="w-[420px] h-[220px] overflow-y-scroll p-3 shadow-md shadow-black/10 rounded-lg bg-white">
                <div className="flex items-center justify-between  ml-[10px] border-b border-black/20">
                  <div className="flex items-center gap-5 mb-[20px] mt-[16px]">
                    <img
                      className="w-[54px] h-[54px]"
                      src="/image_1.png"
                      alt="image_1"
                    />
                    <span className="text-[16px] font-Poppipns_FONT font-normal leading-6 text-[#000]">
                      LCD Monitor
                    </span>
                  </div>
                  <span className="text-[16px] font-Poppipns_FONT font-normal leading-6 text-[#000]">
                    $650
                  </span>
                </div>
                <div className="flex items-center justify-between  ml-[10px] border-b border-black/20">
                  <div className="flex items-center gap-5 mb-[20px] mt-[16px]">
                    <img
                      className="w-[54px] h-[54px]"
                      src="/image_1.png"
                      alt="image_1"
                    />
                    <span className="text-[16px] font-Poppipns_FONT font-normal leading-6 text-[#000]">
                      LCD Monitor
                    </span>
                  </div>
                  <span className="text-[16px] font-Poppipns_FONT font-normal leading-6 text-[#000]">
                    $650
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-black/20 ">
                <h3 className="text-[16px] font-Poppipns_FONT font-normal leading-6 text-[#000] mb-[16px] mt-[20px]">
                  Subtotal:
                </h3>
                <span className="text-[16px] font-Poppipns_FONT font-normal leading-6 text-[#000]">
                  $3000
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-black/20 mb-[16px]">
                <h3 className="text-[16px] font-Poppipns_FONT font-normal leading-6 text-[#000] mb-[16px] mt-[20px]">
                  Shipping:
                </h3>
                <span className="text-[16px] font-Poppipns_FONT font-normal leading-6 text-[#000]">
                  Free
                </span>
              </div>
              <div className="flex justify-between items-center mb-[16px]">
                <h3 className="text-[16px] font-Poppipns_FONT font-normal leading-6 text-[#000] ">
                  Total:
                </h3>
                <span className="text-[16px] font-Poppipns_FONT font-normal leading-6 text-[#000]">
                  $3000
                </span>
              </div>
              <div className="flex items-center justify-between mb-[16px]">
                <div className="flex items-center gap-5">
                  <Checkbox
                    label="Bank"
                    ClassName="rounded-full"
                    checked={selectedPayment === 'bank'}
                    onChange={() => handlePaymentChange('bank')}
                  />
                </div>
                <span className="flex gap-2">
                  <img
                    className="w-[42px] h-[28px]"
                    src="/Bkash.png"
                    alt="Bkash"
                  />
                  <img
                    className="w-[42px] h-[28px]"
                    src="/Visa.png"
                    alt="Visa"
                  />
                  <img
                    className="w-[42px] h-[28px]"
                    src="/Mastercard.png"
                    alt="Mastercard"
                  />
                  <img
                    className="w-[42px] h-[28px]"
                    src="/Nagad.png"
                    alt="Nagad"
                  />
                </span>
              </div>
              <div className="flex items-center gap-5 mb-[34px]">
                <Checkbox
                  label="Cash on Delivery"
                  ClassName="rounded-full"
                  checked={selectedPayment === 'cod'}
                  onChange={() => handlePaymentChange('cod')}
                />
              </div>
              <div className="flex items-center gap-5 w-[527px] mb-[48px]">
                <input
                  className="w-[260px] h-[56px] rounded px-[24px] bg-transparent border border-black text-[#000]/50 text-[16px] font-Poppipns_FONT font-normal placeholder:text-[16px] placeholder:font-Poppipns_FONT outline-none  "
                  placeholder="Coupon Code"
                  type="text"
                />
                <button className="text-[14px] font-Poppipns_FONT font-medium text-[#FFF] leading-6 py-[16px] px-[48px] bg-[#DB4444] rounded ">
                  Apply Coupon
                </button>
              </div>
              <button className="text-[18px] font-Poppipns_FONT font-medium text-[#FFF] leading-6 py-[16px] px-[48px] bg-[#DB4444] rounded ">
                Order
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CheckOut;
