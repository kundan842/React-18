import apiClient from "./api-client";
interface Entity{
    id:number
}
class HttpService
{
    endpoint: string;
    constructor(endpoint:string)
    {
        this.endpoint = endpoint
    }
    // method to get all wheter its user or post
    // here T is genric type parameter it can be defined interface suer post
    getAll<T>()
    {
        // controller is responsible for making fetch request
        const controller = new AbortController();
        // this get user retuerns the promise so store it into request object
      const  request =  apiClient.get<T []>(this.endpoint, {
        signal: controller.signal,
      })
       return {request, cancel:( ) => controller.abort()}
      // noe to allow camcle the request or when user navigate to other page
      // to make sure that requets is canaclled
      //will return method by calling which  reuest will be cancalled

    }
    delete(id: number)
    {
       return apiClient.delete(this.endpoint+"/" + id)
    }
    create<T>(entity:T)
    {
        return apiClient.post(this.endpoint, entity)
    }
    update<T extends Entity>(entity : T)
    {
       return apiClient.patch(this.endpoint+"/"+entity.id, entity)
    }
}

// directly cant return object as need to pass endpint while craeting obejct
// so will pass method to create objetc
const create = (endpint:string) => new HttpService(endpint)
export default  create;