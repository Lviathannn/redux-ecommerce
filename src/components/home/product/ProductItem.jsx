import React, { useState } from "react";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { ADD } from "../../../features/cartSlice";

export default function ProductItem({ data }) {
   const [openImage, setOpenImage] = useState(false);
   const [img, setImg] = useState("");
   const dispatch = useDispatch();

   const openImageHandle = (src) => {
      setImg(src);
      setOpenImage(true);
   };

   return (
      <>
         <div className="product_items">
            {data.map((item, index) => {
               return (
                  <div className="box" key={index}>
                     <div className="img">
                        <img src={item.cover} alt="" />
                        <div className="overlay">
                           <button
                              className="button"
                              onClick={() => {
                                 dispatch(ADD(item));
                              }}
                           >
                              <FiShoppingBag />
                           </button>
                           <button className="button">
                              <AiOutlineHeart />
                           </button>
                           <button
                              className="button"
                              onClick={() => {
                                 openImageHandle(item.cover);
                              }}
                           >
                              <FiSearch />
                           </button>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
         <div className={openImage ? "modelOpen" : "modelClose"}>
            <div className="onClickImage">
               <img src={img} alt="" />
               <button className="button" onClick={() => setOpenImage(false)}>
                  <AiOutlineClose />
               </button>
            </div>
         </div>
      </>
   );
}
