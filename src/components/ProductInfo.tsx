"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addProductToCart } from "@/redux/cart/slice";
import { useState } from "react";

const productInfo = {
  image: "/images/image-product-1-thumbnail.jpg",
  title: "Fall Limited Edition Sneakers",
  price: 125.0,
};

const ProductInfo = () => {
  const [qnt, setQnt] = useState(0);

  const handlePlusQnt = () => {
    setQnt((prevQnt) => prevQnt + 1);
  };

  const handleMinusQnt = () => {
    setQnt((prevQnt) => prevQnt - 1);
  };

  const dispatch = useDispatch();

  const handleAddToCartButtonClick = () => {
    if (qnt === 0) {
      alert("Select quantity");
      return;
    }
    dispatch(
      addProductToCart({
        ...productInfo,
        quantity: qnt,
      })
    );
  };

  return (
    <div className="flex flex-col lg:py-6 px-6 lg:px-0 w-[375px] lg:w-auto ">
      <div>
        <h2 className="text-colorDarkGrayishBlue mb-2 text-sm font-bold uppercase">
          Sneaker Company
        </h2>
      </div>
      <div>
        <h1 className="font-bold text-3xl lg:text-5xl mb-5">{productInfo.title}</h1>
      </div>
      <div>
        <p className="text-colorDarkGrayishBlue mb-3">
          These low-profile sneakers are your perfect casual wear comanion.
          Featuring a durable rubber outer sole, they`ll withstand everlything
          the weather can offer.
        </p>
      </div>
      <div className="flex lg:flex-col items-center lg:items-start justify-between">
        <div className="flex items-center gap-3 ">
          <div className="flex mt-2 lg:mt-1">
            <h3 className="font-bold text-3xl mb-2">${productInfo.price}</h3>
          </div>
          <div className="bg-black px-2 lg:rounded-lg rounded-md">
            <div className="text-colorWhite">50%</div>
          </div>
        </div>
        <div>
          <p className="line-through text-colorDarkGrayishBlue font-bold mb-4 mt-3 lg:mt-0">
            $250.00
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col  items-center lg:gap-2 gap-4">
        <div className="flex items-center bg-colorLightGrayishBlue py-3 rounded-lg px-4 lg:w-[26%] w-full justify-between">
          <div
            onClick={handleMinusQnt}
            className={`active:opacity-50 select-none ${
              qnt < 1 ? "pointer-events-none disabled" : "cursor-pointer"
            } `}
          >
            <Image
              alt="minus button"
              src="/images/icon-minus.svg"
              width={15}
              height={15}
            />
          </div>
          <div className="font-bold select-none">{qnt}</div>
          <div
            onClick={handlePlusQnt}
            className="active:opacity-50 cursor-pointer select-none"
          >
            <Image
              alt="plus button"
              src="/images/icon-plus.svg"
              width={15}
              height={15}
            />
          </div>
        </div>
        <div>
          <button
            onClick={handleAddToCartButtonClick}
            className="flex select-none font-bold items-center gap-2 bg-colorOrange lg:w-auto active:opacity-50 px-[106px] lg:px-20 py-3 rounded-lg"
          >
            <div className="flex gap-1 mx-auto">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#000000"
                  fillRule="nonzero"
                />
              </svg>
              Add to cart
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
