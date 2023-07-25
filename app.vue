<!-- ivan | 15 Juli 2023 -->
<template>
  <div>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'ursweethingsq | Mochi Bites Ichigo Daifuku Tangerang',
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',

  meta: [
    { name: 'description', content: 'Temukan beragam piliha Mochi & Desert manis terenak hanya di ursweethingsq | Menyediakan berbagai macam desert manis dan mochi.' },
    { name: 'keywords', content: 'ursweethingsq, mochi, mochi bites, ichigo daifuku, tangerang, dessert, dessert manis, mochi tangerang, dessert tangerang, mochi bites tangerang, dessert manis tangerang' },
    { name: 'google-site-verification', content: 'O6jTaHlgnI4elkK4qaS-WdNhB3p4u52p0enHvCDx7GM' },
    { name: 'robots', content: "index, follow" }
    // <meta name="google-site-verification" content="O6jTaHlgnI4elkK4qaS-WdNhB3p4u52p0enHvCDx7GM" />
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>