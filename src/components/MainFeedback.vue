<script>
export default {
    name: 'MainFeedback'
}
</script>
<template>
    <div class="background">
        <div class="feedback">
            <h3>Come as you are</h3>
            <p class="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente consectetur officia optio
                molestias maiores id. Nostrum delectus optio vel aliquam, ipsam repellendus temporibus eaque laudantium
                perspiciatis, pariatur enim eius! Culpa, dicta. Atque necessitatibus delectus ad, quasi labore a recusandae
                dolorum?</p>
            <strong>Tim Sab</strong>
            <p>General Developer, Stylemix Themes</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

.background {
    background-image: url('../assets/img/brooke-cagle-224821-unsplash-1-1920x700.jpg');
    background-size: cover;
    padding: 2rem 10rem;
}

.feedback {
    width: 40%;
    height: 75%;
    padding: 2rem;
    background-color: $white;
}</style>