<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8">
        <EditAccountBar></EditAccountBar>
      </div>
      <div class="col-4">
        <AdBar></AdBar>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import AdBar from "../components/AdBar.vue"
export default {
  name: "Account",
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
  components: { AdBar }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
