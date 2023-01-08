import React from "react";
import Heading from "../../common/Heading";
import { price } from "../../assets/data/data";

export default function Price() {
   return (
      <section className="price">
         <Heading
            title="Chose The Plans"
            desc="Meet Our Newbies ! The latest templates uploaded to marketplace"
         />
         <div className="content">
            {price.map((item) => (
               <div className="box" key={item.id}>
                  {" "}
                  <h3>{item.name}</h3>
                  <h1>
                     <span>$</span>
                     {item.price}
                     <label htmlFor=""> / User per Month</label>
                  </h1>
                  <p>{item.desc}</p>
                  <button className="button">GET STARTED</button>
                  <ul>
                     {item.list.map((item, index) => (
                        <li key={index}>
                           <i>{item.icon}</i>
                           <i>{item.para}</i>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </section>
   );
}
