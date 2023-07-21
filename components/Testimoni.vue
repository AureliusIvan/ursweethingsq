<template>
    <div class="testimoni relative">
      <div class="mochi-image md:flex md:justify-center md:z-10 mb-0 sm:mb-4 md:inset-10 md:mt-0">
        <img src="~/assets/Testimoni/mochiOnWood.png" alt="mochiOnWood" class="w-1/3 sm:w-1/2 md:w-1/4" />
      </div>
  
      <div class="oval-pink md:absolute md:inset-0 z-[-1] md:w-128 w-full md:h-100 h-24 relative">
        <svg width="100%" height="100%" viewBox="0 0 1920 113" fill="#FBBBC2" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 113C960 -37.6667 1536 -37.6667 1920 113H0Z"/>
        </svg>
      </div>
  
      <div class="background-pink grid md:grid-cols-4 grid-cols-10 md:mt-7 md:min-h-[90vh] min-h-[80vh]">
        <div class="relative col-span-1"></div>
        <div class="judul text-2xl md:text-4xl z-10 md:col-span-2 col-span-10 text-center md:mt-0 mt-[-28px]">
          <strong>
            <span style="color: #67002B">What our customers say</span>
            <br />
            <div class="md:mt-4">
              <span style="color: #67002B">about our </span>
              <span style="color: #FAFAFA">sweets</span>
            </div>
          </strong>
        </div>
  
        <div class="md:panah md:relative hidden sm:block col-span-1">
          <span class="text-black absolute left-14 top-8 -skew-y-6">click here to</span>
          <span class="text-black absolute left-16 top-12 -skew-y-6">see more</span>
          <img src="~/assets/Testimoni/Vector.png" alt="Vector" class="w-52 h-36 right-5 absolute bottom-50" />
        </div>
  
        <div class="photo-row md:col-span-4 md:mt-16 flex z-30 col-span-10">
          <img src="~/assets/Testimoni/testimoni1.png" alt="Testimonial 1" />
          <img src="~/assets/Testimoni/testimoni2.png" alt="Testimonial 2" />
          <img src="~/assets/Testimoni/testimoni3.png" alt="Testimonial 3" />
          <img src="~/assets/Testimoni/testimoni4.png" alt="Testimonial 4" />
          <img src="~/assets/Testimoni/testimoni5.png" alt="Testimonial 5" />
          <img src="~/assets/Testimoni/testimoni6.png" alt="Testimonial 6" />
        </div>
  
        <div class="background-pink-2 col-span-4 min-h-[10vh] z-[-2]"></div>
      </div>
  
      <div class="hidden md:col-span-4 md:grid grid-cols-6 grid-rows-3 md:grid-flow-col md:z-20 sm:block">
        <div class="smallBlobLeft row-span-3 col-span-2">
          <img src="~/assets/Testimoni/smallBlobLeft.png" alt="Blob Left" />
        </div>
        <div class="col-span-2 row-span-3"></div>
        <div class="smallBlobRight row-span-3 col-span-2 flex justify-end">
          <img src="~/assets/Testimoni/smallBlobRight.png" alt="Blob Right" />
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
    .judul {
      font-family: 'Carter One', cursive;
    }
  
    .photo-row img {
      width: 16.66667%;
    }
  
    .mochi-image {
      width: 100%;
      z-index: 1;
      max-width: 2000px;
      margin-bottom: 0;
    }
  
    @media (max-width: 640px) {
      .mochi-image {
        margin-bottom: 0;
        margin-left: 50px;
        width: 200%;
        z-index: 1;
      }
  
      .oval-pink {
        margin-top: -100px;
      }
    }
  
    .oval-pink {
      margin-top: 80px;
    }
  
    @media (max-width: 640px) {
      .oval-pink {
        margin-top: -70px;
        margin-bottom: -40px;
      }
    }
  
    .background-pink {
      background-color: #FBBBC2;
    }
  
    .background-pink-2 {
      background-color: #FBBBC2;
    }
  
    .panah {
      font-family: 'Ubuntu', sans-serif;
    }
  
    .smallBlobLeft {
      margin-top: -200px;
      width: 60%;
    }
  
    .smallBlobRight {
      margin-top: -150px;
      width: 70%;
      justify-self: end;
    }

  </style>
  