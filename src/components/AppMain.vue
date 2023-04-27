<script>
import MainJumbo from './MainJumbo.vue';
import MainPerks from './MainPerks.vue';
import MainCourses from './MainCourses.vue';
import MainOnlineLearning from './MainOnlineLearning.vue';
import MainRecentCourses from './MainRecentCourses.vue';


export default {
    name: 'AppMain',
    components: {
        MainJumbo,
        MainPerks,
        MainCourses,
        MainOnlineLearning,
        MainRecentCourses,
    }
}
</script>
<template>

        <!-- big image and main text -->
        <mainJumbo/>
        <!-- cards -->
        <mainPerks/>
        <!-- main courses -->
        <MainCourses/>
        <!-- section w100% limitless online learning -->
        <MainOnlineLearning/>
        <!-- recent courses section -->
        <MainRecentCourses/>
</template>


<style lang="scss" scoped>



</style>