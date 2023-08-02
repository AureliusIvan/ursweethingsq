<!-- Rasyid 16 Juli 2023 -->

<template>
    <nav class="relative flex flex-wrap items-center justify-between">
        <div id="container" class="container mx-auto flex flex-wrap items-center justify-between">
            <div id="logo" class="relative flex">
                <a class="text font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-white" href="https://www.instagram.com/ursweethingsq/" target="_blank">
                    <img src="https://i.ibb.co/n7fHyCg/logo.webp" alt="Mochi Bites Daifuku">
                </a>
            </div>
            <div class="flex flex-grow">
                <ul id="sosmedLogo" class="flex flex-row list-none ml-auto">
                    <li class="nav-item">
                        <div id="sosmedButton" class="bg-white rounded-full">
                            <a class="px-3 py-2 flex items-center text-xs font-bold leading-snug text-black" href="https://wa.me/6289654033739"
                                target="_blank">
                                <img src="https://i.ibb.co/wpkY18r/wa.webp"><span class="ml-2">Order by WA</span>
                            </a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div id="sosmedButton" class="ml-2 bg-white rounded-full">
                            <a class="px-3 py-2 flex items-center text-xs font-bold leading-snug text-black"
                                href="https://www.instagram.com/ursweethingsq/" target="_blank">
                                <img src="https://i.ibb.co/c818SDG/ig.png"><span class="ml-2">Order by IG</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div id="nav_gap">

    </div>
</template>

<style scoped lang="scss">
#nav_gap {
    height: 120px;
}

nav {
    background-color: #FBBBC2;
    position: fixed;
    width: 100%;
    z-index: 3;
    top: 0;
    left: 0;
}

#container {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 1%;
    padding-bottom: 1%;
}

span {
    font-size: 15px;
}

#sosmedButton {
    transition: 1s;
    color: black;
    background-color: aliceblue;
}

#sosmedButton:hover {
    filter: brightness(0.7);
    transition: 0.5s;
}

@media (min-width: 768px) {
    #container {
        padding-left: 10%;
        padding-right: 10%;
    }

    #logo img {
        width: 60px;
    }

    #sosmedLogo img {
        width: 20px;
    }

    #sosmedLogo a {
        margin-right: 10px;
        margin-left: 10px;
    }
}

@media (max-width: 768px) and (min-width: 480px) {
    #logo img {
        width: 50px;
    }

    #sosmedLogo img {
        width: 17px;
    }

    #sosmedLogo a {
        margin-right: 10px;
        margin-left: 10px;
    }
}

@media (max-width: 480px) {
    #logo img {
        width: 40px
    }

    #sosmedLogo img {
        width: 15px;
    }

    span {
        display: none;
    }
}
</style>