
<template>
    <div class="row d-flex justify-content-end">
        <div class="col-4">
            <form action="" class="d-flex align-items-center">
                <button class="search-btn">
                    <h3><i class="mdi mdi-magnify text-primary m-2 search"></i></h3>
                </button>
                <input type="text" class="form-control">
            </form>
        </div>
    </div>
</template>


<script>
export default {
    setup() {
        return {}
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
