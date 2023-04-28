<script>
export default {
    name: 'MainPlans'
}
</script>

<template>
    <div class="container-fluid w-90 py-5">
        <div class="row">
            <div class="col-6">
                <div class="plan d-flex">
                    <img src="../assets/img/image_box_1-221x231.png" alt="">
                    <div class="plan-info">
                        <h3>Become an Instructor</h3>
                        <p>Teach what you love. Masterstudy gives you the tools to create a course.</p>
                        <button class="main-btn">START TEACHING</button>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="plan d-flex">
                    <img src="../assets/img/image_box_2-234x231.png" alt="">
                    <div class="plan-info">
                        <h3>Setup For business</h3>
                        <p>Get unlimited access to 2,500 of Udemy's top courses for your team.</p>
                        <button class="main-btn">DOING BUSINESS</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
.w-90 {
    width: 90%;
}

.plan {
    border: 2px solid $light-grey;
    padding: 2rem 1rem;
    align-items: center;
    img {
        width: 60%;
    }
    .plan-info {
        padding-left: 1rem;
        padding-right: 1rem;
        p {
            font-size: 0.9rem;
        }
        button {
            font-size: 0.8rem;
        }
    }
}
</style>