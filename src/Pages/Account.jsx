import React from 'react';
import Container from '../Container/Container';

const Account = () => {
  return (
    <>
      <section className=" mb-[140px]">
        <Container>
          <div className="flex gap-[120px]">
            <div className="mt-[120px] text-center">
              <h3 className="text-center text-xl font-semibold font-Poppipns_FONT text-gray-900 mb-[20px]">
                My Account
              </h3>
              <div className="w-[150px] h-[150px] border-4 border-red-500 rounded-full p-[2px] mb-[15px] mx-auto">
                <img
                  className="w-full h-full rounded-full"
                  src="/mans.png"
                  alt="mans"
                />
              </div>
              <span className="text-center leading-6 text-[16px] font-semibold font-Poppipns_FONT text-gray-900">
                Mahammud Hassan Limon
              </span>
            </div>
            <div className="w-[870px] bg-white p-6 shadow-md rounded-lg mt-[180px]">
              <h2 className="text-red-500 text-lg font-semibold mb-4">
                Edit Your Profile
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    value="Md"
                    className="w-full border p-2 rounded bg-gray-100"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    value="Rimel"
                    className="w-full border p-2 rounded bg-gray-100"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value="rimel111@gmail.com"
                    className="w-full border p-2 rounded bg-gray-100"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Address</label>
                  <input
                    type="text"
                    value="Kingston, 5236, United State"
                    className="w-full border p-2 rounded bg-gray-100"
                    disabled
                  />
                </div>
              </div>

              <h3 className="mt-[20px]  font-semibold font-Poppipns_FONT">Password Changes</h3>
              <div className="mt-[20px]">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full border p-2 rounded mt-1 mb-[14px]"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full border p-2 rounded mt-2 mb-[14px]"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full border p-2 rounded mt-2"
                />
              </div>

              <div className="flex justify-between mt-4">
                <button className="text-gray-500">Cancel</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Account;
