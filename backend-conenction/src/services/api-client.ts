
import axios, { CanceledError }from "axios";

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
    // headers:{'api-key': '...'}
    // these headers will go with each http request
})


export {CanceledError}