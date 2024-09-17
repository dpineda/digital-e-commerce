interface Product {
  attributes:{
    title:string,
    pricing: number,
    banner:{
      data: {
        attributes: {
          url: string
        }
      }
    }
  },
  id: number
}

export default Product;
