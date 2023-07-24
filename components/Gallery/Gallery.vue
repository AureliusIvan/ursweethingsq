<template>
    <div class="photoGallery">
        <div class="md:grid md:grid-cols-6 md:gap-1.5 md:mt-24 mt-12">
            <div class="md:col-start-2 md:col-span-4">
                <h1>Photo Gallery</h1>
            </div>
            <div class="md:col-end-7"></div>
            <div class="md:col-start-2 md:col-span-4">
                <h2>Kelihatannya enak-enak banget kan. Ayo jangan dilihatin aja langsung dibeli!</h2>
            </div>
            <div class="md:col-end-7"></div>
            <div class="md:col-span-6 md:grid md:grid-cols-6 md:mt-16">
                <div class="md:col-span-1 hidden sm:block md:absolute md:w-96 md:mt-[-72px]">
                    <img src="~/assets/assets/images/photoGalleryAsset/blobPinkLeft.png" alt="blobPinkLeft" />
                </div>
                <div class="galleryImage md:col-start-2 md:col-span-4 md:grid md:grid-cols-4 md:gap-2 md:z-10 ">
                    <div class="md:col-span-1">
                        <img src="~/assets/assets/images/photoGalleryAsset/gallery1.png" alt="gallery1" />
                    </div>
                    <div class="md:col-span-1">
                        <img src="~/assets/assets/images/photoGalleryAsset/gallery2.png" alt="gallery2" />
                    </div>
                    <div class="md:col-span-1">
                        <img src="~/assets/assets/images/photoGalleryAsset/gallery3.png" alt="gallery3" />
                    </div>
                    <div class="md:col-span-1">
                        <img src="~/assets/assets/images/photoGalleryAsset/gallery4.png" alt="gallery4" />
                    </div>
                </div>
                <div class="md:col-span-1 hidden sm:block md:absolute md:right-0 md:w-96 md:mt-[-72px]">
                    <img src="~/assets/assets/images/photoGalleryAsset/blobPinkRight.png" alt="blobPinkRight" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.galleryImage img {
    max-height: 300px;
    width: 120%;
}

h1 {
    color: #191D23;
    font-family: Carter One;
    font-size: 4rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 1.44px;
    text-transform: capitalize;
    padding-right: 150px;
}

h2 {
    color: #75797F;
    text-align: start;
    font-family: Ubuntu;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 400;
}


@media (max-width: 640px) {
    .galleryImage {
        padding: 10%;
    }   

    h1 {
        font-weight: bold;
        font-size: 2rem;
        padding : 10px;
        text-align: center;
    }

    h2 {
        padding-left: 18px;
        padding-right: 18px;
        margin-top: -10px;
        font-size: 0.6rem;
        text-align: center;
    }
}

</style>