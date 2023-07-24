<!-- ivan - 14 Juli 2023 -->
<script setup lang="ts">
import Placeholder from '@/data/images/placeholder.png';

const props = defineProps({
    image: {
        type: String,
        default: Placeholder
    },
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    link: {
        type: String,
        default: 'https://www.instagram.com/ursweethingsq/'
    },
    price: {
        type: String,

    },
    size: {
        type: String,
    }
});


const modalOpen = ref(false);
const status = ref(false);
const title = props.title;

if (title) {
    status.value = true;
}

const toogleModal = () => {
    modalOpen.value = !modalOpen.value;
}


</script>

<template>
    <div id="Card">
        <div id="Card_image" v-motion-slide-visible-bottom>
            <img id="Main_image" :src="image" alt="">
        </div>
        <div id="Content">
            <div id="text">
                <h1 :class="!status ? 'opacity-50' : ''">{{ title ? title : "Coming Soon" }}</h1>
                <p :class="!status ? 'opacity-50' : ''">
                    {{ desc ? desc : "Jangan khawatir, menu-menu lezat lainnya sedang dalam proses pembuatan" }}</p>
            </div>
            <button :disabled="!status" id="modal_btn" @click="toogleModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M15.0625 15.0625L15.1274 15.0308C15.3304 14.9294 15.5583 14.8883 15.784 14.9123C16.0096 14.9364 16.2237 15.0246 16.4008 15.1665C16.5779 15.3085 16.7106 15.4982 16.7832 15.7132C16.8558 15.9283 16.8653 16.1596 16.8105 16.3798L15.6895 20.8702C15.6343 21.0905 15.6435 21.3221 15.7159 21.5374C15.7884 21.7527 15.921 21.9427 16.0982 22.0848C16.2754 22.227 16.4896 22.3154 16.7155 22.3395C16.9414 22.3636 17.1694 22.3224 17.3726 22.2208L17.4375 22.1875M30.5 16.25C30.5 18.1213 30.1314 19.9743 29.4153 21.7032C28.6992 23.4321 27.6495 25.003 26.3263 26.3263C25.003 27.6495 23.4321 28.6992 21.7032 29.4153C19.9743 30.1314 18.1213 30.5 16.25 30.5C14.3787 30.5 12.5257 30.1314 10.7968 29.4153C9.06787 28.6992 7.49696 27.6495 6.17373 26.3263C4.85049 25.003 3.80085 23.4321 3.08472 21.7032C2.36859 19.9743 2 18.1213 2 16.25C2 12.4707 3.50133 8.84612 6.17373 6.17373C8.84612 3.50134 12.4707 2 16.25 2C20.0293 2 23.6539 3.50134 26.3263 6.17373C28.9987 8.84612 30.5 12.4707 30.5 16.25ZM16.25 10.3125H16.2627V10.3252H16.25V10.3125Z"
                        stroke="#B0E9EA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <div id="modal" v-if="modalOpen === true">
                <button @click="toogleModal">
                    <div class="flex justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                            <path
                                d="M11 19.5L15.25 15.25M15.25 15.25L19.5 11M15.25 15.25L11 11M15.25 15.25L19.5 19.5M29.5 15.25C29.5 23.1201 23.1201 29.5 15.25 29.5C7.37994 29.5 1 23.1201 1 15.25C1 7.37994 7.37994 1 15.25 1C23.1201 1 29.5 7.37994 29.5 15.25Z"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span id="title">Info lengkap {{ title }}</span>
                        <span class="opacity-0">p</span>
                    </div>
                    <br>
                    <p>
                        {{ desc }}
                    </p>
                </button>
            </div>

            <div id="cta">
                <div id="price_container">
                    <span id="price"> {{ price }}</span>
                    <span :class="!status ? 'opacity-0' : ''" id="size">({{ size }})</span>
                </div>
                <a :href="link">
                    <button :disabled="!status">Order Now</button>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#Card {
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 3rem;
    background-color: rgba(250, 250, 250, 1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;


    #Card_image {
        overflow: hidden;

        #Main_image {
            width: 100%;
            height: 300px;
            transition: all 0.3s ease-in-out;
            object-fit: cover;

            &:hover {
                transform: scale(1.2);
            }

            @media screen and (max-width: 768px) {
                height: 200px;
            }
        }
    }


    #Content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        padding: 1.5rem;

        #text {
            display: flex;
            flex-direction: column;
            gap: 10px;

            h1 {
                color: #191D23;
                font-family: Ubuntu;
                font-size: 1.75rem;
                font-style: normal;
                font-weight: 700;
                line-height: 1.96756rem;
                /* 112.431% */
            }

            p {
                overflow: hidden;
                color: #75797F;
                text-overflow: ellipsis;
                font-family: Ubuntu;
                font-size: 0.9375rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1.5625rem;
                /* 166.667% */
                display: -webkit-box;
                -webkit-line-clamp: 3;
                /* number of lines to show */
                line-clamp: 3;
                -webkit-box-orient: vertical;
                height: 4.6875rem;
            }
        }

        #modal_btn {
            margin-block: 10px;
            transition: filter 0.2s ease-in-out;

            &:hover {
                cursor: pointer;
                filter: brightness(0.8);
            }

            &:disabled {
                filter: contrast(0.5);
                opacity: 0.3;
                cursor: not-allowed;
            }
        }

        #modal {
            transition: all 0.3s ease-in-out;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 80%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 2;
            display: flex;
            flex-direction: column;
            gap: 10px;
            color: white;
            font-size: 2rem;
            font-weight: 700;
            font-family: Ubuntu;
            padding: 20px;
            padding-inline: 30px;
            text-align: center;
            background-color: #191D23;
            display: flex;
            border-radius: 20px;
            transform: scale(0.9);
            overflow: auto;

            #title {
                color: #FFF;
                font-family: Ubuntu;
                font-size: 1.5rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1.96756rem;
                /* 131.17% */
            }

            p {
                color: #FFF;
                font-family: Ubuntu;
                font-size: 0.8125rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1.5625rem;
                /* 192.308% */
                text-align: left;
            }
        }

        #cta {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: baseline;

            #price_container {

                #price {
                    color: #191D23;
                    font-family: Ubuntu;
                    font-size: 1.25rem;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 1.53713rem;
                    /* 122.972% */
                    letter-spacing: 0.0625rem;
                }

                #size {
                    color: #191D23;
                    font-family: Ubuntu;
                    font-size: 0.875rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 1.53713rem;
                    letter-spacing: 0.04375rem;
                }
            }


            button {
                display: flex;
                width: fit-content;
                height: 3.125rem;
                padding: 0.92231rem 1.84456rem;
                justify-content: center;
                align-items: center;
                gap: 0.92231rem;
                flex-shrink: 0;
                border-radius: 2.45944rem;
                background: #F78495;
                color: #FAFAFA;
                font-family: Ubuntu;
                font-size: 1.22969rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                transition: all 0.2s ease-in-out;

                &:hover {
                    background: #a7515e;
                }

                @media screen and (max-width: 768px) {
                    padding: 0.2em 1rem;
                    font-size: 1rem;
                }


                &:disabled {
                    filter: contrast(0.5);
                    opacity: 0.3;
                    cursor: not-allowed;
                }
            }
        }
    }

}
</style>