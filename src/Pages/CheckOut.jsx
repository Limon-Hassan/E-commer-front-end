import React from 'react';
import Container from '../Container/Container';

const CheckOut = () => {
  return (
    <>
      <section className="mt-[80px] mb-[100px]">
        <Container>
          <div className="mainpart ">
            <div>
              <div className="w-[470px] mb-[55px] h-[50px]">
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
              <div className="w-[470px] mb-[55px] h-[50px]">
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
              <div className="w-[470px] mb-[55px] h-[50px]">
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
              <div className="w-[470px] mb-[55px] h-[50px]">
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
              <div className="w-[470px] mb-[55px] h-[50px]">
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
              <div className="w-[470px] mb-[55px] h-[50px]">
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
              <div className="w-[470px] mb-[55px] h-[50px]">
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
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CheckOut;
