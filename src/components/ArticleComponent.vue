<script>
export default {
    name: 'ArticleComponent',
    props: {
        article: Object,
    }
}
</script>

<template>
    <div class="article pt-2">
        <img :src="`src/assets/img/${article.thumb}`">
        <div class="article-description">
            <p> {{ article.title }} </p>
            <p class="date"> {{ article.date }} </p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
.article {
    display: flex;
    img {
        height: 60%;
        padding-right: 0.5rem;
    }
    .date {
        color: $dark-grey;
    }
}

p {
    padding: 0;
    margin: 0;
}
</style>