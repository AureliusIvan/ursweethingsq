<!-- Arvin 7/19/2023 -->
<template>
  <!-- title  -->
  <div class="gmap">
    <h2 class="title">Lokasi kami</h2>
    <!-- <div id="google-map" class="h-96 rounded-lg shadow-md border border-black-5 marg"></div> -->
    <div class="mapouter">
      <div class="h-96 shadow-md marg">
        <iframe :src="mapSrc" style="border:0;"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mapSrc() {
      const latitude = -7.7810731;
      const longitude = 110.3225945;
      const encodedAddress = encodeURIComponent('Bite To You');
      return `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1976.5412699805172!2d${longitude}!3d${latitude}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5f0666145867%3A0xfede764ae54d5b3e!2s${encodedAddress}!5e0!3m2!1sen!2sid!4v1689950085693!5m2!1sen!2sid`;
    },
  },
};
</script>

<style scoped>
.title {
  position: relative;
  display: flex;
  justify-content: right;
  color: #191D23;
  font-family: Carter One;
  font-size: 4rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 1.44px;
  text-transform: capitalize;
  padding-right: 150px;
  padding-bottom: 30px;

  @media screen and (max-width: 800px) {
    font-size: 2rem;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding-right: 0px;
    padding-bottom: 30px;
  }
}

.marg {
  margin-left: 16vw;
  margin-right: 10vw;

}

.marg iframe {
  height: 100%;
  width: 100%;

  
}

.gmap {
  padding-bottom: 5vh;
  position: relative;
  width: 100%;
  
}

.mapouter {
  position: relative;
  text-align: right;
  height: 100%;
  width: 100%;
}

.gmap_canvas {
  background: none !important;
  height: 100%;
  width: 100%;
}
</style>
