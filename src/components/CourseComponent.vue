<script>
export default {
    name: 'CourseComponent'
}
</script>
<template>
    <div class="col">
        <div class="course">
            <img src="../assets/img/photo-1461749280684-dccba630e2f6-544x322.jpeg">
            <div class="course-description">
                <p class="course-category">Apache ></p>
                <h5 class="course-name">Web Coding and Apache Basics</h5>
                <div class="price-time d-flex justify-content-between">
                    <p><font-awesome-icon icon="fa-solid fa-clock" /> 6 hours</p>
                    <p>Free</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

.course {   
    border: 1px solid $dark-grey;
    padding: 0;
    img {
        width: 100%;
    }
    .course-description {
        padding: 1rem;
        .course-category {
            color: $dark-grey;
        }
        .price-time {
            border-top: 1px solid $light-grey;
            padding-top: 0.7rem;
        }
    }
}



</style>