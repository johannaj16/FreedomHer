// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import "../index.css";
// import fairy from "../assets/butterfly.png";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// function Posts({ posts }) {
//   useEffect(() => {
    
//   }, []);

//   const [pfp, setPfp] = useState([]);
//   axios
//       .get(`${BASE_URL}/api/v1/posts/pfp/` + id)
//       .then((response) => {
//         console.log(response.data);
//         setPfp(response.data);
        
//         setTimeout(() => setLoading(false), 1000);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
  

//   return (
//     <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 pt-4 w-full place-items-center">
//       {posts.map((item) => (
//         <Link
//           key={item._id}
//           className="bg-[rgba(82,182,232,0.3)] flex gap-10 pr-6 pl-4 py-5 w-11/12 drop-shadow-2xl hover:bg-[rgba(50,105,133,0.3)] cursor-pointer"
//           to={"/forum/" + item._id}
//         >
//           <div className="flex flex-col gap-3">
//             <div className="flex items-center gap-4">
//               {console.log("gabe hehehehhe: " + pfp)}
//               <img
//                 src={pfp}
//                 className=" w-24 h-24 object-cover rounded-full bg-white"
//               />

//               <h1 className="font-herfonty text-white text-2xl md:text-xl capitalize line-clamp-2">
//                 {item.title}
//               </h1>
//             </div>
//             <p className="text-pink-500 capitalize text-xl pl-2">
//               {item.genre}
//             </p>
//             <p className="w-full line-clamp-2 pl-2 text-lg">{item.content}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
//   // imported font
// }

// export default Posts;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../index.css";
import fairy from "../assets/butterfly.png";
import { useParams } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Posts({ posts }) {
  const { id } = ""
posts.map((item) => {
  const url = `${BASE_URL}/pfp/${item._id}`
  console.log(url);
  axios
  .get(url)
  .then((response) => {
    console.log(response.data.profileImage);
    setPosts(response.data.profileImage);
    // setOrgPost(response.data.posts);
    setTimeout(() => setLoading(false), 1000);
  })
  .catch((error) => {
    console.log(error);
    // setLoading(false);
  });
})
  return (
    <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 pt-4 w-full place-items-center">
      {posts.map((item) => (
        <Link
          key={item._id}
          to={`/forum/${item._id}`}
          className="bg-[rgba(82,182,232,0.3)] flex gap-10 pr-6 pl-4 py-5 w-11/12 drop-shadow-2xl hover:bg-[rgba(50,105,133,0.3)] cursor-pointer"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              {console.log("moo: " + JSON.stringify(item))}
              <img
                src={item.profileImage} // Use the profileImage fetched for each post
                alt="Profile"
                className="w-24 h-24 object-cover rounded-full bg-white"
              />
              <h1 className="font-herfonty text-purple-900 font-bold text-2xl md:text-xl capitalize line-clamp-2">
                {item.title}
              </h1>
            </div>
            <p className="text-purple-900 capitalize text-xl pl-2">
              {item.genre}
            </p>
            <p className="w-full line-clamp-2 pl-2 text-lg">{item.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Posts;
