import React, { useState } from "react";
import Heading from "../../common/Heading";
import ProductItem from "../product/ProductItem";
import { topProducts } from "../../assets/data/data";

export default function TopProduct() {
   const [data, setData] = useState(topProducts);
   const allCategories = [
      "All",
      ...new Set(
         data.map((item) => {
            return item.category;
         })
      ),
   ];
   const [category, setCategory] = useState(allCategories);

   const handleFilter = (category) => {
      if (category === "All") {
         setData(topProducts);
      } else {
         const newItem = topProducts.filter((item) => {
            return item.category === category;
         });
         setData(newItem);
      }
   };
   return (
      <section className="topproduct">
         <div className="container">
            <div className="head">
               <Heading
                  title="Top Selling Products"
                  desc="Meet our newbies ! The latest template uploaded to the marketplace"
               />
               <div className="category">
                  {category.map((item, index) => (
                     <button
                        className="button"
                        onClick={() => {
                           handleFilter(item);
                        }}
                        key={index}
                     >
                        {item}
                     </button>
                  ))}
               </div>
            </div>
            <ProductItem data={data} />
         </div>
      </section>
   );
}
