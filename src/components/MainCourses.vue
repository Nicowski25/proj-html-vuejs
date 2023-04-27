<script>
export default {
    name: 'MainCourses'
}
</script>
<template>
    <div class="container w-75 p-0 py-5">
        <div class="containergrid">
            <div class="main">
                <img src="../assets/img/cat_1-1540x750.jpg">
                <div class="info">
                    <h5>Software Developement</h5>
                    <p>5 courses</p>
                </div>
            </div>
            <div class="side1">
                <img src="../assets/img/cat_2-544x322.jpg" height="138px" width="330px">
                <div class="info">
                    <h5>Software Developement</h5>
                    <p>5 courses</p>
                </div>
            </div>
            <div class="side2">
                <img src="../assets/img/cat_3-740x310.jpg">
                <div class="info">
                    <h5>Software Developement</h5>
                    <p>5 courses</p>
                </div>
            </div>
            <div class="side3">
                <img src="../assets/img/cat_4-740x310.jpg">
                <div class="info">
                    <h5>Software Developement</h5>
                    <p>5 courses</p>
                </div>
            </div>
            <div class="bot1">
                <img src="../assets/img/cat_5-740x310.jpg">
                <div class="info">
                    <h5>Software Developement</h5>
                    <p>5 courses</p>
                </div>
            </div>
            <div class="bot2">
                <img src="../assets/img/cat_6-740x310.jpg">
                <div class="info">
                    <h5>Software Developement</h5>
                    <p>5 courses</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.info {
    display: flex;
    justify-content: space-between;
}

img {
    max-width: 100%;
}

.containergrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px 15px;
    grid-auto-flow: row;
}

.main {
    grid-area: 1 / 1 / 3 / 3;
}

.side1 {
    grid-area: 1 / 3 / 2 / 4;
}

.side2 {
    grid-area: 2 / 3 / 3 / 4;
}

.side3 {
    grid-area: 3 / 3 / 4 / 4;
}

.bot1 {
    grid-area: 3 / 1 / 4 / 2;
}

.bot2 {
    grid-area: 3 / 2 / 4 / 3;
}

</style>