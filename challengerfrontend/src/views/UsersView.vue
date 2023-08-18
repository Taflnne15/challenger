<template>
    <!-- <div class="container"> -->
<div class="row">
    <h2 class="display-2">Users</h2>
    <div class="container">
        <div class="row justify-content-center gap-3" v-if="users">
            <div v-for="user in users" class="card" style="width: 18rem;" :key="user.userID">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{user.firstname}}{{user.lastname}}</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary"></a>
                </div>
            </div>
        </div>
        <div v-else class="row justify-content-center gap-3">
            <SpinnerComp/>
        </div>
    </div>
</div>
    <!-- </div> -->
</template>
<script>
export default {
    computed: {
        users(){
            return this.$store.users
        }
    }, mounted(){
        this.$store.dispatch('fetchUsers')
    }
}

</script>
