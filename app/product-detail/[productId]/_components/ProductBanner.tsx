import Image from 'next/image';
import Product from '@/app/_models/product';

interface Props {
  product: Product | undefined
}

export default function ProductBanner ({product}: Props) {
  return ( 
  <div className='w-full'>
    { product ?
    <Image src={product.attributes.banner.data.attributes.url} 
    alt={product.attributes.title} 
    width={500} 
    height={500}
    className='rounded-lg object-cover'/>
    :
    <div className='h-[500px] w-[500px] bg-slate-200 animate-pulse'></div>
    }
  </div>
  )
};