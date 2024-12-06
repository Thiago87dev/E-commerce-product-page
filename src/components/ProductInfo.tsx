import Image from "next/image";

const ProductInfo = () => {
  return (
    <div className="flex flex-col py-6 ">
      <div>
        <h2 className="text-colorDarkGrayishBlue mb-2 text-sm font-bold uppercase">
          Sneaker Company
        </h2>
      </div>
      <div>
        <h1 className="font-bold text-5xl mb-5">Fall Limited Edition Sneakers</h1>
      </div>
      <div>
        <p className="text-colorDarkGrayishBlue mb-3">
          These low-profile sneakers are your perfect casual wear comanion.
          Featuring a durable rubber outer sole, they`ll withstand everlything
          the weather can offer.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <h3 className="font-bold text-3xl mb-2">$125.00</h3>
        </div>
        <div className="bg-black px-2 rounded-lg">
          <div className="text-colorWhite">50%</div>
        </div>
      </div>
      <div>
        <p className="line-through text-colorDarkGrayishBlue font-bold mb-4">
          $250.00
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center bg-colorLightGrayishBlue py-3 rounded-lg px-2 w-[26%] justify-between">
          <div>
            <Image
              alt="minus button"
              src="/images/icon-minus.svg"
              width={15}
              height={15}
            />
          </div>
          <div className="font-bold">0</div>
          <div>
            <Image
              alt="plus button"
              src="/images/icon-plus.svg"
              width={15}
              height={15}
            />
          </div>
        </div>
        <div>
          <button className="flex font-bold items-center gap-2 bg-colorOrange px-20 py-3 rounded-lg">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#000000"
                fillRule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
