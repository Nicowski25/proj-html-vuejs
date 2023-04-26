<script>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
export default {
    name: 'NavbarSection'
}
</script>
<template>
    <div class="border_bottom">
        <nav class="container d-flex align-items-center justify-content-between">
            <!-- left navbar -->
            <div class="d-flex align-items-center">
                <p class="m-0 px-2">English</p>
                <select name="English" id="site_language"></select>
            </div>
            <!-- right navbar -->
            <div class="d-flex">
                <ul class="ls-none d-flex m-0">
                    <li>Courses</li>
                    <li>Zoom</li>
                    <li>Pages</li>
                    <li>Bundles</li>
                    <li>Course Formats</li>
                    <li>Add Course</li>
                    <li>Demos</li>
                </ul>
                <ul class="icons d-flex ls-none m-0">
                    <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
                    <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
                    <li><font-awesome-icon icon="fa-brands fa-behance" /></li>
                    <li><font-awesome-icon icon="fa-brands fa-dribbble" /></li>
                    <li><font-awesome-icon icon="fa-brands fa-github" /></li>
                    <li><font-awesome-icon icon="fa-brands fa-linkedin" /></li>
                    <li><font-awesome-icon icon="fa-brands fa-pinterest" /></li>
                </ul>
            </div>
        </nav>
    </div>
</template>


<style lang="scss" scoped>
.border_bottom {
    border-bottom: 1px solid #aaaaaa;
}

.container {
    font-size: small;
    color: #8b8b8b;
}

.ls-none {
    list-style: none;
}

ul {
    align-items: center;

    li {
        padding: 1rem;
    }
}

.icons {
    li {
        padding-left: 0.4rem;
        padding-right: 0.4rem;
    }
}
</style>