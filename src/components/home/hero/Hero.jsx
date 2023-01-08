import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import SearchItems from "./SearchItems";
import { products } from "../../assets/data/data";

export default function Hero() {
   const [value, setValue] = useState("");

   const onChangeHandler = (e) => {
      setValue(e.target.value);
   };

   const onSearchHandler = (key) => {
      setValue(key);
   };

   return (
      <>
         <section className="hero">
            <div className="container">
               <h1>
                  <label>
                     Over <span>6,500</span> Curated Design
                  </label>
                  <br />
                  <label>
                     Resources, <span>Graphic & Website </span> Templates
                  </label>
               </h1>
               <p>
                  High-quality Design Themes for personal or commercial use
                  contains 6k+ items in 100 categories.
               </p>
               <div className="search">
                  <span>All Category</span>
                  <hr />
                  <input
                     type="text"
                     placeholder="Search Products..."
                     onChange={onChangeHandler}
                     value={value}
                  />
                  <button
                     onClick={() => {
                        onSearchHandler(value);
                     }}
                  >
                     <BiSearch className="searchIcon heIcon" />
                  </button>
               </div>
               <SearchItems
                  product={products}
                  value={value}
                  onSearch={onSearchHandler}
               />
               <p>Examples: Mockup,PSD,Theme Design,Image</p>
            </div>
         </section>
      </>
   );
}
