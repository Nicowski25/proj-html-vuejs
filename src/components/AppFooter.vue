<script>
import { blogs } from '../assets/data/blogArticles';
import ArticleComponent from './ArticleComponent.vue';
export default {
    name: 'AppFooter',
    components: {
        ArticleComponent
    },
    data() {
        return {
            blogs
        }
    },
    props: {
        article: Array
    }
}
</script>

<template>
    <div class="container">
        <div class="row py-4 justify-content-center">
            <!-- about col -->
            <div class="col-2">
                <strong>About</strong>
                <p class="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, repudiandae sint perspiciatis tempora
                    autem voluptate. Optio et sunt tempora vel?</p>
                <ul class="ls-none d-flex">
                    <li><font-awesome-icon icon="fa-brands fa-twitter" class="px-2"/></li>
                    <li><font-awesome-icon icon="fa-brands fa-instagram" class="px-2 "/></li>
                    <li><font-awesome-icon icon="fa-brands fa-behance" class="px-2"/></li>
                </ul>
            </div>
            <!-- contact col -->
            <div class="col-2">
                <strong>Contact</strong>
                <p class="pt-2">USA, California 20, First Avenue, <br> California</p>
                <ul class="ls-none py-2">
                    <li>Tel: +1 212 458 300 32</li>
                    <li>Fax: +1 212 375 21 14</li>
                </ul>
                <p class="email">info@masterstudy.com</p>
            </div>
            <!-- pages -->
            <div class="col-2">
                <strong>Pages</strong>
                <ul class="pt-2">
                    <li>Blog</li>
                    <li>Home</li>
                    <li>Shortcodes</li>
                    <li>Courses</li>
                    <li>Membership</li>
                    <li>Typography</li>
                </ul>
            </div>
            <!-- blog -->
            <div class="col-2">
                <strong>Blog</strong>
                <ArticleComponent v-for="article in blogs" :article="article"></ArticleComponent>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
.container {
    font-size: 0.8rem;
}
.ls-none {
    list-style: none;
}

.email {
    color: $dark-grey;
}

p {
    padding: 0;
    margin: 0;
}

ul {
    padding: 0;
}

</style>