<script setup>
import bgImage from "@/assets/assets/images/hero-bg.svg";
import bgleft from "@/assets/assets/images/hero-left.svg";
import bgright from "@/assets/assets/images/hero-right.svg";
import mochiLove from "@/assets/assets/images/mochi-love.svg";
</script>

<template>
    <div id="HeroSection">
        <div id="bg">
            <!-- <img class="bg-main" :src="bgImage" alt="hero-bg" border="0"> -->
            <div id="bg-main"></div>
            <div id="bg-item-container">
                <img class="bg-item left" :src="bgleft" alt="">
                <img class="bg-item right" :src="bgright" alt="">
            </div>
        </div>
        <div id="content">
            <h1 id="main-title" v-motion-slide-visible-bottom>
                <span id="row_1">Your favorite</span>
                <span id="row_2"><span class="sweets">sweets</span> made</span>
                <span id="row_3">
                    with <span class="sweets bottom">L<span><img :src="mochiLove" alt=""></span>ve</span></span>
            </h1>
            <div id="creator">
                <span id="creator_instagram">@ursweetingsq</span>
                <span class="creator_name ">by qinthara</span>
            </div>
            <p id="desc" v-motion-slide-visible-bottom>
                Nikmati makanan manis kami yang akan menggugah selera dan meningkatkan moodmu sepanjang hari! Temukan
                kelezatan ini sekarang dengan cara <b>PRE-ORDER</b> lewat DM Instagram!
            </p>
            <div id="cta">
                <a href="#menu">
                    <button class="cta_btn left">Lihat Menu
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="21" viewBox="0 0 14 21" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.67666 20.7188L0 19.2302L9.83349 10.5L0 1.7698L1.67666 0.28125L13.1868 10.5L1.67666 20.7188Z"
                                fill="#FAFAFA" />
                        </svg>
                    </button>
                </a>
                <a href="http://" target="_blank">
                    <a href="https://www.instagram.com/ursweethingsq/" target="_blank" class="cta_btn">Order Sekarang
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                            <path
                                d="M18.3 5.79998L9.3 0.599978C8.4 -2.15173e-05 7.2 0.699978 7.2 1.79998V4.19998C7.2 4.99998 6.6 5.59998 5.8 5.59998H1.4C0.6 5.59998 0 6.19998 0 6.99998C0 7.79998 0.6 8.39998 1.4 8.39998H5.8C6.6 8.39998 7.2 8.99998 7.2 9.79998V12.2C7.2 13.3 8.4 14 9.3 13.4L18.3 8.19998C19.3 7.69998 19.3 6.29998 18.3 5.79998Z"
                                fill="#FAFAFA" />
                        </svg>
                    </a>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#HeroSection {
    min-height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: baseline;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    #bg {
        width: 100%;
        height: 100%;
        isolation: isolate;
        position: absolute;
        top: -12%;
        z-index: -1;
        overflow: hidden;

        #bg-main {
            left: 0%;
            right: 0%;
            top: 0%;
            margin: auto;
            border-radius: 148.8125rem;
            background: #FBBBC2;
            position: absolute;
            width: 100%;
            height: 200%;
            object-fit: cover;
            transform: translateY(-50%);

            @media screen and (max-width: 800px) {
                width: 100%;
                height: 130%;
                transform: translateY(-30%);

            }
        }


        #bg-item-container {
            position: relative;
            height: 50%;
            animation: float 1.2s infinite alternate ease-in-out;

            @keyframes float {
                0% {
                    transform: translateY(0%);
                }

                100% {
                    transform: translateY(20px);
                }
            }

            .bg-item {
                position: absolute;
                object-fit: cover;


                &.left {
                    top: 0;
                    left: 0;
                    height: 25rem;
                    width: fit-content;
                    overflow: visible;
                    transform: translateY(50%) translateX(-20%) scale(0.8);

                    @media screen and (max-width: 1000px) {
                        transform: translateY(50%) translateX(-20%) scale(0.8);
                    }

                    @media screen and (max-width: 800px) {
                        transform: translateY(80%) translateX(-30%) scale(0.5);
                    }

                    @media screen and (max-width: 500px) {
                        transform: translateY(80%) translateX(-50%) scale(0.3);
                    }
                }

                &.right {
                    top: 0%;
                    right: 0%;
                    height: 25rem;
                    transform: translateY(50%) translateX(20%) scale(0.8);

                    @media screen and (max-width: 1000px) {
                        transform: translateY(50%) translateX(20%) scale(0.8);
                    }

                    @media screen and (max-width: 800px) {
                        transform: translateY(80%) translateX(30%) scale(0.5);
                    }

                    @media screen and (max-width: 400px) {
                        transform: translateY(80%) translateX(40%) scale(0.3);
                    }
                }
            }
        }

    }

    #content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        #main-title {
            width: 50rem;
            color: #67002B;
            text-align: center;
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: Carter One;
            font-size: 6.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 6.875rem;
            /* 100% */
            letter-spacing: -0.3125rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin-bottom: 0px;


            @media screen and (max-width: 1100px) {
                font-size: 4rem;
                line-height: 3.3125rem;
                letter-spacing: -0.1125rem;
                width: 100%;
                padding: 0 1rem;
            }

            @media screen and (max-width: 600px) {
                font-size: 2.5rem;
                line-height: 3.3125rem;
                letter-spacing: -0.1125rem;
                width: 100%;
                padding: 0 1rem;
            }

            #row_1 {
                width: 100%;
                text-align: center;
            }

            #row_2 {
                width: 100%;
                text-align: center;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 0.625rem;
            }

            #row_3 {
                width: 100%;
                text-align: center;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 0.625rem;
            }

            .sweets {
                color: #FAFAFA;
                display: inline;

                &.bottom {
                    width: fit-content;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;

                    img {
                        @media screen and (max-width: 800px) {
                            width: 2rem;
                            height: 2rem;
                        }
                    }
                }
            }

        }

        #desc {
            color: #67002B;
            text-align: center;
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: 'Ubuntu';
            font-size: 1.3rem;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;
            /* 2.25rem */
            letter-spacing: 0.045rem;
            width: 50rem;
            margin-bottom: 10px;


            @media screen and (max-width: 800px) {
                font-size: 0.9rem;
                line-height: normal;
                letter-spacing: 0.045rem;
                width: 100%;
                padding: 0 1rem;
            }
        }
    }


    #creator {
        border-radius: 0.9375rem;
        background: rgba(247, 132, 149, 0.35);
        color: #FAFAFA;
        font-family: Ubuntu;
        font-size: 0.8125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        /* 215.385% */
        letter-spacing: 0.0625rem;
        text-transform: uppercase;
        padding: 0;
        display: flex;
        flex-direction: row;
        height: fit-content;
        width: fit-content;
        align-items: center;
        justify-content: center;
        gap: 0.625rem;
        height: 2rem;
        margin-bottom: 40px;

        @media screen and (max-width: 800px) {
            transform: scale(0.5);
        }

        #creator_instagram {
            border-radius: 0.9375rem;
            background: #F78495;
            display: flex;
            padding-inline: 0.625rem;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
        }

        .creator_name {
            padding: 0.5625rem 0.625rem;
            border-radius: 0.9375rem;
        }
    }

    #cta {
        display: flex;
        flex-direction: row;
        margin: 1rem 0;

        @media screen and (max-width: 800px) {
            flex-direction: column;
            gap: 1rem;
        }

        .cta_btn {
            color: #FAFAFA;
            padding: 1rem 2rem;
            color: #FAFAFA;
            font-family: Ubuntu;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            text-transform: capitalize;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 0.625rem;
            width: max-content;

            @media screen and (max-width: 800px) {
                padding: 0.6rem 1rem;
                font-size: 0.8rem;
            }


            &:hover {
                filter: brightness(0.5);
            }

            &.left {
                width: 100%;
                border-radius: 2.5rem;
                background: #67002B;
            }


        }
    }
}
</style>