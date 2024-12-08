"use client";
import Image from "next/image";
import { useState } from "react";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const imagesSrcThumb = [
  "/images/image-product-1-thumbnail.jpg",
  "/images/image-product-2-thumbnail.jpg",
  "/images/image-product-3-thumbnail.jpg",
  "/images/image-product-4-thumbnail.jpg",
];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState<string>(imagesSrcThumb[0]);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const showCart = useSelector((state: RootState) => state.showCart);
  return (
    <div className="flex w-max flex-col gap-8 select-none">
      <div className="hidden lg:flex">
        <Image
          alt="Shoes"
          src={selectedImage.replace("-thumbnail", "")}
          width={400}
          height={400}
          className="rounded-xl cursor-pointer"
        />
      </div>
      <div className="lg:hidden relative z-0 w-[375px] h-[330px] overflow-hidden">
        <Image
          alt="Shoes"
          src={selectedImage.replace("-thumbnail", "")}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
        />
        <div className="flex absolute top-36 left-6 justify-center items-center w-10 h-10 bg-colorLightGrayishBlue rounded-full active:text-colorOrange cursor-pointer">
          <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
              className="stroke-current "
            />
          </svg>
        </div>
        <div className="flex absolute top-36 right-6 justify-center items-center w-10 h-10 bg-colorLightGrayishBlue rounded-full active:text-colorOrange cursor-pointer">
          <svg width="11" height="19" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
              className="stroke-current "
            />
          </svg>
        </div>
        {showCart && (
          <div className="absolute top-6 left-3">
            <Cart />
          </div>
        )}
      </div>
      <div className="lg:flex hidden justify-between ">
        {imagesSrcThumb.map((image) => (
          <div key={image}>
            <div
              className={`border-2 rounded-xl ${
                selectedImage === image
                  ? "border-colorOrange"
                  : "border-transparent"
              }`}
            >
              <Image
                className={`hover:opacity-50 rounded-xl cursor-pointer ${
                  selectedImage === image ? "opacity-50" : "opacity-100"
                }`}
                onClick={() => handleImageClick(image)}
                src={image}
                alt="image"
                width={80}
                height={80}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
