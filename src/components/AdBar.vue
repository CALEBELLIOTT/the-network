
<template>
  <div class="row">
    <div class="col-12">
      <div class=" bg-light elevation-2 my-2 p-2 rounded">
        <p class="text-muted">Advertisements</p>
        <div v-for="a in ads">
          <p></p>
          <img class="img-fluid rounded" :src="a.square" alt="">
        </div>
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
      ads: computed(() => AppState.ads)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
