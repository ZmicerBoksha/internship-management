import { setupInterceptorsTo } from "./Interceptors";
import axios from "axios";
setupInterceptorsTo(axios);

const url = "https://jsonplaceholder.typicode.com/posts";

axios.get(url).then((response) => {
  const posts = response.data;

  const ID = posts.id;
  const title = posts.title;
  const body = posts.body;
});
