"use client"
import { Product } from '@/utils/supabase/types';
import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

const Main: React.FC = () => {
  // Supongamos que tienes una lista de productos
  const initialProducts: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 10.99,
      available: true,
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      available: false,
    },
    // Agrega más productos según sea necesario
  ];

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">E-Commerce App</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ProductList products={initialProducts} onAddToCart={addToCart} />
        </div>
        <div className="md:col-span-1">
          <ShoppingCart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Main;
