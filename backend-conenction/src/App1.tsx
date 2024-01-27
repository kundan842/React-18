import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";


//use  of axios without axios client
interface User {
  id: number;
  name: string;
}
function App1() {
  const [user, setUser] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    // as about to fetch data
    // set loading true
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUser(res.data);
        // if resloeved then
        setLoading(false);
      })
      .catch((err) => {
        // in case of error too
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));
    // return cleanup code fucntion
    // in stritc mode this finally doesnt work
    // so making adding setIsloading in then and catch method
    return () => controller.abort();
  }, []);

  const deleteUser = (u: User) => {
    const originalUser = [...user];
    setUser(user.filter((us) => us.id != u.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + u.id)
      .catch((err) => {
        setError(err.message);
        // in case of error set original error
        setUser(originalUser);
      });
  };

  const addUser = () => {
    const newUser = { id: 1000, name: "kundan" };
    const orgUser = [...user];
    // update ui
    setUser([newUser, ...user]);
    // send request to server
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => setUser([res.data, ...user]))
      .catch((err) => {
        setError(err.message);
        setUser(orgUser);
      });
  };

  const updateUser = (usr: User) => {
    const updatedUser = { ...usr, name: usr.name + "!" };
    setUser(user.map((us) => (us.id == usr.id ? updatedUser : us)));
  };

  // using async await
  // useEffect(() => {
  //   // define the method to get data and set data to state
  //   const getUserData = async () => {
  //     try {
  //       const res = await axios.get<User[]>(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       setUser(res.data);
  //     } catch (err) {
  //       setError((err as AxiosError).message);
  //     }
  //   };
  //   // call the method
  //   getUserData();
  // });

  console.log(user);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {loading && (
        <div className="spinner-border text-primary">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {user.map((u) => (
          <li
            key={u.id}
            className="list-group-item d-flex justify-content-between"
          >
            {u.name}{" "}
            <div>
              {" "}
              <button
                className="btn btn-outline-danger mx-1"
                onClick={() => deleteUser(u)}
              >
                Delete
              </button>
              <button className="btn btn-primary" onClick={() => updateUser(u)}>
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App1;
