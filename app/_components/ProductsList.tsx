import Product from "../_models/product";
import ProductItem from "./ProductItem";

export default function ProductsList({productsList}: {productsList: Array<Product>}){
  return <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
  {productsList.map((item, index)=>(
    <ProductItem key={index} product={item} />
  ))}
  </div>
}