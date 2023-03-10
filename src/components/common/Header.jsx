import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/images/logo.svg";
import { BsBagCheck } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import {
   AiOutlineHeart,
   AiOutlineMenu,
   AiOutlineClose,
   AiOutlineDelete,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { navlist } from "../assets/data/data";
import cartImg from "../assets/images/cart.png";
import { REMOVE } from "../../features/cartSlice";

export default function Header() {
   window.addEventListener("scroll", function () {
      const header = this.document.querySelector(".header");
      header.classList.toggle("active", this.window.scrollY > 100);
   });

   const [mobile, setMobile] = useState(false);
   const [cartList, setCartList] = useState(false);

   // cart add in shop
   const getData = useSelector((state) => {
      return state.cart.carts;
   });

   const handelClose = () => {
      setCartList(null);
   };
   const dispatch = useDispatch();

   // Total Price

   const [price, setPrice] = useState(0);

   const total = useCallback(() => {
      let price = 0;
      getData.forEach((item) => {
         price = parseFloat(item.price) * item.qty + price;
      });
      setPrice(price);
   }, [getData]);

   useEffect(() => {
      total();
   }, [total]);

   return (
      <>
         <>
            <header className="header">
               <div className="container">
                  <nav>
                     <div className="toggle">
                        <button onClick={() => setMobile(!mobile)}>
                           {mobile ? (
                              <AiOutlineClose className="close heIcon" />
                           ) : (
                              <AiOutlineMenu className="open heIcon" />
                           )}
                        </button>
                     </div>
                     <div className="left">
                        <Link to="/">
                           <img src={logo} alt="logo" />
                        </Link>
                     </div>
                     <div className="center">
                        <ul className={mobile ? "mobile-nav" : "menu"}>
                           {navlist.map((nav, i) => (
                              <li key={i}>
                                 <Link
                                    to={nav.path}
                                    onClick={() => {
                                       setMobile(false);
                                    }}
                                 >
                                    {nav.text}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </nav>
                  <div className="right">
                     <div className="right_user">
                        <RiUser3Line className="userIcon heIcon" />
                        <AiOutlineHeart className="userIcon heIcon" />
                     </div>
                     <div className="right_card">
                        <button
                           className="button"
                           onClick={() => {
                              setCartList(!cartList);
                           }}
                        >
                           <BsBagCheck className="shop heIcon" />
                           MY CART
                        </button>
                        <div className={cartList ? "showCart" : "hideCart"}>
                           {getData.length ? (
                              <section className="details">
                                 <div className="details_title">
                                    <h3>Photo</h3>
                                    <p>Product Name</p>
                                 </div>
                                 {getData.map((e) => (
                                    <div className="details_content" key={e.id}>
                                       <div className="details_content_img">
                                          <Link
                                             to={`/cart/${e.id}`}
                                             onClick={handelClose}
                                          >
                                             <img src={e.cover} alt="" />
                                          </Link>
                                       </div>
                                       <div className="details_content_detail">
                                          <div className="details_content_detail_price">
                                             <p>{e.title.slice(0, 20)}...</p>
                                             <p>Price : ${e.price}</p>
                                             <p>Quantity : {e.qty}</p>
                                          </div>
                                       </div>
                                       <div className="details_content_detail_icon">
                                          <i
                                             onClick={() => {
                                                dispatch(REMOVE(e.id));
                                             }}
                                          >
                                             <AiOutlineDelete />
                                          </i>
                                       </div>
                                    </div>
                                 ))}
                                 <div className="details_total">
                                    <h4>Total : ${price}</h4>
                                 </div>
                              </section>
                           ) : (
                              <div className="empty">
                                 <p>Your cart is empty</p>
                                 <img src={cartImg} alt="" />
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </header>
         </>
      </>
   );
}
