<!-- Arvin 7/19/2023 -->
<template>
  <!-- title  -->
  <div class=" bg-background gmap">
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


<!-- <script>
export default {
  name: "GoogleMap",
  mounted() {
    const apiKey = "#"; // api key

    const googleMapsScript = document.createElement("script");
    googleMapsScript.setAttribute(
      "src",
      `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`
    );
    document.head.appendChild(googleMapsScript);
    window.initMap = this.initMap;
  },
  methods: {
    initMap() {
      const location = { lat: 33.9868, lng: -118.4733 };

      const map = new google.maps.Map(document.getElementById("google-map"), {
        center: location,
        zoom: 15,
        mapTypeId: "roadmap",
      });

      // Add a marker at the specified location
      new google.maps.Marker({
        position: location,
        map,
      });
    },
  },
};
</script> -->

<style scoped>
.title {
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
  margin-left: 7vw;
  margin-right: 7vw;

}

.marg iframe {
  width: 100%;
  height: 100%;
}

.gmap {
  padding-bottom: 5vh;
}

.mapouter {
  position: relative;
  text-align: right;
  height: 100%;
  width: 100%;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 100%;
  width: 100%;
}
</style>
