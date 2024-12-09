import { RootState } from "@/redux/store";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllProdutsInCart } from "@/redux/cart/slice";

const Cart = () => {
  const products = useSelector((state: RootState) => state.cart.products);

  const dispatch = useDispatch()

  const handleDeleteBtn = () => {
    dispatch(deleteAllProdutsInCart())
  }

  return (
    <div>
      <div className="flex flex-col z-20 absolute  py-2 w-[350px] bg-white lg:h-60 h-64  mx-auto drop-shadow-2xl bgw lg:w-[350px] rounded-lg">
        <div className="px-5 ">
          <h2 className="font-bold text-lg">Cart</h2>
        </div>
        <div className="my-4">
          <hr />
        </div>
        {products.length > 0 ? (
          <div>
            {products.map((item) => (
              <div className="flex flex-col  px-4 py-3 gap-8 " key={item.title}>
                <div className="flex gap-4 items-center ">
                  <div className="select-none">
                    <Image
                      alt="thumb img"
                      src={item.image}
                      width={50}
                      height={50}
                      className="rounded-[4px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[1.5px] text-colorDarkGrayishBlue">
                    <div>{item.title}</div>
                    <div className="flex gap-1">
                      <div>${item.price.toFixed(2)}</div>
                      <div>x</div>
                      <div className="mr-1">{item.quantity}</div>
                      <div className="text-black font-bold">${(item.price * item.quantity!).toFixed(2)}</div>
                    </div>
                  </div>
                  <div onClick={handleDeleteBtn} className="cursor-pointer select-none active:scale-90">
                    <Image
                      alt="garbage delete"
                      src={"/images/icon-delete.svg"}
                      width={14}
                      height={14}
                    />
                  </div>
                </div>
                <div className="mx-auto ">
                  <button className="flex select-none font-bold items-center gap-2 bg-colorOrange active:opacity-50 px-[120px] lg:py-3 py-4 rounded-lg">
                    Checkout
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-5 flex text-lg justify-center items-center h-[72%]">
            <p>Your cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
