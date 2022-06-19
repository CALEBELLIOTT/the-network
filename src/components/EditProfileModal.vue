<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Edit Profile Info
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-body">

          <form action="">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 bg-primary m-0">
                  <h2 class="m-2">Edit Profile</h2>
                </div>
                <div class="col-12">
                  <div class="row d-flex flex-column justify-content-end">
                    <div class="col-4">
                      <input type="text" class="form-control">
                      <p>Cover Img Url</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from 'vue'
import { AppState } from '../AppState'


export default {

  setup() {
    return {
      user: computed(() => AppState.user)
    }
  }
}
</script>



<style>
</style>