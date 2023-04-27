<script>
export default {
    name: 'MainOnlineLearning'
}
</script>
<template>
    <div class="container-fluid d-flex py-6">
        <div class="container w-75 p-0">
            <h2>Limitless learning, more possibilities</h2>
            <p class="py-3">Online courses open the opportunity for learning to almost anyone, <br> regardless of their scheduling commitments</p>
            <button class="main-btn">READ MORE</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
.container-fluid {
    background-color: $light-grey;
    background-image: url('../assets/img/Untitled-1-1-1-1-1.png');
    background-position: center;
    background-size: cover;
}

.py-6 {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

</style>