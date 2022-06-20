
<template>
  <div class="row sticky text-dark">
    <div class="col-12 d-flex flex-column">
      <div class=" bg-light elevation-2 my-2 p-2 rounded">
        <router-link :to="{ name: 'Profile', params: { id: account.id } }">
          <img @click="resetData()" class="img-thumbnail" :src="account.picture" alt="">
        </router-link>
        <p>{{ account.name }}</p>
        <p class="text-muted">{{ account.class }}</p>
        <h3 v-if="account.graduated"><i class="mdi mdi-school"></i></h3>

        <a :href="account.github">
          <h5><i class="mdi mdi-github text-primary"></i> GitHub</h5>
        </a>

        <a :href="account.linkedin">
          <h5><i class="mdi mdi-linkedin text-primary"></i> LinkedIn</h5>
        </a>

        <a :href="account.resume">
          <h5><i class="mdi mdi-notebook text-primary"></i> Resume</h5>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "vue"
import { AppState } from "../AppState"

export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      log() {
        console.log(AppState.account);
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
</style>
