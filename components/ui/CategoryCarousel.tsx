import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

interface Props {
  categoryName: string;
  products: Product[];
}

const CategoryCarousel: React.FC<Props> = ({ categoryName, products }) => {
  return (
    <div className="">
      <h1 className="font-bold text-2xl mt-10 mb-5">{categoryName}</h1>
      <Carousel>
        <CarouselPrevious>Previous</CarouselPrevious>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="flex basis-50">
              <div className="flex relative flex-col items-center w-[385px] bg-white border border-gray-300 rounded-[20px] p-6">
                <h1 className="font-bold text-xl">{product.title}</h1>
                <Image
                  className="my-[2rem]"
                  src={product.image}
                  width={200}
                  height={200}
                  layout="fixed"
                  alt="product image"
                />
                <div>
                  <p>
                    <strong>$ {product.price}</strong>
                  </p>
                  <p className="">
                    {product.description.length > 120
                      ? `${product.description.substring(0, 120)}...`
                      : product.description}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="absolute right-10 bottom-10 "
                >
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                </svg>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext>Next</CarouselNext>
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
