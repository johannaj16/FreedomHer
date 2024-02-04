// import React from "react";
// import { useParams } from "react-router-dom";
// import axios from 'axios'; // Ensure axios is imported

// function CommentCreator() {
//   // Correct usage of useParams outside of the handleSubmit function
//   const { id } = useParams();

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // This will prevent the default form submit action (page reload)
//     console.log("yuh");
//     console.log(id);
//     // Asynchronous operation for submitting the comment
//     try {
//       const dataToAdd = {
//         reply: "another reply!"
//       };  

//       //console.log(`http://localhost:4000/api/v1/posts/comment/${id}`);
//       const response = await axios.patch(`http://localhost:4000/api/v1/posts/comment/${id}`, dataToAdd);
//       console.log(response.data);
//       setPost(response.data); // Assuming setPost updates the state
//       setTimeout(() => setLoading(false), 1000); // Assuming setLoading updates the state
//     } catch (error) {
//       console.error(error);
//       setLoading(false); // Assuming setLoading updates the state
//     }

//     console.log("Form submitted");
//   };

//   return (
//     <>
//       <div>
//         {/* Attach the handleSubmit function to the form's onSubmit event */}
//         <form onSubmit={handleSubmit} className="flex flex-row md:items-start items-center p-10 text-xl">
//           <textarea
//             className="bg-gray-100 shadow-lg rounded font-herfonty resize-none w-full h-20 p-3 placeholder-gray-500 focus:outline-none focus:bg-white"
//             name="body"
//             placeholder="Your reply"
//             required
//           ></textarea>
//           <button
//             type="submit" // Correct type for submission button
//             className="font-herfonty text-lg bg-[rgba(135,116,162,0.4)] transition ease-in-out hover:bg-[rgba(135,116,162,0.85)] py-4 px-3 rounded-lg sm:w-[10rem] mt-4 ml-3"
//           >
//             Post reply
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default CommentCreator;


import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'; // Ensure axios is imported

function CommentCreator() {
  const { id } = useParams();
  const [reply, setReply] = useState(''); // State to hold the textarea value

  const handleChange = (e) => {
    setReply(e.target.value); // Update the reply state whenever the textarea changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit action
    console.log("yuh");
    console.log(id);
    try {
      const dataToAdd = {
        reply: reply // Use the reply state value as the reply
      };  

      const response = await axios.patch(`http://localhost:4000/api/v1/posts/comment/${id}`, dataToAdd);
      console.log(response.data);
      // setPost(response.data); // Assuming setPost updates the state
      setTimeout(() => setLoading(false), 1000); // Assuming setLoading updates the state
      setReply(''); // Optionally reset the textarea after submission
    } catch (error) {
      console.error(error);
      // setLoading(false); // Assuming setLoading updates the state
    }

    console.log("Form submitted");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-row md:items-start items-center p-10 text-xl">
          <textarea
            className="bg-gray-100 shadow-lg rounded font-herfonty resize-none w-full h-20 p-3 placeholder-gray-500 focus:outline-none focus:bg-white"
            name="body"
            placeholder="Your reply"
            required
            value={reply} // Controlled component
            onChange={handleChange} // Handle changes to update state
          ></textarea>
          <button
            type="submit"
            className="font-herfonty text-lg bg-[rgba(135,116,162,0.4)] transition ease-in-out hover:bg-[rgba(135,116,162,0.85)] py-4 px-3 rounded-lg sm:w-[10rem] mt-4 ml-3"
          >
            Post reply
          </button>
        </form>
      </div>
    </>
  );
}

export default CommentCreator;
