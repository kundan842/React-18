import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  console.log("params", params);
  const [searchParams, setSearchParams] = useSearchParams();
  // this setSearchParams function can be used to upadate the query param of route
  // but this fucntion have side effect, so should be used in event handler or useEfct
  // a componet should be free of side effect
  const location = useLocation();
  console.log("search params", searchParams.toString());
  console.log("name", searchParams.get("name"));
  console.log("location", location);
  return <p>User</p>;
};

export default UserDetailPage;
