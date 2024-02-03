import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Posts from "../components/Posts";
import Search from "../components/Search";
//API
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Forums() {
  const [posts, setPosts] = useState([]);
  const [orgPost, setOrgPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/api/v1/posts/`)
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

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="w-full bg-[rgba(82,182,232,0.3)] py-5">
        <Search />
      </div>
      <div className="w-full">
        {loading ? (
          <div className="flex flex-col items-center py-36">
            <AiOutlineLoading3Quarters />
          </div>
        ) : posts.length > 0 ? (
          <Posts posts={posts} />
        ) : (
          <h1>No results</h1>
        )}
      </div>
    </main>
  );
}

export default Forums;
