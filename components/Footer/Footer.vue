<!-- Rasyid 16 Juli 2023 -->

<template>
    <footer>
        <div class="font-bold py-7">
            <div id="container" class="flex mx-auto justify-between gap-12">
                <div class="flex flex-col items-start">
                    <div id="logo" class="mb-3">
                        <img src="https://i.ibb.co/n7fHyCg/logo.webp" alt="Mochi Bites Daifuku">
                    </div>
                    <div class="mb-3">
                        <h1>Thank you For <br> visiting us</h1>
                    </div>
                    <div class="flex flex-wrap">
                        <div>
                            <a href="https://www.instagram.com/ursweethingsq/" target="_blank">
                                <img src="https://i.ibb.co/tsg8yff/Instagram-jpeg-0.png" href="#">
                            </a>
                        </div>
                        <div class="ml-2">
                            <a href="https://wa.me/6289654033739" target="_blank">
                                <img src="https://i.ibb.co/0B4fKfj/Whats-App-png-0.png" href="#">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-end gap-1 justify-center">
                    <div>
                        <h2>Contact Us</h2>
                    </div>
                    <div id="contact" class="flex flex-col items-end">
                        <div id="contactLogo" class="flex flex-row">
                            <div class="rounded-full">
                                <a class="py-2 flex items-center text-xs">
                                    <span>(+62)8123456789</span>
                                    <img class="ml-3 rounded-full" src="https://i.ibb.co/zRy3VWv/call.png">
                                </a>
                            </div>
                        </div>
                        <div id="contactLogo" class="flex flex-row">
                            <div class="rounded-full">
                                <a class="py-2 flex items-center text-xs">
                                    <span>qiqinthara@gmail.com</span>
                                    <img class="ml-3 rounded-full" src="https://i.ibb.co/M9NJWFZ/mail.png">
                                </a>
                            </div>
                        </div>
                        <div id="contactLogo" class="flex flex-row">
                            <div class="rounded-full">
                                <a class="py-2 flex items-center text-xs">
                                    <span>Kabupaten Tangerang,<br>Banten, Indonesia</span>
                                    <img class="ml-3 rounded-full" src="https://i.ibb.co/LdQy36H/location.png">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="copyright" class="flex justify-center">
                <span class="font-bold">&#169; Copyright 2023 Sweetingsq. All rights reserved.</span>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: #FBBBC2;
    padding-left: 10%;
    padding-right: 10%;
}

footer div {
    color: #191D23;
}

#container h1 {
    font-family: Carter One;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
}

#container h2 {
    font-size: 1.2rem;
}

#container span {
    text-align: end;
    font-size: 0.8rem;
}

#copyright span {
    font-size: 0.8rem;
}

#contactLogo img {
    background-color: #67002B;
    padding: 7px;
    width: 30px;
}

@media (max-width: 540px) {
    #container {
        flex-direction: column;
    }

    #copyright {
        margin-top: 3rem;
    }

    #copyright span {
        font-size: 0.7rem;
    }

    footer div {
        align-items: center;
    }

    footer h1 {
        text-align: center;
    }

    #contact {
        align-items: end;
    }
}
</style>