import userService,  { User } from "../services/user-service";
import { useState, useEffect } from "react";

import {CanceledError} from "../services/api-client";


const useUsers = () => {
    const [user, setUser] = useState<User[]>([]);
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
    useEffect(() => {
        // as about to fetch data
        // set loading true
        setLoading(true);
        const { request, cancel } = userService.getAll<User>();
        // request is promise obejct
        request
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
        return () => cancel();
        // return cleanup code fucntion
        // in stritc mode this finally doesnt work
        // so making adding setIsloading in then and catch method
      }, []);

      return{user, error, loading, setUser, setError, setLoading}

}

export default useUsers
