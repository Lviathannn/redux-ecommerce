import React from "react";
import Heading from "../../common/Heading";
import { blog } from "../../assets/data/data";

export default function Blog() {
   return (
      <section className="blog">
         <Heading
            title="LATEST BLOG POST"
            desc="Lates marketplace news , success stories and tutorials"
         />{" "}
         <div className="posts">
            {blog.slice(0, 3).map((item) => (
               <div className="post" key={item.id}>
                  <div className="content">
                     <div className="img">
                        <img src={item.cover} alt="" />
                     </div>
                     <div className="text">
                        <p>
                           Post Date : <span>{item.date}</span>
                        </p>
                        <h3>{item.title.slice(0, 35)}...</h3>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}
