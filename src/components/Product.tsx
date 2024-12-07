"use client";
import Image from "next/image";
import { useState } from "react";

const imagesSrcThumb = [
  "/images/image-product-1-thumbnail.jpg",
  "/images/image-product-2-thumbnail.jpg",
  "/images/image-product-3-thumbnail.jpg",
  "/images/image-product-4-thumbnail.jpg",
];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState<string>(
    imagesSrcThumb[0]
  );

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div className="flex w-max flex-col gap-8 select-none">
      <div>
        <Image
          alt="Shoes"
          src={selectedImage.replace('-thumbnail', '')}
          width={400}
          height={400}
          className="rounded-xl cursor-pointer"
        />
      </div>
      <div className="flex justify-between ">
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
