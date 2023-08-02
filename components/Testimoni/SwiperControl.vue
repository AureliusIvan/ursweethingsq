<script setup lang="ts">
const swiper = useSwiper()
</script>
<template>
    <div class="testimoni__section__swipeControl">
        <button class="nextEl" >
            <svg @click="swiper.slideNext()" width="63" height="371" viewBox="0 0 63 371" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.75" d="M0 30C0 13.4315 13.4315 0 30 0H63V371H30C13.4315 371 0 357.569 0 341V30Z" fill="#FAFAFA"/>
                <path d="M26 167.5L40 185L26 202.5" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
</template>
<style lang="scss">
.testimoni__section__swipeControl {
    position: absolute;
    top: 75px;
    right: 0;
    // left:100%;
    z-index: 1;

    @media (max-width: 800px) {
        // width: 100vw;
        margin-right:auto;
    }
}
</style>