"use client"
import ProductsList from "./ProductsList";
import api from "../_utils/Api";
import { useEffect, useState } from "react";

export default function ProductsSection(){
  const [productList, setProductList] = useState([]);
  useEffect(()=>{
    getLatestProducts();
  },[])
  const getLatestProducts = ()=>{
    api.get("/products?populate=banner")
    .then(function(response) { return response.json(); })
    .then((json)=>{
      setProductList(json.data);
    });
  }
  return productList && <div className="px-10 md:px-20">
    {/* New */}
    <h2 className="font-medium text-[20px] mx-3">Brand New</h2>
    <ProductsList productsList={productList} />
    {/* Preowned */}
    <h2 className="font-medium text-[20px] mx-3">Preowned</h2>
    <ProductsList productsList={productList} />
  </div>
}