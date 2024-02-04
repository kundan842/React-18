import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery
{
  page: number
  pageSize:number
}
const usePost = (postQuery:PostQuery) => {
  // params: { userId }, is query params
  //https://jsonplaceholder.typicode.com/posts?_start=10&_limit=10
  const fetchPost = () => {
    return axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: { 
          _start: (postQuery.page - 1) * postQuery.pageSize,
          _limit: postQuery.pageSize

         },
      })
      .then((res) => res.data);
  };
  // this use query hook returns various object getting data out of it namings it todos
  // here need to fetch data using  params user=1,
  // like endpoints , keys will be users, id, posts
  return useQuery<Post[], Error>({
    queryKey:['posts', postQuery],
    queryFn: fetchPost,
    staleTime: 10000, // 10 second
    keepPreviousData:true
  });
};

export default usePost;
