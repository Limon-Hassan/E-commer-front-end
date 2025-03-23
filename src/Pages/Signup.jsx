import React from 'react';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <Container>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-blue-50 flex items-center justify-center p-6">
            <img src="/bennerpage.png" alt="Shopping" className="w-full" />
          </div>

          <div className="md:w-1/2 p-6">
            <h2 className="text-[30px] font-Inter_FONT font-medium leading-9 text-[#000000] mb-[24px]">
              Create an account
            </h2>
            <p className="text-[16px] font-Poppipns_FONT font-normal text-[#000000] leading-6 mb-[48px]">
              Enter your details below
            </p>

            <form action="#" method="POST">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border text-[16px] font-Poppipns_FONT text-[#000]/50 mb-[30px] font-normal placeholder:text-[16px] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full p-3 border text-[16px] font-Poppipns_FONT text-[#000]/50 mb-[30px] font-normal placeholder:text-[16px] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border text-[16px] font-Poppipns_FONT text-[#000]/50 mb-[30px] font-normal placeholder:text-[16px] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button className="w-full text-[18px] font-Poppipns_FONT font-medium leading-6 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600">
                Create Account
              </button>

              <div className="flex items-center my-4">
                <hr className="w-full border-gray-300" />
                <span className="px-3 text-gray-400">or</span>
                <hr className="w-full border-gray-300" />
              </div>

              <button className="w-full border text-[16px] font-Poppipns_FONT font-normal text-[#000000] py-3 flex items-center justify-center rounded-lg hover:bg-gray-100">
                <img
                  src="/Group 1 copy.png"
                  alt="Google Logo"
                  className="w-5 mr-2"
                />
                Sign up with Google
              </button>
            </form>

            <p className="text-gray-600 text-center mt-4">
              Already have an account?
              <Link to="/sign in" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Signup;
