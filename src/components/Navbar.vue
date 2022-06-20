<template>
  <nav class="navbar navbar-expand-lg navbar-dark gradient px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }" @click="resetPage()">
      <div class="d-flex align-items-center">
        <h2>The Network</h2>
        <img class="img-fluid logo ms-2" src="../assets/img/221-2212168_planeta-website-logo-png-green.png" alt="">
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import { AppState } from '../AppState';
import { postsService } from '../services/PostsService';

export default {
  setup() {
    return {
      async resetPage() {
        AppState.currentPage = 1
        postsService.getPosts()
      }
    };
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.logo {
  height: 3rem;
}

.gradient {
  background-image: linear-gradient(to right, #b6d369, #bac262, #bbb25d, #b8a35b, #b2945b);
}
</style>
