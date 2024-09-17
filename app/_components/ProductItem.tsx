import Image from "next/image"
import Product from "../_models/product";

export default function ProductItem ({product}: {product: Product}){
  return <div className="hover:border p-1 rounded-lg border-primary cursor-pointer">
    <div>
      <Image src={product.attributes.banner?.data.attributes.url} alt="banner" width={430} height={350} className="rounded-t-lg h-[190px] object-cover" />
    </div>
    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-b-lg">
      <div className="p-3">
        <h2 className="text-[14px] font-medium">{product.attributes.title}</h2>
      </div>
      <h2 className="font-bold">${product.attributes.pricing}</h2>
    </div>
  </div>
}