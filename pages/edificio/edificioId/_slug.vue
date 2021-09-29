<script>
  export default {
    async asyncData({ $content, params }) {
      const edificio = await $content('edificios', params.slug).fetch()
      //console.log('edificio',edificio)
      const arquitecto = await $content('arquitectos').where({ title: edificio.Arquitectos }).fetch()
      const ciudades = await $content('ciudades').where({ title: edificio['Ubicación'] }).fetch()
      // console.log('ciudad', ciudades)
      return { edificio, arquitecto, ciudades }
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
        :src="edificio.img"
        :alt="edificio.alt"
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
      <h1 class="font-bold text-4xl">{{ edificio.title }}</h1>
      <!-- content from markdown -->
      <nuxt-content :document="edificio" />
      <!-- content author component -->

    <h5>Arquitecto: </h5>
	   <ul class="list-none md:list-disc">
	     <li v-for="arquitec of arquitecto" :key="arquitec.slug">
	       <NuxtLink :to="{ name: 'arquitecto-arquitectoId-slug', params: { slug: arquitec.slug } }">{{arquitec.title}}</NuxtLink>
	     </li>
	   </ul>

    <h5>Ciudad: </h5>
	   <ul class="list-none md:list-disc">
	     <li v-for="ciudad of ciudades" :key="ciudad.slug">
	       <NuxtLink :to="{ name: 'ciudades-cityId-slug', params: { slug: ciudad.slug } }">{{ciudad.title}}</NuxtLink>
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
