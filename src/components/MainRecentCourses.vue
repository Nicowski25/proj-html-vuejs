<script>
import CourseComponent from './CourseComponent.vue'
export default {
    name: 'MainRecentCourses',
    components: {
        CourseComponent
    }
}
</script>
<template>
    <div class="container pt-5">
        <h2 class="text-center py-3">Recent Courses</h2>
        <ul class="list">
            <li>All Categories</li>
            <li>Art</li>
            <li>Exercise</li>
            <li>Material Design</li>
            <li>Music</li>
            <li>Photography</li>
            <li>Software Developement</li>
        </ul>
    </div>

    <div class="container-fluid w-90">
        <div class="row row-cols-6 g-3 justify-content-between">

            <CourseComponent />
            <CourseComponent />
            <CourseComponent />
            <CourseComponent />
            <CourseComponent />
            <CourseComponent />

        </div>
    </div>

    <div class="container text-center py-4">
        <button class="main-btn">SHOW ALL</button>
    </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;


.w-90 {
    width: 90%;
}
.list {
    list-style: none;
    display: flex;
    justify-content: center;

    li {
        color: $blue;
        padding: 1rem;
    }
}
</style>