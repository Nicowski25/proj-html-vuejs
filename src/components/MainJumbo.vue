<script>
export default {
    name: 'MainJumbo'
}
</script>
<template>
    <div>
        <div class="container w-75 d-flex align-items-center py-4">
            <!-- main initial text -->
            <div>
                <h1 class="space-no-wrap">Start Investing in You</h1>
                <h6 class="py-3">With over 1200 courses in 18 subjects, you're guaranteed to find something that's right fot
                    you.</h6>
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
    </div>
</template>


<style lang="scss" scoped>

.space-no-wrap {
    white-space: nowrap;
    font-size: 3rem;
}
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

</style>