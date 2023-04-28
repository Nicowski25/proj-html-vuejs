<script>
import { courses } from '../assets/data/courses';
import CourseComponent from './CourseComponent.vue'
export default {
    name: 'MainRecentCourses',
    data() {
        return {
            courses
        }
    },
    components: {
        CourseComponent
    },
    props: {
        course: Array,
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

            <CourseComponent v-for="course in courses" :course="course"></CourseComponent>

        </div>
    </div>

    <div class="container text-center py-6">
        <button class="main-btn">SHOW ALL</button>
    </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
.w-90 {
    width: 95%;
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
.py-6 {
    padding-top: 4rem;
    padding-bottom: 4rem;
}
</style>