import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import Loading from "./Loading";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    console.log("fetch started");
    fetch("//dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
        console.log("fetch returned");
      });
    console.log("fetch ended");

    return () => {
      console.log("Cleaning up useEffect");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <Welcome />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
