"use client";

// pages/products.tsx
import React, { useEffect, useState } from "react";
import CategoryCarousel from "@/components/ui/CategoryCarousel";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const categories = [
    {
      name: "Men's clothing",
      key: "men's clothing",
    },
    {
      name: "Women's clothing",
      key: "women's clothing",
    },
    {
      name: "Jewelry",
      key: "jewelery",
    },
    {
      name: "Electronics",
      key: "electronics",
    },
  ];

  const groupedProducts: { [key: string]: Product[] } = {};

  products.forEach((product) => {
    if (!groupedProducts[product.category]) {
      groupedProducts[product.category] = [];
    }
    groupedProducts[product.category].push(product);
  });

  return (
    <section className="max-w-[1200px] ml-[200px] justify-between gap-10 flex items-start py-20">
      <ul className="w-[450px] ml-10 bg-white p-10 rounded-[20px] mt-8 border border-gray-300">
        {categories.map((category, index) => (
          <li
            className="hover:bg-gray-200 rounded cursor-pointer transition ease-in-out p-4 text-xl font-bold"
            key={index}
          >
            {category.name}
          </li>
        ))}
      </ul>
      <div className="w-full flex flex-col ">
        {categories.map((category, index) => (
          <CategoryCarousel
            key={index}
            categoryName={category.name}
            products={groupedProducts[category.key] || []}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
