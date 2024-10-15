import Product from "@/app/_models/product"
import { BadgeCheck, ShoppingCart } from "lucide-react";

interface Props {
  product: Product | undefined
}

export default function ProductInfo({product}: Props) {
  return (
     product ?
    <div>
      <h2 className="text-[20px] mt-5 sm:mt-0">{product.attributes.title}</h2>
      <h2 className="text-[15px] text-gray-400">{product.attributes.category?.data?.attributes?.name}</h2>
      <h2 className="text-[15px] text-gray-700">{product.attributes.description[0]?.children[0]?.text}</h2>
      <h2 className="flex gap-3 mt-5 text-gray-500 text-[13px]">
        <BadgeCheck className="text-green-500 h-5 w-5" /> Eligible for free shipping
      </h2>
      <h2 className="text-[35px] text-primary font-medium mt-5">$ {product.attributes.pricing.toFixed(2)}</h2>
      <button className="flex gap-2 py-3
        px-10 mt-5
      bg-primary
      hover:bg-blue-700
      text-white rounded-lg">
        <ShoppingCart />
        Add to Cart
      </button>
    </div>
    :
    <div className="flex flex-col gap-2">
      <h2 className="h-[20px] w-full bg-slate-200 animate-pulse"></h2>
      <h2 className="h-[20px] w-[100px] bg-slate-200 animate-pulse"></h2>
      <h2 className="h-[20px] w-full bg-slate-200 animate-pulse"></h2>
      <h2 className="h-[20px] w-full bg-slate-200 animate-pulse"></h2>
      <h2 className="h-[20px] w-full bg-slate-200 animate-pulse"></h2>
      <h2 className="h-[20px] w-[170px] mt-5 bg-slate-200 animate-pulse"></h2>
    </div>
  );
}