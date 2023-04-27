<script>
export default {
    name: 'MainNewsletter'
}
</script>
<template>
    <div class="background">
        <div class="container w-75 d-flex py-5">
            <div class="row justify-content-between">
                <div class="col-6">
                    <div class="text">
                        <h5>Subscribe to our newsletter</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis adipisci amet magni dolore,
                            eaeligendi.</p>
                    </div>
                </div>
                <div class="col-6">
                    <div class="mail">
                        <h6>YOUR EMAIL ADDRESS</h6>
                        <div class="input-group">
                            <input type="text" placeholder="Enter your E-mail" class="input-search py-2 px-2">
                            <span class="input-group-text">SUBSCRIBE</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

.background {
    background-color: $green;
}

.container {
    color: $white;
    font-size: 0.9rem;
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