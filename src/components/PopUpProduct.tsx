import Image from "next/image";
import { useState } from "react";

interface PopUpProductProps {
  selectedImage: string;
}

const imagesSrcThumb = [
    "/images/image-product-1-thumbnail.jpg",
    "/images/image-product-2-thumbnail.jpg",
    "/images/image-product-3-thumbnail.jpg",
    "/images/image-product-4-thumbnail.jpg",
  ];

const PopUpProduct = ({ selectedImage }: PopUpProductProps) => {
  const [selectedImagePopup, setSelectedImagePopup] = useState<string>(selectedImage);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImagePopup(imageSrc);
  };
  return (
    <div className="fixed inset-0 flex items-center w-max mx-auto h-max my-auto justify-center bg-transparent z-50 flex-col">
      <div className="hidden lg:flex">
        <Image
          alt="Shoes"
          src={selectedImagePopup.replace("-thumbnail", "")}
          width={490}
          height={490}
          className="rounded-xl "
        />
      </div>
      <div className="lg:flex hidden justify-around mt-10 w-[450px]">
        {imagesSrcThumb.map((image) => (
          <div key={image}>
            <div
              className={`border-2 rounded-xl ${
                selectedImagePopup === image
                  ? "border-colorOrange"
                  : "border-transparent"
              }`}
            >
              <Image
                className={`hover:opacity-50 rounded-xl cursor-pointer ${
                    selectedImagePopup === image ? "opacity-50" : "opacity-100"
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

export default PopUpProduct;
