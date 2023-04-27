<script>
import CourseComponent from './CourseComponent.vue';
export default {
    name: 'MainPopoularCourses',
    components: {
        CourseComponent
    }
}
</script>
<template>
    <div class="background">
        <div class="container pt-5 text-center">
            <h2 class="py-3">Popoular Courses</h2>
            <p>Discover our most popoular courses for self learning.</p>
        </div>
<!-- courses section -->
        <div class="container-fluid w-90 py-3">
            <div class="row row-cols-6 g-3 justify-content-between">

                <CourseComponent />
                <CourseComponent />
                <CourseComponent />
                <CourseComponent />
                <CourseComponent />
                <CourseComponent />

            </div>
        </div>
<!-- page buttons -->
        <div class="d-flex justify-content-center py-2">
            <button><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
            <button><font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
.background {
    background-color: $light-grey;
}

.w-90 {
    width: 90%;
}

button {
    color: $dark-grey;
    border: 1px solid $dark-grey;
    padding: 0.5rem 0.9rem;
}

</style>
