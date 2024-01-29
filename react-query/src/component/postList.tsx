import axios from "axios";
import { useEffect, useState } from "react";
import usePost from "../hooks/usePost";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading } = usePost(userId);
  //   const [posts, setPosts] = useState<Post[]>([]);
  //   const [error, setError] = useState('');

  //   useEffect(() => {
  //     axios
  //       .get('https://jsonplaceholder.typicode.com/posts')
  //       .then((res) => setPosts(res.data))
  //       .catch((error) => setError(error));
  //   }, []);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        name=""
        id=""
        className="form-select mb-3"
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
      >
        <option value=""></option>
        <option value="1">User1</option>
        <option value="2">User2</option>
        <option value="3">User3</option>
      </select>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
