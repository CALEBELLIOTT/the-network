import { AppState } from "../AppState";
import { api } from "./AxiosService";


class ProfilesService {

  async setActiveProfile(id) {
    const res = await api.get("/api/profiles/" + id)
    AppState.activeProfile = res.data
    console.log(AppState.activeProfile);
  }

  async getActiveProfilePosts(id) {
    const res = await api.get("/api/profiles/" + id + "/posts")
    console.log(res.data);
    AppState.activeProfilePosts = res.data.posts
    AppState.totalPages = res.data.totalPages

  }
}

export const profilesService = new ProfilesService()