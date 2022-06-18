
<template>
  <div class="row text-secondary">
    <div class="col-12 d-flex justify-content-around align-items-center">
      <h3><i class="mdi mdi-chevron-triple-left nav-active" @click="changePage(1)"></i>
      </h3>
      <p>page: {{ currentPage }}</p>
      <h3><i class="mdi mdi-chevron-triple-right nav-active" @click="changePage(2)"></i></h3>
    </div>
  </div>
</template>


<script>
import { computed } from "vue"
import { AppState } from "../AppState"
import { postsService } from "../services/PostsService"
import Pop from "../utils/Pop"

export default {
  setup() {
    return {
      currentPage: computed(() => AppState.currentPage),
      async changePage(direction) {
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
          await postsService.changePage()
        } catch (error) {
          Pop.toast('something went wrong')
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

