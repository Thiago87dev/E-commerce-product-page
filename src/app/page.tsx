import Product from "@/components/Product";
import ProductInfo from "@/components/ProductInfo";

export default function Home() {
  return (
    <div className="flex flex-col lg:gap-10 gap-6 lg:py-20 py-5 justify-between items-center lg:flex-row lg:px-6 ">
      <div className="lg:w-[50%]">
        <Product />
      </div>
      <div className="lg:w-[50%]">
        <ProductInfo />
      </div>
    </div>
  );
}
