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
            <div v-if="course.hot == true">
                <p class="hot">HOT</p>
            </div>
            <div v-if="course.special == true">
                <p class="special">SPECIAL</p>
            </div>
            <div v-if="course.new == true">
                <p class="new">NEW</p>
            </div>
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
    position: relative;

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

.course:hover {
    border: 1px solid $yellow;
}

.hot {
    color: $white;
    background-color: $red;
    position: absolute;
    top: 10px;
    right: 0px;
    font-size: 0.8rem;
    padding: 0rem 0.4rem;
}

.special {
    color: $white;
    background-color: $yellow;
    position: absolute;
    top: 10px;
    right: 0px;
    font-size: 0.8rem;
    padding: 0rem 0.4rem;
}

.new {
    color: $white;
    background-color: $green;
    position: absolute;
    top: 10px;
    right: 0px;
    font-size: 0.8rem;
    padding: 0rem 0.4rem;
}
</style>