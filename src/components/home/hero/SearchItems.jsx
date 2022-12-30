import React, { useState } from "react";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

export default function SearchItems({ product, value, onSearch }) {
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
                     <div className="img">
                        <img src={item.cover} alt="" />
                        <div className="overlay">
                           <button className="button">
                              <FiShoppingBag />
                           </button>
                           <button className="button">
                              <AiOutlineHeart />
                           </button>
                           <button className="button" onClick={() => {}}>
                              <FiSearch />
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
         </div>
         {/* <div className={openImage ? "modelOpen" : "modelClose"}>
            <div className="onClickImage">
               <img src={img} alt="" />
               <button className="button" onClick={() => setOpenImage(false)}>
                  <AiOutlineClose />
               </button>
            </div>
         </div> */}
      </section>
   );
}
