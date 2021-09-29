<script>
  export default {
    async asyncData({ $content, params }) {
      //console.log('ppp',params.slug)
      const ciudad = await $content('ciudades', params.slug).fetch()
      //console.log('ciudad',ciudad)
      const Edificios = await $content('edificios').where({ 'Ubicación': ciudad.title }).fetch()
     //console.log('arquitecto',arquitecto)
      return { Edificios, ciudad }
    },
      methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  }
</script>

<template>
  <article
    class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
  >
    <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-top">
      <img
        :src="ciudad.img"
        :alt="ciudad.alt"
        class="absolute h-full w-full object-cover"
      />
      <div class="overlay"></div>

    </div>
    <div
      class="
        relative
        xs:py-8 xs:px-8
        lg:py-32 lg:px-16 lg:w-1/2
        xs:w-full
        h-full
        overflow-y-scroll
        markdown-body
        post-right
        custom-scroll
      "
    >
      <h1 class="font-bold text-4xl">{{ ciudad.title }}</h1>
      <!-- content from markdown -->
      <nuxt-content :document="ciudad" />
      <!-- content author component -->

      <h5>Edificios: </h5>
	   <ul class="list-none md:list-disc">
	     <li v-for="edificio of Edificios" :key="edificio.slug">
	       <NuxtLink :to="{ name: 'edificio-edificioId-slug', params: { slug: edificio.slug } }">{{edificio.title}}</NuxtLink>
	     </li>
	   </ul>

      <!-- <author :author="article.author" /> -->
    </div>
  </article>
</template>

<style>
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}

</style>
