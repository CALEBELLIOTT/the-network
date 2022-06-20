
<template>
    <form @submit.prevent="editProfile()" action="">
        <div class="row bg-light rounded">
            <div class="col-12 bg-secondary rounded-top">
                <h3 class="p-2">Edit Profile</h3>
            </div>
            <div class="col-12 background">
                <div class="row">
                    <div class="col-md-8 p-2"></div>
                    <div class="col-md-4 p-2 " id="">
                        <input v-model="data.coverImg" type="text" class="form-control" placeholder="url...">
                        <label class="mb-5 pb-5 text-shadow" for="">Cover Img-Url</label>
                    </div>
                </div>
            </div>
            <div class="col-md-4 p-2 d-flex flex-column">
                <img class="img-fluid profile-img-edit" :src="account.picture" alt="">
                <p class="translate-y mt-2">{{ account.name }}</p>
            </div>
            <div class="col-md-4 p-2">
                <label for="">github</label>
                <input v-model="data.github" class="form-control" type="text" placeholder="url...">
            </div>
            <div class="col-md-4 p-2">
                <label for="">linkedIn</label>
                <input v-model="data.linkedin" class="form-control" type="text" placeholder="url...">
            </div>
            <div class="col-md-3 p-2 translate-y">
                <label for="">Profile Img</label>
                <input v-model="data.picture" class="form-control" type="text" placeholder="url...">
            </div>
            <div class="col-md-3 translate-y p-2">
                <label for="">Class</label>
                <input v-model="data.class" class="form-control" type="text" placeholder="Class Attended..">
            </div>
            <div class="col-md-3 translate-y p-2 d-flex flex-column align-items-center">
                <label for="">Graduated?</label>
                <input v-model="data.graduated" class="justify-self-center" type="checkbox"
                    placeholder="Class Attended...">
            </div>
            <div class="col-md-3 translate-y p-2 d-flex flex-column">
                <label for="">resume</label>
                <input v-model="data.resume" class="form-control" type="text" placeholder="url...">
            </div>
            <div class="col-12">
                <label for="">Bio</label>
                <textarea v-model="data.bio" placeholder="Tell us about yourself..." class="form-control" name="" id=""
                    cols="30" rows="5"></textarea>
            </div>
            <div class="col-12">
                <button type="submit" class="edit-submit-btn">
                    <h1 class="text-secondary"><i class="mdi mdi-check submit-check"></i></h1>
                </button>
            </div>
        </div>
    </form>


</template>


<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState';
import { accountService } from '../services/AccountService';


export default {
    setup() {
        const data = ref({})
        onMounted(async () => {
        })
        return {
            account: computed(() => AppState.activeProfile),
            data,
            async editProfile() {
                console.log(data.value);
                await accountService.editProfile(data.value, AppState.activeProfile.id)
            }
        }
    }
}
</script>


<style>
.profile-img-edit {
    height: 8rem;
    width: 8rem;
    /* object-fit: contain; */
    border-radius: 50%;
    transform: translateY(-3rem);
    border: 2px solid #B6D369;
}

.translate-y {
    transform: translateY(-3rem);
}

@media (max-width: 768px) {
    .profile-img-edit {
        transform: none;
    }

    .translate-y {
        transform: none;
    }
}

.background {
    background-image: url('https://www.duckrace.com/portals/130/images/1.jpg');
}

.edit-submit-btn {
    background: none;
    padding: 0px;
    border: none;
}

.submit-check:hover {
    cursor: pointer;
    text-shadow: 0 0 10px #B6D369;
}

.text-shadow {
    text-shadow: 1px 1px 0 white;
}
</style>

