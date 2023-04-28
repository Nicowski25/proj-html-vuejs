<script>
export default {
    name: 'CourseComponent',
    props: {
        course: Object,
    }
}
</script>
<template>
    <div class="col">
        <div class="course">
            <img :src="`src/assets/img/${course.thumb}`">
            <div class="course-description">
                <p class="course-category"> {{ course.category }} ></p>
                <h6 class="course-name">{{ course.name }}</h6>
                <div class="price-time d-flex justify-content-between">
                    <p><font-awesome-icon icon="fa-solid fa-clock" /> {{ course.duration }}</p>
                    <p>{{ course.cost }}</p>
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
            font-size: 0.8rem;
        }

        h6 {
            overflow: hidden;
            text-overflow: ellipsis;
            height: 60px;
        }

        .price-time {
            border-top: 1px solid $light-grey;
            padding-top: 0.7rem;
        }
    }
}
</style>