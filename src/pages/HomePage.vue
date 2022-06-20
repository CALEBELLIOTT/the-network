<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <AccountBar class="sticky" v-if="user.name"></AccountBar>
        <AdBar class="sticky" v-if="!user.name"></AdBar>
      </div>
      <div class="col-md-6">
        <CreatePostBar v-if="user.name"></CreatePostBar>
        <PageNavigation></PageNavigation>
        <SearchBar></SearchBar>
        <Post v-for="p in posts" :key="p.id" :post="p"></Post>
        <PageNavigation></PageNavigation>
      </div>
      <div class="col-md-3">
        <AdBar class="sticky"></AdBar>
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
import CreatePostBar from "../components/CreatePostBar.vue"
import PageNavigation from "../components/PageNavigation.vue"
export default {
  name: "Home",
  setup() {
    onMounted(async () => {
      AppState.currentPage = 1
      try {
        await adsService.getAds();
        await postsService.getPosts();
        console.log(AppState.user);
      }
      catch (error) {
        console.error(error);
        Pop.toast(error.message);
      }
    });
    return {
      posts: computed(() => AppState.posts),
      user: computed(() => AppState.user)
    }
  },
  components: { AccountBar, AdBar, Post, CreatePostBar, PageNavigation }
}
</script>

<style scoped lang="scss">
.sticky {
  position: sticky;
  top: .5em;
}
</style>
