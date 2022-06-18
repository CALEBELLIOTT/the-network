import { AppState } from "../AppState";
import { api } from "./AxiosService"


class PostsService {
  async getPosts() {
    const res = await api.get("api/posts")
    console.log(res.data);
    AppState.posts = res.data.posts
    AppState.totalPages = res.data.totalPages
  }

  async like(id) {
    const res = await api.post("api/posts/" + id + "/like", "")
    let found = AppState.posts.indexOf(AppState.posts.find(p => p.id == id))
    console.log(found);
    AppState.posts[found] = res.data
  }

  async createPost(data) {
    const res = await api.post("/api/posts", data)
    AppState.posts.push(res.data)
    console.log(res.data);
  }

  async deletePost(id) {
    const res = await api.delete("api/posts/" + id)
    let targetIndex = AppState.posts.findIndex(p => p.id == id)
    AppState.posts.splice(targetIndex, 1)
  }

  async changePage() {
    const res = await api.get("api/posts?page=" + AppState.currentPage)
    console.log(res.data);
    AppState.posts = res.data.posts
  }

}


export const postsService = new PostsService()