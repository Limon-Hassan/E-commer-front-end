import React from 'react';

const orderStatus = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-md shadow">
      <h2 className="text-lg font-semibold">
        Order ID : <span className="font-bold">356952420</span>
      </h2>
      <p className="text-gray-500 mb-6">
        Thank you. Your order has been Confirmed.
      </p>

      {/* Progress Steps */}
      <div className="flex justify-between items-center mb-12 relative px-4">
        {['Cart', 'Delivery & Payment', 'Summary', 'Done'].map(
          (label, index) => {
            const currentStep = 3; // ✅ Change this to control progress
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;

            return (
              <div
                key={index}
                className="flex-1 relative z-10 flex flex-col items-center"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-semibold transition-all duration-300 ${
                    isCompleted
                      ? 'bg-green-600'
                      : isCurrent
                      ? 'bg-blue-600'
                      : 'bg-gray-300'
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`mt-2 text-base font-medium ${
                    isCurrent ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {label}
                </span>

                {/* Connecting line */}
                {index !== 3 && (
                  <div className="absolute top-6 left-1/2 w-full h-1 -z-10">
                    <div
                      className={`h-1 w-full ${
                        index < currentStep - 1
                          ? 'bg-green-500'
                          : index === currentStep - 1
                          ? 'bg-gradient-to-r from-green-500 to-gray-300'
                          : 'bg-gray-300'
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>

      {/* Product Info */}
      <div className="flex items-center justify-between border rounded-md p-4 mb-6">
        <div className="flex items-center gap-4">
          <img
            src="https://www.apple.com/v/macbook-air/q/images/meta/macbook-air__e6rq3lejy46a_og.png"
            alt="MacBook"
            className="w-20 h-20 object-cover rounded-md"
          />
          <div>
            <h3 className="font-medium">Laptop</h3>
            <p className="text-lg font-semibold">MacBook Air</p>
            <p className="text-sm text-gray-500">
              Color: Black{' '}
              <span className="inline-block w-4 h-4 bg-black rounded-full ml-1" />
            </p>
          </div>
        </div>
        <p className="font-bold text-lg">$1500.00</p>
      </div>

      {/* Order Summary */}
      <div className="border rounded-md p-4 mb-6">
        <h4 className="font-semibold text-lg mb-4">Order Summary</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$1690.26</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Charge</span>
            <span>$60.00</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes</span>
            <span>$80.00</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>-$10.00</span>
          </div>
          <div className="flex justify-between font-bold border-t pt-2">
            <span>Total</span>
            <span>$1820.26</span>
          </div>
        </div>
      </div>

      {/* Customer Details */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="border rounded-md p-4">
          <h4 className="font-semibold mb-2">Customer</h4>
          <p className="text-sm">👤 John Smith</p>
          <p className="text-xs text-gray-500">1 Order</p>
        </div>
        <div className="border rounded-md p-4">
          <h4 className="font-semibold mb-2 flex justify-between">
            Customer Information
            <span className="text-blue-500 cursor-pointer text-sm">✎</span>
          </h4>
          <p className="text-sm">📧 john.smith1@gmail.com</p>
          <p className="text-sm">📞 +91 94256 32056</p>
        </div>
        <div className="border rounded-md p-4">
          <h4 className="font-semibold mb-2 flex justify-between">
            Shipping Address
            <span className="text-blue-500 cursor-pointer text-sm">✎</span>
          </h4>
          <p className="text-sm">John Smith</p>
          <p className="text-sm">123 Elm Street, Anytown, USA 12345</p>
          <p className="text-xs text-blue-500 mt-1 cursor-pointer">
            📍 select on map
          </p>
        </div>
        <div className="border rounded-md p-4">
          <h4 className="font-semibold mb-2">Billing Address</h4>
          <p className="text-sm">Same as shipping address</p>
        </div>
      </div>
    </div>
  );
};

export default orderStatus;
