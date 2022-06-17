
<template>
  <div class="component">


  </div>
</template>


<script>
import { onMounted } from "vue"
import { useRoute } from "vue-router"
import { api } from "../services/AxiosService"
import { profilesService } from "../services/ProfilesService"
import Pop from "../utils/Pop"

export default {
  setup() {
    onMounted(async () => {
      try {
        await profilesService.setActiveProfile(route.params.id)
      } catch (error) {
        console.error(error)
        Pop.toast(error.message)
      }
    })
    const route = useRoute()
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>
