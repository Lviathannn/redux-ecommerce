import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MdStarRate } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ADD } from "../../../features/cartSlice";

export default function Detail() {
   const { id } = useParams();
   const getData = useSelector((state) => {
      const data = state.cart.carts.filter((item) => {
         return item.id == id;
      });
      return data;
   });

   const dispatch = useDispatch();

   return (
      <article>
         <section className="details">
            <h2 className="details_title">Product Details</h2>
            {getData.map((item) => {
               return (
                  <div className="details_content">
                     <div className="details_content_img">
                        <img src={item.cover} alt="" />
                     </div>
                     <div className="details_content_detail">
                        <h1>{item.title}</h1>
                        <div className="rating">
                           <MdStarRate />
                           <MdStarRate />
                           <MdStarRate />
                           <MdStarRate />
                           <MdStarRate />
                           <label htmlFor=""> (1 Customer reviews)</label>
                        </div>
                        <h3>${item.price}</h3>
                        <p>{item.author}</p>
                        <div className="qty">
                           <div className="count">
                              <button
                                 onClick={() => {
                                    dispatch(ADD(item));
                                 }}
                              >
                                 <AiOutlinePlus />
                              </button>
                              <span>{item.qty}</span>
                              <button
                                 onClick={() => {
                                    dispatch(ADD(item));
                                 }}
                              >
                                 <AiOutlineMinus />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               );
            })}
         </section>
      </article>
   );
}
