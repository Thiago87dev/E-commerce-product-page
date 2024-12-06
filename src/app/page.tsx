import Product from "@/components/Product";
import ProductInfo from "@/components/ProductInfo";

export default function Home() {
  return (
    <div className="flex p-10 gap-10 justify-between items-center">
      <div className="w-[50%]">
        <Product />
      </div>
      <div className="w-[50%]">
        <ProductInfo />
      </div>
    </div>
  );
}
