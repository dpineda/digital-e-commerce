
'use client'
import Breadcrumb from "@/app/_components/Breadcrum"
import api from "@/app/_utils/Api"
import { useEffect, useState } from "react"
import ProductBanner from "./_components/ProductBanner"
import ProductInfo from "./_components/ProductInfo"
import Product from "@/app/_models/product"
import ProductsList from "@/app/_components/ProductsList"
import { usePathname } from "next/navigation"

interface Props {
  params: {
    productId: number
  }
}

export default function ProductDetail({params}: Props){

  const path = usePathname();
  const [productDetail, setProductDetail] = useState<Product>();
  const [productList, setProductList] = useState<Array<Product>>();

  const getProductList = (category: string) => {
    api.get("/products/?filters[category][$eq]="+ category + "&populate=banner")
      .then((response) => response.json())
      .then((json)=>{
        setProductList(json.data);
      });
  }

  useEffect(()=>{
    api.get("/products/"+params?.productId+"?populate=category&populate=banner")
      .then((response) => response.json())
      .then((json)=>{
        setProductDetail(json.data);
        if(json.data.attributes.category)
          getProductList(json.data.attributes.category.data.id);
      });
  }, [params?.productId])

  return (
  <div className="py-10 px-10 max-w-screen-xl mx-auto">
    <Breadcrumb path={path}/>
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 sm:gap-5">
      <ProductBanner product={productDetail} />
      <ProductInfo product={productDetail} />
    </div>
    {productList && 
      <div className="mt-20">
        <h2 className="font-medium text-[20px] mb-4">Similar Products</h2>
        <ProductsList productsList={productList} />
      </div>
    }
  </div>
  );
}