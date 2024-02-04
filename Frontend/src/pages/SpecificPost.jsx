import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Comments from "../components/Comments";
import CommentCreator from "../components/CommentCreator";

function SpecificPost() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("yo");
    axios
      .get("http://localhost:4000/api/v1/posts/" + id)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    // This effect will run after the component is rendered
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      time: "numeric",
    };
    const formatted = new Date(dateString).toLocaleDateString("en-US", options);
    return formatted;
  };

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center py-36">
          <AiOutlineLoading3Quarters size={50} className="animate-spin" />
        </div>
      ) : (
        <>
          <div className="flex flex-col px-10 bg-[rgba(135,116,162,0.4)] mt-9 rounded-3xl mx-3 py-5 gap-5 font-herfonty">
            <div className="flex justify-between items-center text-2xl text-gray-600 text-opacity-25">
              <div className="flex items-center">
                <Link
                  to="/forum"
                  className="text-blue-900 hover:underline lg:text-2xl"
                >
                  Forum
                </Link>
                <h1>{">>" + post.genre}</h1>
              </div>
              <h2 className="text-lg  italic">{formatDate(post.createdAt)}</h2>
            </div>
            <div className="text-3xl text-left">{post.title}</div>
            <div className=" border-b-2"></div>
            <p className=" rounded-xl py-3">{post.content}</p>
          </div>
          <CommentCreator />
          {/* <Comments comments={post.comments} /> */}
        </>
      )}
    </>
  );
}

export default SpecificPost;
