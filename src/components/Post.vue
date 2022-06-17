
<template>
  <div class="row my-2 elevation-3 rounded">
    <div class="col-12 bg-light d-flex p-2 rounded">
      <router-link :to="{ name: 'Profile', params: { id: post.creator.id } }">
        <img class="img-fluid profile-img selectable" :src="post.creator.picture" alt="">
      </router-link>
      <div class="d-flex flex-column p-2 m-2">
        <p>{{ post.creator.name }} <i class="mdi mdi-school" v-if="post.creator.graduated"></i></p>
        <p>time</p>
      </div>
    </div>
    <div class="p-2 bg-light">
      <p class="post-text">{{ post.body }}</p>
    </div>
  </div>
</template>


<script>
import { computed } from "vue"
import { AppState } from "../AppState"

export default {
  props: { post: { type: Object, required: true } },
  setup() {
    return {
      posts: computed(() => AppState.posts)
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
</style>
