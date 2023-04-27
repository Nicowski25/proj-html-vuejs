<script>
import MainJumbo from './MainJumbo.vue';
import MainPerks from './MainPerks.vue';
import MainCourses from './MainCourses.vue';
import MainOnlineLearning from './MainOnlineLearning.vue';

export default {
    name: 'AppMain',
    components: {
        MainJumbo,
        MainPerks,
        MainCourses,
        MainOnlineLearning
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

</template>


<style lang="scss" scoped>



</style>