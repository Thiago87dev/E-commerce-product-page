const Cart = () => {
  return (
    <div className="flex flex-col  py-2 w-80 bg-white h-60 md:w-[60%] mx-auto drop-shadow-2xl bgw lg:w-80 rounded-lg">
      <div className="px-5 ">
        <h2 className="font-bold text-lg">Cart</h2>
      </div>
      <div className="my-4">
        <hr />
      </div>
      <div className="px-5 flex text-lg justify-center items-center h-[72%]">
        <p>Your cart is empty</p>
      </div>
    </div>
  );
};

export default Cart;
