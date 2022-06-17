
<template>
  <div class="row">
    <div class="col-12 bg-light d-flex">
      <img class="img-fluid profile-img" :src="post.creator.picture" alt="">
      <div class="d-flex flex-column p-2 bg-light m-2">
        <p>{{ post.creator.name }} <i class="mdi mdi-school" v-if="post.creator.graduated"></i></p>
        <p>time</p>
      </div>
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
}
</style>
