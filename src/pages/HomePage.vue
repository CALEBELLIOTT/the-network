<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        <AccountBar></AccountBar>
      </div>
      <div class="col-md-8">
        <Post v-for="p in posts" :key="p.id" :post="p"></Post>
      </div>
      <div class="col-md-2">
        <AdBar></AdBar>
      </div>
    </div>
  </div>


</template>

<script>
import { computed, onMounted } from "vue"
import Pop from "../utils/Pop"
import { adsService } from "../services/AdsService"
import { postsService } from "../services/PostsService"
import AccountBar from "../components/AccountBar.vue"
import AdBar from "../components/AdBar.vue"
import Post from "../components/Post.vue"
import { AppState } from "../AppState"
export default {
  name: "Home",
  setup() {
    onMounted(async () => {
      try {
        await adsService.getAds();
        await postsService.getPosts();
      }
      catch (error) {
        console.error(error);
        Pop.toast(error.message);
      }
    });
    return {
      posts: computed(() => AppState.posts)
    }
  },
  components: { AccountBar, AdBar, Post }
}
</script>

<style scoped lang="scss">
</style>
