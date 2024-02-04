import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
const usePost1 = (userId: number | undefined) => {
  // params: { userId }, is query params
  //https://jsonplaceholder.typicode.com/post?userId=1
  const fetchPost = () => {
    return axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: { userId },
      })
      .then((res) => res.data);
  };
  // this use query hook returns various object getting data out of it namings it todos
  // here need to fetch data using  params user=1,
  // like endpoints , keys will be users, id, posts
  // for paramatarized query
  return useQuery<Post[], Error>({
    queryKey: userId ? ["user", userId, "posts"] : ["posts"],
    queryFn: fetchPost,
    staleTime: 10000, // 10 second
  });
};

export default usePost1;
