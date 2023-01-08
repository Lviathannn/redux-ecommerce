import React from "react";
import Heading from "../../common/Heading";
import { ImQuotesRight } from "react-icons/im";
import { customer } from "../../assets/data/data";

export default function Testimonial() {
   return (
      <section className="customer">
         <Heading
            title="Chose The Plans"
            desc="Meet Our Newbies ! The latest templates uploaded to marketplace"
         />
         <div className="content">
            {customer.map((item) => (
               <div className="card" key={item.id}>
                  <button>
                     <ImQuotesRight />
                  </button>
                  <p>"{item.desc}"</p>
                  <h3>"{item.name}"</h3>
                  <p>"{item.post}"</p>
               </div>
            ))}
         </div>
      </section>
   );
}
