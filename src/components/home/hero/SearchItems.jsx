import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchItems({ product, value }) {
   const navigate = useNavigate();

   return (
      <section className="searchItems">
         <div className="product_items">
            {product
               .filter((items) => {
                  const searchKey = value.toLowerCase();
                  const title = items.title.toLowerCase();

                  return (
                     searchKey &&
                     title.startsWith(searchKey) &&
                     title != searchKey
                  );
               })
               .slice(0, 10)
               .map((item, index) => (
                  <div className="box" key={index}>
                     <div
                        className="img"
                        onClick={() => {
                           navigate(`/product/${item.id}`);
                        }}
                     >
                        <img src={item.cover} alt="" />
                     </div>
                  </div>
               ))}
         </div>
      </section>
   );
}
