<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-custom">
    <router-view />
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.bg-custom {
  background-color: rgb(222, 222, 222);
}
</style>
