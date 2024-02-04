import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
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

  return <div>{post.title}</div>;
}

export default SpecificPost;
