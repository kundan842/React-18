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
  // for paginated query to keep track of page and page size need to use two state varible and that should pass as  postQuery object to custom hooks
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { data: posts, error, isLoading } = usePost({ page, pageSize });
  //   const [posts, setPosts] = useState<Post[]>([]);
  //   const [error, setError] = useState('');

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page == 1}
        className="btn btn-primary"
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
      <button
        className="btn btn-primary ms-1"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </>
  );
};

export default PostList;
