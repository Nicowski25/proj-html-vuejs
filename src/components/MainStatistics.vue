<script>
export default {
    name: 'MainStatistics'
}
</script>
<template>
    <div class="background">
        <div class="container text-center py-5">
            <h2>We Are Proud</h2>
            <p class="py-3">Certificate courses are instructed by highly educated and qualified instructors who hold 
            <br> doctoral and master's level degrees. 
            </p>
            <div class="d-flex justify-content-center mb-6">
                <div class="statistic border-r">
                    <p class="big-number">2000</p>
                    <h6>STUDENTS</h6>
                </div>
                <div class="statistic border-r">
                    <p class="big-number">950</p>
                    <h6>COURSES</h6>
                </div>
                <div class="statistic border-r">
                    <p class="big-number">1600</p>
                    <h6>HOURS VIDEO</h6>
                </div>
                <div class="statistic">
                    <p class="big-number">150</p>
                    <h6>COUNTRIES REACHED</h6>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

.background {
    background-color: $light-grey;
    background-image: url('../assets/img/we_proud.png');
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
}
.border-r {
    border-right: 1px solid $dark-grey;
}
.statistic {
    padding: 2rem;
    .big-number {
        font-size: 3.5rem;
    }
    h6 {
        color: $dark-grey;
    }
}

.mb-6 {
    margin-bottom: 5rem;
}

</style>