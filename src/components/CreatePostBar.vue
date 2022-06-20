
<template>
  <div class="row rounded elevation-3 bg-light mt-2 mb-5">
    <div class="col-3 p-2">
      <router-link :to="{ name: 'Profile', params: { id: account.id } }">
        <img @click="resetData()" class="img-fluid profile-img" :src="account.picture" alt="">
      </router-link>
    </div>
    <div class="col-9 p-2 text-end">
      <form action="" @submit.prevent="createPost()">
        <textarea v-model="data.body" class="form-control" placeholder="Share what's happening..." name="" id=""
          cols="30" rows="5"></textarea>
        <input v-model="data.imgUrl" class="form-control mt-2" placeholder="img-url..." type="text">
        <div class="row">
          <div class="col-12">
            <button class="post-btn" type="submit">
              <h3 class="mt-2"><i class="post-btn mdi mdi-send post-btn"></i></h3>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import { computed, popScopeId, ref } from "vue"
import { AppState } from "../AppState"
import { postsService } from "../services/PostsService"
import Pop from "../utils/Pop"

export default {
  setup() {
    const data = ref({})
    return {
      data,
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async createPost() {

        try {
          console.log(data.value);
          await postsService.createPost(data.value)
        } catch (error) {
          Pop.toast(error.message, "error")
          console.error(error)
        }
        await postsService.getPosts()
      },
      resetData() {
        AppState.activeProfile = {}
        AppState.activeProfilePosts = []
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.profile-img {
  height: 7rem;
  width: 7rem;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #B6D369;
}

.post-btn:hover {
  text-shadow: 0 0 10px #B6D369;
  cursor: pointer;
}

.post-btn {
  color: #B6D369;
}

.post-btn {
  background: none;
  padding: 0px;
  border: none;
}
</style>
