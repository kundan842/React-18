import apiClient from "./api-client";



export interface User {
    id: number;
    name: string;
  }
class UserService
{
    getAllUsers()
    {
        // controller is responsible for making fetch request
        const controller = new AbortController();
        // this get user retuerns the promise so store it into request object
      const  request =  apiClient.get<User[]>("/users", {
        signal: controller.signal,
      })
       return {request, cancel:( ) => controller.abort()}
      // noe to allow camcle the request or when user navigate to other page
      // to make sure that requets is canaclled
      //will return method by calling which  reuest will be cancalled

    }
    deleteUser(id: number)
    {
       return apiClient.delete("/users/" + id)
    }
    adduser(user:User)
    {
        return apiClient.post("/users", user)
    }
    updateUser(user: User)
    {
       return apiClient.patch('/users/'+user.id, user)
    }
}

export default new UserService()