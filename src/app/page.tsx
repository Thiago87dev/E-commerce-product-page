import Product from "@/components/Product";
import ProductInfo from "@/components/ProductInfo";

export default function Home() {
  return (
    <div className="flex px-14 py-20 gap-10 justify-between items-center">
      <div className="w-[50%]">
        <Product />
      </div>
      <div className="w-[50%]">
        <ProductInfo />
      </div>
    </div>
  );
}
