
<template>
  <div class="row sticky text-dark">
    <div class="col-12 d-flex flex-column">
      <div class=" bg-light elevation-2 my-2 p-2 rounded">
        <img class="img-thumbnail" :src="account.picture" alt="">
        <h3 v-if="account.graduated"><i class="mdi mdi-school"></i></h3>
        <p class="text-muted">{{ account.class }}</p>
        <p>{{ account.name }}</p>
        <h5><i class="mdi mdi-github text-primary"></i>{{ account.github || ' N/A' }}</h5>
        <h5><i class="mdi mdi-linkedin text-primary"></i>{{ account.linkedin || ' N/A' }}</h5>
        <h5><i class="mdi mdi-notebook text-primary"></i>{{ account.resume || ' N/A' }}</h5>
                <EditProfileModal></EditProfileModal>
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
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
