interface DescriptionChildren {
  type: string,
  text: string
}
interface Description {
  type: string,
  children: Array<DescriptionChildren>
}
interface Product {
  attributes:{
    title:string,
    description: Array<Description>
    pricing: number,
    category:{
      data: {
        attributes: {
          name: string
        }
      }
    },
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
