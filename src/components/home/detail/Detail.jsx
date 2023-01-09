import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MdStarRate } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ADD, REMOVE_ITEM } from "../../../features/cartSlice";

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
                  <div className="details_content" key={item.id}>
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
                                    if (item.qty > 0) {
                                       dispatch(REMOVE_ITEM(item));
                                    }
                                 }}
                              >
                                 <AiOutlineMinus />
                              </button>
                           </div>
                           <button className="button">Add To Cart</button>
                        </div>
                        <div className="desc">
                           <h4>Product Descrition</h4>
                           <p>
                              Designed by Puik in 1949 as one of the first
                              models created especially for Carl Hansen & Son,
                              and produced since 1950. The last of a series of
                              chairs wegner designed based on inspiration from
                              antique chinese armchairs
                           </p>
                           <h4>Product Detail</h4>
                           <ul>
                              <li>
                                 <p>Material: Plastic, Wood</p>
                              </li>
                              <li>
                                 <p>
                                    Legs: Lacquered Oak And Black Painted Oak
                                 </p>
                              </li>
                              <li>
                                 <p>
                                    Dimensions And Weight: Height: 80 Cm,
                                    Weight: 5.3 Kg
                                 </p>
                              </li>
                              <li>
                                 <p>Length: 48cm</p>
                              </li>
                              <li>
                                 <p>Depth: 52 Cm</p>
                              </li>
                              <li>
                                 <p> Seat Height: 44 Cm</p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               );
            })}
         </section>
      </article>
   );
}
