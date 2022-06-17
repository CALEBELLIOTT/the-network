import { AppState } from "../AppState";
import { api } from "./AxiosService"


class PostsService {
  async getPosts() {
    const res = await api.get("api/posts")
    console.log(res.data);
    AppState.posts = res.data.posts
  }

  async like(id) {
    const res = await api.post("api/posts/" + id + "/like", "")
    let found = AppState.posts.indexOf(AppState.posts.find(p => p.id == id))
    console.log(found);
    AppState.posts[found] = res.data
  }

}


export const postsService = new PostsService()