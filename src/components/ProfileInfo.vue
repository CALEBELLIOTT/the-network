
<template>
  <div class="component">
    <div class="row py-2 mt-2 rounded-top banner-img" :style="`background-image: url(${profile.coverImg});`">
    </div>
    <div class="row bg-light rounded-bottom">
      <div class="col-12 translate">
        <div class="d-flex justify-content-between">
          <img class="profile-img" :src="profile.picture" alt="">
          <div class="text-primary">
            <h2>
              <a :href="profile.github"><i class="mdi mdi-github selectable"></i></a>
              <a :href="profile.linkedin"><i class="mdi mdi-linkedin selectable"></i></a>

              <a :href="profile.resume"><i class="mdi mdi-notebook selectable"></i></a>
            </h2>
          </div>
        </div>
        <p class="p-0 m-0">{{ profile.class }}</p>
        <h4 class="pt-2"><u>{{ profile.name }}</u> <i class="mdi mdi-school" v-if="profile.graduated"></i></h4>
        <p>{{ profile.bio }}</p>
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
      profile: computed(() => AppState.activeProfile)
    }
  }
}
</script>


<style lang="scss" scoped>
.banner-img {
  height: 15vh;
}

.profile-img {
  height: 7rem;
  width: 7rem;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #B6D369;
}

.translate {
  transform: translateY(-3em);
}
</style>
