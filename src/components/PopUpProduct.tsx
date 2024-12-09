import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showThePopUp } from "@/redux/showPopUp/slice";
import { RootState } from "@/redux/store";

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
  const dispatch = useDispatch()

  const showPopUp = useSelector((state: RootState)=>state.showPopUp)

  const [selectedImagePopup, setSelectedImagePopup] =
    useState<string>(selectedImage);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImagePopup(imageSrc);
  };

  const handleNextImage = () => {
    const nextImage = selectedImagePopup.replace(
      /(\d+)(?=-thumbnail\.jpg)/,
      (match) => {
        if (parseInt(match) === 4) {
          match = "0";
        }
        return (parseInt(match) + 1).toString();
      }
    );
    setSelectedImagePopup(nextImage);
  };

  const handlePreviousImage = () => {
    const nextImage = selectedImagePopup.replace(
      /(\d+)(?=-thumbnail\.jpg)/,
      (match) => {
        if (parseInt(match) === 1) {
          match = "5";
        }
        return (parseInt(match) - 1).toString();
      }
    );
    setSelectedImagePopup(nextImage);
  };

  const closePouUp = () => {
    dispatch(showThePopUp())
  }

  return (
    <div className={` ${showPopUp ? "fixed":"hidden"}  inset-0 flex items-center w-max mx-auto h-max my-auto justify-center bg-transparent z-50 flex-col`}>
      <div className="hidden lg:flex justify-end w-full mb-3">
        <svg onClick={closePouUp} width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#ffffff"
            fillRule="evenodd"
            className="cursor-pointer"
          />
        </svg>
      </div>
      <div className="hidden lg:flex">
        <Image
          alt="Shoes"
          src={selectedImagePopup.replace("-thumbnail", "")}
          width={490}
          height={490}
          className="rounded-xl "
        />
        <div
          onClick={handlePreviousImage}
          className="flex absolute top-[250px] -left-5 justify-center items-center w-10 h-10 bg-colorLightGrayishBlue rounded-full active:text-colorOrange cursor-pointer"
        >
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
        <div
          onClick={handleNextImage}
          className="flex absolute top-[250px] -right-5 justify-center items-center w-10 h-10 bg-colorLightGrayishBlue rounded-full active:text-colorOrange cursor-pointer"
        >
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
