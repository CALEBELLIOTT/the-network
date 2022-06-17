
<template>
  <div class="row rounded elevation-3 bg-light mt-2 mb-5">
    <div class="col-3 p-2">
      <img class="img-fluid profile-img" :src="user.picture" alt="">
    </div>
    <div class="col-9 p-2">
      <form action="">
        <textarea class="form-control" placeholder="Share what's happening..." name="" id="" cols="30"
          rows="5"></textarea>
      </form>
    </div>
    <div class="col-12 text-end text-primary">
      <h3><i class="mdi mdi-send post-btn"></i></h3>
    </div>
  </div>
</template>


<script>
import { computed } from "vue"
import { AppState } from "../AppState"

export default {
  setup() {
    return {
      user: computed(() => AppState.user)
    }
  }
}
</script>


<style lang="scss" scoped>
.profile-img {
  height: 7rem;
  width: 7rem;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #B6D369;
}

.post-btn:hover {
  text-shadow: 0 0 10px #B6D369;
  cursor: pointer;
}
</style>
