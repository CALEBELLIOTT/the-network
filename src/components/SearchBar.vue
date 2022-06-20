
<template>
    <div class="row d-flex justify-content-end">
        <div class="col-md-4">
            <form @submit.prevent="search(data)" action="" class="d-flex align-items-center">
                <button class="search-btn">
                    <h3><i class="mdi mdi-magnify text-primary m-2 search"></i></h3>
                </button>
                <input type="text" class="form-control" placeholder="filter..." v-model="data.query">
            </form>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Pop'

export default {
    setup() {
        const data = ref({})
        return {
            data,
            async search(data) {
                try {
                    await postsService.search(data)
                } catch (error) {
                    Pop.toast(error.message, "error")
                    console.error(error)
                }
            }
        }
    }
}
</script>


<style>
.search-btn {
    background: none;
    padding: 0px;
    border: none;
}

.search:hover {
    cursor: pointer;
    text-shadow: 0 0 10px #B6D369;
}
</style>
