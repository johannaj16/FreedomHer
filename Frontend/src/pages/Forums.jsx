import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Posts from "../components/Posts";
import Search from "../components/Search";
import NoResults from "../components/NoResults";
//API
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Forums() {
  const [posts, setPosts] = useState([]);
  const [orgPost, setOrgPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/api/v1/posts/`)
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
        setOrgPost(response.data);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const filterPosts = (genre, title) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
    if (title === "" && genre === "All") {
      setPosts(orgPost);
      return;
    }
    if (genre === "All") {
      const searchTerm = title.toLowerCase(); // Convert search term to lowercase
      const searchRes = orgPost.filter((item) =>
        item.title.toLowerCase().includes(searchTerm)
      );
      setPosts(searchRes);
      return;
    }
    const searchTerm = title.toLowerCase();
    const res = orgPost.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    const res2 = res.filter((item) => item.genre === genre);
    setPosts(res2);
  };

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="w-full bg-[rgba(82,182,232,0.3)] py-5">
        <Search selectedTopic={(genre, title) => filterPosts(genre, title)} />
      </div>
      <div className="w-full">
        {loading ? (
          <div className="flex flex-col items-center py-36">
            <AiOutlineLoading3Quarters size={50} className=" animate-spin" />
          </div>
        ) : posts.length > 0 ? (
          <Posts posts={posts} />
        ) : (
          <NoResults />
        )}
      </div>
    </main>
  );
}

export default Forums;
