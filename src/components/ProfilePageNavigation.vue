
<template>
  <div class="row text-secondary">
    <div class="col-12 d-flex justify-content-around align-items-center">
      <h3><i class="mdi mdi-chevron-triple-left nav-active"></i>
      </h3>
      <p>page: {{ currentPage }}</p>
      <h3><i class="mdi mdi-chevron-triple-right nav-active"></i></h3>
    </div>
  </div>
</template>


<script>
import { computed } from "vue"
import { AppState } from "../AppState"

export default {
  setup() {
    return {
      currentPage: computed(() => AppState.currentPage)
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
