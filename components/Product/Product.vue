<!-- Ivan - 14 Juli 2023 -->
<script setup>
import { Product } from '@/data/productData'

const ProductData = computed(() => {
    return Product
})
</script>

<template>
    <section id="menu">
        <div id="Product">
            <div id="bg">
                <svg id="svg1" xmlns="http://www.w3.org/2000/svg" width="976" height="1531" viewBox="0 0 976 1531"
                    fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M96.4021 2.90053C348.926 45.9059 193.153 421.822 375.92 568.779C510.193 676.744 799.353 544.559 918.214 663.696C1031.04 776.778 954.186 951.238 893.948 1088.01C834.949 1221.96 742.455 1357.6 584.676 1420.99C435.268 1481.02 262.711 1396.9 96.4021 1408.46C-95.4064 1421.78 -328.916 1609.22 -457.092 1493.38C-598.65 1365.45 -306.724 1164.48 -357.734 998.025C-402.028 853.483 -730.148 815.713 -710.12 667.702C-691.591 530.762 -403.892 554.786 -284.435 456.32C-122.162 322.561 -130.634 -35.7642 96.4021 2.90053Z"
                        fill="#B0E9EA" />
                </svg>
                <svg id="svg2" xmlns="http://www.w3.org/2000/svg" width="1129" height="1134" viewBox="0 0 1129 1134"
                    fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M953.584 1.81063C1072.39 15.4369 1193.78 58.5693 1270.53 150.279C1356.47 252.974 1439.61 399.037 1390.15 523.463C1339.59 650.665 1126.74 614.965 1042.82 723.11C935.678 861.195 957.737 1000.97 802.624 1081.53C660.224 1155.49 537.942 1155.68 420.461 1046.36C302.981 937.04 518.996 724.398 449.761 600.165C375.881 467.598 -53.9803 442.51 6.33248 303.261C74.2816 146.38 325.249 220.078 487.945 167.518C558.222 144.814 617.443 108.118 687.021 83.3572C776.757 51.4226 858.95 -9.04297 953.584 1.81063Z"
                        fill="#B0E9EA" />
                </svg>
            </div>
            <div id="Main_title">
                <h1>
                    What we serve
                </h1>
                <h2>
                    Mulai dari mochi bites yang kenyal sampai beragam variasi cheese-kies yang menyegarkan
                </h2>
            </div>
            <div id="list">
                <ProductCard v-for="item in ProductData" :title="item.title" :image="item.image" :desc="item.desc"
                    :price="item.price" :size="item.size" />
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
#Product {
    width: 100%;
    height: max-content;
    background-color: #f5f5f5;
    position: relative;
    padding-block: 5rem;
    overflow: hidden;

    @media screen and (max-width: 800px) {
        padding-block: 1rem;
    }

    #bg {
        position: absolute;
        isolation: isolate;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: block;

        @media screen and (max-width: 800px) {
            display: none;
        }

        #svg1 {
            position: absolute;
            left: -10%;
            top: 0%;
            z-index: 1;
        }

        #svg2 {
            position: absolute;
            right: -20%;
            bottom: 5%;
        }
    }

    #Main_title {
        isolation: isolate;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-block: 5rem;

        @media screen and (max-width: 800px) {
            padding-block: 1rem;
        }

        h1 {
            align-self: stretch;
            color: #191D23;
            text-align: center;
            font-family: Carter One;
            font-size: 4rem;
            font-style: normal;
            font-weight: 400;

            @media screen and (max-width: 800px) {
                font-size: 2rem;
            }
        }

        h2 {
            width: 50%;
            color: #75797F;
            text-align: center;
            font-family: Ubuntu;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            /* 2.1rem */
            letter-spacing: 0.03rem;

            @media screen and (max-width: 800px) {
                width: 90%;
                font-size: 1rem;
            }
        }

    }


    #list {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 1.5rem;
        padding-inline: 15rem;

        @media screen and (max-width: 1200px) {
            padding-inline: 5rem;
            grid-template-columns: auto auto;
        }

        @media screen and (max-width: 650px) {
            padding-inline: 1rem;
            grid-template-columns: auto;
            justify-content: center;
        }

        @media screen and (max-width: 450px) {
            padding-inline: 10%;
            grid-template-columns: auto;
        }
    }
}
</style>