<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import NavbarSection from './Navbar.vue';
export default {
    name: 'AppHeader',
    components: {
        FontAwesomeIcon,
        NavbarSection
    }
}
</script>

<template>
    <!-- navbar section -->
    <NavbarSection />
    <!-- header section -->
    <div class="container d-flex align-items-center justify-content-between py-2">
        <!-- logo -->
        <img src="../assets/img/MasterStudy_logo.svg" alt="" class="header-logo">
        <!-- category selector -->
        <div class="category-icon d-flex align-items-center px-3">
            <font-awesome-icon icon="fa-solid fa-bars" />
            <p class="m-0 p-0 px-2">CATEGORY</p>
        </div>
        <!-- searchbar -->
        <div class="input-group">
            <input type="text"  placeholder="Search courses" class="input-search py-2 px-2">
            <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></span>
        </div>
        <!-- buttons -->
        <div class="d-flex align-items-center">
            <font-awesome-icon icon="fa-solid fa-bullhorn" class="color-blue"/>
            <p>Become an Instructor</p>
            <font-awesome-icon icon="fa-solid fa-briefcase" class="color-blue"/>
            <p>For Enterprise</p>
        </div>
        <div class="d-flex align-items-center">
            <button class="secondary-btn">
                <font-awesome-icon icon="fa-regular fa-user"/>
                <p>Log In</p>
            </button>
            <button class="main-btn">
                <p>SIGN UP</p>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
.container {
    white-space: nowrap;
    font-size: 0.8rem;
}

.header-logo {
    padding-right: 1rem;
}

.category-icon {
    font-size: 0.7rem;
}

.color-blue {
    color: $blue;
}

p {
    margin: 0;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
}

.input-group-text {
    border-radius: 0;
    color: white;
    background-color: $blue;
    border: none;
}

.input-search {
    background-color: $light-grey;
    border: none;
}

</style>