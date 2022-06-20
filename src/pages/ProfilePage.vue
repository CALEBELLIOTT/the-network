
<template>
  <div class="container-fluid text-dark">
    <div class="row">
      <div class="col-md-3">
        <AdBar class="sticky"></AdBar>
      </div>
      <div class="col-md-6">
        <ProfileInfo class="mb-5"></ProfileInfo>
        <EditAccountBar v-if="account.id == id"></EditAccountBar>
        <ProfilePageNavigation :profile="id"></ProfilePageNavigation>
        <Post v-for="p in activePosts" :post="p"></Post>
        <ProfilePageNavigation :profile="id"></ProfilePageNavigation>
      </div>
      <div class="col-md-3">
        <AdBar class="sticky"></AdBar>
      </div>
    </div>

  </div>

</template>


<script>
import { computed, onMounted } from "vue"
import { useRoute } from "vue-router"
import { api } from "../services/AxiosService"
import { profilesService } from "../services/ProfilesService"
import Pop from "../utils/Pop"
import { AppState } from "../AppState"
import AdBar from "../components/AdBar.vue"
import { adsService } from "../services/AdsService"
import Post from "../components/Post.vue"
import EditAccountBar from "../components/EditAccountBar.vue"


export default {
  setup() {
    onMounted(async () => {
      try {
        AppState.currentPage = 1
        await adsService.getAds()
        await profilesService.setActiveProfile(route.params.id);
        await profilesService.getActiveProfilePosts(route.params.id)
      }
      catch (error) {
        console.error(error);
        Pop.toast(error.message);
      }
    });
    const route = useRoute();
    return {
      profile: computed(() => AppState.activeProfile),
      activePosts: computed(() => AppState.activeProfilePosts),
      id: route.params.id,
      account: computed(() => AppState.account)
    };
  },
  components: { AdBar, Post, EditAccountBar }
}
</script>


<style lang="scss" scoped>
.sticky {
  position: sticky;
  top: .5em;
}
</style>
