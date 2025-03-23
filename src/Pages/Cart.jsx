import React from 'react';
import Container from '../Container/Container';

const Cart = () => {
  return (
    <>
      <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <Container>
          <div class="mx-auto w-full px-4 2xl:px-0">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Shopping Cart
            </h2>

            <div class="mt-6 sm:mt-8 md:gap-6 lg:items-start xl:gap-8 w-full">
              <div class="  flex-none lg:w-full ">
                <div class="space-y-6">
                  <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                    <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="#" class="shrink-0 md:order-1">
                        <img
                          class="h-20 w-20 dark:hidden"
                          src="/image_1.png"
                          alt="imac image"
                        />
                        <img
                          class="hidden h-20 w-20 dark:block"
                          src="/image_1.png"
                          alt="imac image"
                        />
                      </a>

                      <label for="counter-input" class="sr-only">
                        Choose quantity:
                      </label>
                      <div class="flex items-center justify-between md:order-3 md:justify-end">
                        <div class="flex items-center">
                          <button
                            type="button"
                            id="decrement-button"
                            data-input-counter-decrement="counter-input"
                            class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          >
                            <svg
                              class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            id="counter-input"
                            data-input-counter
                            class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                            placeholder=""
                            value="2"
                            required
                          />
                          <button
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="counter-input"
                            class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          >
                            <svg
                              class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                        <div class="text-end md:order-4 md:w-32">
                          <p class="text-base font-bold text-gray-900 dark:text-white">
                            $1,499
                          </p>
                        </div>
                      </div>

                      <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <a
                          href="#"
                          class="text-base font-Poppipns_FONT font-medium text-gray-900 hover:underline dark:text-white"
                        >
                          PC system All in One APPLE iMac (2023) mqrq3ro/a,
                          Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core
                          GPU, Keyboard layout INT
                        </a>

                        <div class="flex items-center gap-4">
                          <button
                            type="button"
                            class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                          >
                            <svg
                              class="me-1.5 h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                              />
                            </svg>
                            Add to Favorites
                          </button>

                          <button
                            type="button"
                            class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                          >
                            <svg
                              class="me-1.5 h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18 17.94 6M18 18 6.06 6"
                              />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                    <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="#" class="shrink-0 md:order-1">
                        <img
                          class="h-20 w-20 dark:hidden"
                          src="/image_1.png"
                          alt="imac image"
                        />
                        <img
                          class="hidden h-20 w-20 dark:block"
                          src="/image_1.png"
                          alt="imac image"
                        />
                      </a>

                      <label for="counter-input" class="sr-only">
                        Choose quantity:
                      </label>
                      <div class="flex items-center justify-between md:order-3 md:justify-end">
                        <div class="flex items-center">
                          <button
                            type="button"
                            id="decrement-button"
                            data-input-counter-decrement="counter-input"
                            class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          >
                            <svg
                              class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            id="counter-input"
                            data-input-counter
                            class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                            placeholder=""
                            value="2"
                            required
                          />
                          <button
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="counter-input"
                            class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          >
                            <svg
                              class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                        <div class="text-end md:order-4 md:w-32">
                          <p class="text-base font-bold text-gray-900 dark:text-white">
                            $1,499
                          </p>
                        </div>
                      </div>

                      <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <a
                          href="#"
                          class="text-base font-Poppipns_FONT font-medium text-gray-900 hover:underline dark:text-white"
                        >
                          PC system All in One APPLE iMac (2023) mqrq3ro/a,
                          Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core
                          GPU, Keyboard layout INT
                        </a>

                        <div class="flex items-center gap-4">
                          <button
                            type="button"
                            class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                          >
                            <svg
                              class="me-1.5 h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                              />
                            </svg>
                            Add to Favorites
                          </button>

                          <button
                            type="button"
                            class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                          >
                            <svg
                              class="me-1.5 h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18 17.94 6M18 18 6.06 6"
                              />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" mt-6 flex justify-between space-y-6 lg:mt-0 lg:w-full">
                <div class="space-y-4 w-[330px] mt-[25px] h-[200px] rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  <form class="space-y-4">
                    <div>
                      <label
                        for="voucher"
                        class="mb-2 block text-[16px] font-Poppipns_FONT font-medium text-gray-900 dark:text-white"
                      >
                        Do you have a voucher or gift card?
                      </label>
                      <input
                        type="text"
                        id="voucher"
                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder=""
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600"
                    >
                      Apply Code
                    </button>
                  </form>
                </div>

                <div class="space-y-4 rounded-lg border w-[470px] border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  <p class="text-xl font-Poppipns_FONT font-semibold text-gray-900 dark:text-white">
                    Order summary
                  </p>

                  <div class="space-y-4">
                    <div class="space-y-2">
                      <dl class="flex items-center justify-between gap-4">
                        <dt class="text-base font-Poppipns_FONT font-normal text-gray-500 dark:text-gray-400">
                          Original price
                        </dt>
                        <dd class="text-base font-Poppipns_FONT  font-medium text-gray-900 dark:text-white">
                          $7,592.00
                        </dd>
                      </dl>

                      <dl class="flex items-center justify-between gap-4">
                        <dt class="text-base font-Poppipns_FONT  font-normal text-gray-500 dark:text-gray-400">
                          Savings
                        </dt>
                        <dd class="text-base font-Poppipns_FONT  font-medium text-green-600">
                          -$299.00
                        </dd>
                      </dl>

                      <dl class="flex items-center justify-between gap-4">
                        <dt class="text-base font-Poppipns_FONT  font-normal text-gray-500 dark:text-gray-400">
                          Store Pickup
                        </dt>
                        <dd class="text-base font-Poppipns_FONT  font-medium text-gray-900 dark:text-white">
                          $99
                        </dd>
                      </dl>

                      <dl class="flex items-center justify-between gap-4">
                        <dt class="text-base font-Poppipns_FONT  font-normal text-gray-500 dark:text-gray-400">
                          Tax
                        </dt>
                        <dd class="text-base font-Poppipns_FONT  font-medium text-gray-900 dark:text-white">
                          $799
                        </dd>
                      </dl>
                    </div>

                    <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt class="text-base font-Poppipns_FONT  font-bold text-gray-900 dark:text-white">
                        Total
                      </dt>
                      <dd class="text-base font-Poppipns_FONT  font-bold text-gray-900 dark:text-white">
                        $8,191.00
                      </dd>
                    </dl>
                  </div>

                  <a
                    href="#"
                    class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5  font-medium text-white bg-blue-500 hover:bg-blue-600 text-[18px] font-Poppipns_FONT "
                  >
                    Proceed to Checkout
                  </a>

                  <div class="flex items-center justify-center gap-2">
                    <span class="text-[16px] font-Inter_FONT font-normal text-gray-500 dark:text-gray-400">
                      or
                    </span>
                    <a
                      href="#"
                      title=""
                      class="inline-flex items-center gap-2 text-[16px] font-medium text-blue-500 underline hover:no-underline dark:text-blue-600 "
                    >
                      Continue Shopping
                      <span className="w-5 h-5">
                        <i class="fa-sharp fa-regular fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Cart;
