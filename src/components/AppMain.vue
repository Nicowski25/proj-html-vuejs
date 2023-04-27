<script>
import MainJumbo from './MainJumbo.vue';
import MainPerks from './MainPerks.vue';
import MainCourses from './MainCourses.vue';
import MainOnlineLearning from './MainOnlineLearning.vue';
import MainRecentCourses from './MainRecentCourses.vue';
import MainStatistics from './MainStatistics.vue';

export default {
    name: 'AppMain',
    components: {
        MainJumbo,
        MainPerks,
        MainCourses,
        MainOnlineLearning,
        MainRecentCourses,
        MainStatistics,
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
        <!-- sstatistics section -->
        <MainStatistics/>
        <!-- newsletter section -->
</template>


<style lang="scss" scoped>



</style>