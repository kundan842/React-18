import { useEffect, useState } from "react";
import { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
  const { user, error, loading, setUser, setError, setLoading } = useUsers();

  const deleteUser = (u: User) => {
    const originalUser = [...user];
    setUser(user.filter((us) => us.id != u.id));

    userService.delete(u.id).catch((err) => {
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

    userService
      .create<User>(newUser)
      .then((res) => setUser([res.data, ...user]))
      .catch((err) => {
        setError(err.message);
        setUser(orgUser);
      });
  };

  const updateUser = (usr: User) => {
    const updatedUser = { ...usr, name: usr.name + "!" };
    console.log("updated_user_id", usr.id);
    const orgUsers = [...user];
    setUser(user.map((us) => (us.id == usr.id ? updatedUser : us)));
    userService.update<User>(updatedUser).catch((err) => {
      setError(err.message);
      setUser(orgUsers);
    });
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

export default App;
