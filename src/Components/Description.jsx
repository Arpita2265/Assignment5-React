import React, { useContext } from 'react';
import { productContext } from '../Context/Context';

const Description = () => {
  const { product } = useContext(productContext);

  if (!product) {
    return <h3 className='text-gray-900 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>;
  }

  return (
    <div className="text-center mt-4">
      <img
        className='w-100 h-120 object-cover m-auto rounded'
        src={product.images[0]}
        alt={product.title}
      />
      <h1 className='text-2xl font-bold mt-8  px-10'>{product.title}</h1>
      <h2 className='text-green-500 text-lg mt-4 px-10 '>${product.price}</h2>
      <p className='mt-4 px-10 '>{product.description}</p>
    </div>
  );
};

export default Description;


