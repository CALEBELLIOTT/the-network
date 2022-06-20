
<template>
  <div class="row text-secondary my-2">
    <div class="col-12 d-flex justify-content-around align-items-center">
      <h3><i class="mdi mdi-chevron-triple-left nav-active" @click="pageNav(1, profile)"></i>
      </h3>
      <p>page: {{ currentPage }}</p>
      <h3><i class="mdi mdi-chevron-triple-right nav-active" @click="pageNav(2, profile)"></i></h3>
    </div>
  </div>
</template>


<script>
import { computed } from "vue"
import { AppState } from "../AppState"
import Pop from "../utils/Pop"
import { postsService } from "../services/PostsService"



export default {
  props: { profile: { type: String, required: true } },
  setup() {
    return {
      currentPage: computed(() => AppState.currentPage),
      async pageNav(direction, profile) {
        console.log(profile);
        if ((direction == 1 && AppState.currentPage < 2)) {
          Pop.toast("you cannot navigate that direction", "error")
          return
        }
        if (direction == 2 && AppState.currentPage > AppState.totalPages - 1) {
          Pop.toast("you cannot navigate that direction", "error")
          return
        }
        if (direction == 1) {
          AppState.currentPage--
        } else {
          AppState.currentPage++
        }
        try {
          await postsService.changeProfilePage(profile)
        } catch (error) {
          Pop.toast(error.message, "error")
          console.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.nav-active:hover {
  text-shadow: 0 0 10px #B6D369;
  cursor: pointer;
}

.nav-inactive {
  color: grey;
  pointer-events: none;
}
</style>
