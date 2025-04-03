import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import axios from 'axios';
import Pagination from './Pagination ';

const Product = () => {
  const [isproduct, setIsproducts] = useState([]);

  const getproductsis = () => {
    axios
      .get('http://localhost:5990/api/v1/products/getProducts')
      .then(response => {
        console.log('Products Data:', response.data.data);
        setIsproducts(response.data.data);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  };

  useEffect(() => {
    getproductsis();
  }, []);

  const truncateDescription = description => {
    if (!description) return ''; // Handle missing description

    // Truncate based on word count
    const words = description.split(' ');
    if (words.length > 3) {
      return words.slice(0, 8).join(' ') + '...'; // Truncate to 10 words and add "..."
    }

    // Truncate based on character count
    if (description.length > 150) {
      return description.slice(0, 150) + '...'; // Truncate to 100 characters and add "..."
    }

    return description; // If no condition is met, return the original description
  };

  return (
    <>
      <section className="mt-[150px] mb-[80px]">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[60px]">
            {isproduct.length > 0 ? (
              isproduct.map(item => (
                <div key={item._id} className="text-center">
                  <div className="w-[270px] h-[250px] bg-[#F5F5F5] items-center justify-center flex rounded-[4px] relative group overflow-hidden">
                    <div className="text-[12px] font-Poppipns_FONT bg-[#DB4444] py-[8px] px-[12px] font-medium text-[#FAFAFA] leading-[18px] rounded-[4px] absolute top-[12px] left-[12px]">
                      -40%
                    </div>

                    <img
                      src={item.Photo}
                      alt={item.name}
                      className="w-[130px] object-cover"
                    />

                    <div className="w-[34px] h-[34px] rounded-full bg-[#FFFFFF] flex items-center justify-center absolute top-[12px] right-[12px] cursor-pointer">
                      <i className="fa-regular fa-heart"></i>
                    </div>

                    <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-[16px] leading-6 font-Poppipns_FONT font-medium transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Add To Cart
                    </button>
                  </div>

                  <h3 className="text-[18px] text-left font-Poppipns_FONT font-medium leading-6 text-[#000000] mt-[16px] mb-[10px]">
                    {item.name}
                  </h3>

                  <div className="flex gap-[12px] items-center mb-[10px]">
                    <span className="text-[16px] font-Poppipns_FONT font-bold text-[#DB4444] ">
                      ${item.price}
                    </span>
                    <span className="text-[16px] font-Poppipns_FONT font-bold text-[#000000]/50 line-through">
                      $160
                    </span>
                  </div>
                  <div className="text-left mb-[10px]">
                    <span className="text-[14px] font-Poppipns_FONT font-normal leading-6 text-[#000000]/50">
                      {truncateDescription(
                        item.description || 'No description available'
                      )}
                    </span>
                  </div>
                  <div className="flex gap-[10px]">
                    <span className="text-[#FFAD33] flex">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span className="text-[14px] font-Poppipns_FONT font-semibold leading-[21px] text-[#000000]/50">
                      (88)
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-4 text-center text-gray-500">
                Loading products...
              </p>
            )}
          </div>

          <div className="text-center mt-[80px]">
            <Pagination />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Product;
