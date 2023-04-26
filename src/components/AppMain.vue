<script>
export default {
    name: 'AppMain'
}
</script>
<template>


    <section>
        <div class="container w-75 d-flex align-items-center py-4">
            <!-- main initial text -->
            <div>
                <h1>Start Investing in You</h1>
                <h6 class="py-3">With over 1200 courses in 18 subjects, you're guaranteed to find something that's right fot you.</h6>
                <button class="main-btn">JOIN FOR FREE</button>
            </div>
            <!-- main initial images -->
            <div class="base-img">
                <img src="../assets/img/base.png">
                <div>
                    <img src="../assets/img/book1.png" class="book1">
                    <img src="../assets/img/book2.png" class="book2">
                </div>
            </div>
        </div>

        <!-- cards -->
        <div class="container w-75 py-3">
            <div class="row" style="gap: 1rem;">
                <div class="col cards">
                    <font-awesome-icon class="fs-1" color="#005b96" icon="fa-solid fa-earth-americas" />
                    <h5>Worldwide recognize</h5>
                    <p>Our online course certificates can be used around the world and also in most popular universities and companies.</p>
                </div>

                <div class="col cards">
                    <font-awesome-icon class="fs-1" color="#005b96" icon="fa-solid fa-desktop" />
                    <h5>Mostly Online Learning (sd)</h5>
                    <p>Masterstudy online certificates can be obtained in a range of specialized areas and typically take about a year to complete.</p>
                </div>

                <div class="col cards">
                    <font-awesome-icon class="fs-1" color="#005b96" icon="fa-solid fa-calendar-check" />
                    <h5>Graduate in as little as 1 Year</h5>
                    <p>Online post-graduate certificates are a popular way to develop your professional qualifications of Masterstudy.</p>
                </div>
            </div> 
        </div>            
            
            
            
    </section>

</template>


<style lang="scss" scoped>

.base-img {
    position: relative;
    .book1 {
        position: absolute;
        bottom: 185px;
        right: 30px;
    }
    .book2{
        position: absolute;
        bottom: 40px;
        right: 145px;
    }
}

.cards {
    background-color: #b3b3b354;
    padding: 1.5rem;
    h5 {
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
    }
    p {
        color: #696969b2;
    }
}

</style>