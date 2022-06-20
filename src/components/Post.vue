
<template>
  <div class="row my-2 elevation-3 rounded text-dark">
    <div class="col-12 bg-light d-flex justify-content-between p-2 rounded-top">
      <div>
        <router-link :to="{ name: 'Profile', params: { id: post.creator.id } }">
          <img @click="resetData()" class="img-fluid profile-img selectable" :src="post.creator.picture" alt="">
        </router-link>
        <div class="d-flex flex-column p-2 m-2">
          <p>{{ post.creator.name }} <i class="mdi mdi-school" v-if="post.creator.graduated"></i></p>
          <p>{{ convertTime(post.createdAt) }}</p>
        </div>
      </div>
      <div @click="deletePost(post.id)" class="div" v-if="user.email == post.creator.email">
        <button class="btn btn-danger"><i class="mdi mdi-trash-can"></i></button>
      </div>
    </div>
    <div class="p-2 bg-light rounded-bottom border-top border-2 border-primary">
      <p class="post-text">{{ post.body }}</p>
      <img :src="post.imgUrl" class="img-fluid" alt="">
      <h1><i :id="'like-' + post.id"
          :class="`${post.likeIds.find(id => id == user.id) ? 'text-primary' : ''} like-btn mdi mdi-heart`"
          @click="like(post.id)"></i>
        {{ post.likes.length }}
      </h1>
    </div>
  </div>
</template>


<script>
import { computed } from "vue"
import { AppState } from "../AppState"
import { postsService } from "../services/PostsService"
import Pop from "../utils/Pop"

export default {
  props: { post: { type: Object, required: true } },
  setup(props) {
    return {
      posts: computed(() => AppState.posts),
      user: computed(() => AppState.user),
      async like(id) {
        if (document.getElementById("like-" + id).classList.contains('text-primary')) {
          document.getElementById("like-" + id).classList.remove('text-primary')
        } else {
          document.getElementById("like-" + id).classList.add('text-primary')
        }
        try {
          await postsService.like(id)
        } catch (error) {
          Pop.toast(error.message, "error")
          console.error(error)
        }
      },
      async deletePost(id) {
        if (await Pop.confirm("Are you sure you want to delete this post?", "This cannot be undone", "warning")) {
          try {
            await postsService.deletePost(id)
          } catch (error) {
            console.error(error)
            Pop.toast(error.message, "error")
          }
        }
      },
      resetData() {
        AppState.activeProfile = {}
        AppState.activeProfilePosts = []
      },
      convertTime(time) {
        let seconds = Date.parse(time)
        let date = new Date(seconds)
        let editedDate = date.toLocaleDateString()
        return editedDate
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.profile-img {
  height: 5rem;
  width: 5rem;
  object-fit: cover;
  border-radius: 50%;
}

.post-text {
  letter-spacing: 1px;
}


.like-btn:hover {
  text-shadow: 0 0 10px #B6D369;
  cursor: pointer;
}
</style>
