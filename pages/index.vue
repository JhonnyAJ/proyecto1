<template>
<div class="m-8">
  <h1>Catálogo de edificios más altos</h1>
  <ul class="flex flex-wrap">
	  <li class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"> <NuxtLink to="/edificio"           class="
            flex
            transition-shadow
            duration-150
            ease-in-out
            shadow-sm
            hover:shadow-md
            xxlmax:flex-col
          ">Edificios</NuxtLink></li>
	  <li class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"> <NuxtLink to="/ciudades"           class="
            flex
            transition-shadow
            duration-150
            ease-in-out
            shadow-sm
            hover:shadow-md
            xxlmax:flex-col
          ">Ciudades</NuxtLink></li>
	  <li class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"> <NuxtLink to="/arquitecto"           class="
            flex
            transition-shadow
            duration-150
            ease-in-out
            shadow-sm
            hover:shadow-md
            xxlmax:flex-col
          ">Arquitectos</NuxtLink></li>
	</ul>
</div>


</template>

<script>
export default {
    async asyncData({ $content, params }) {
    const edificios = await $content("edificios")
      .only([ "slug","title","Ubicación","Altura","Pisos","Arquitectos","Uso","Finalización","img"])
      .sortBy("createdAt", "desc")
      .fetch();
    const cuidades = await $content("ciudades")
      .only([ "slug","title","img"])
      .sortBy("createdAt", "desc")
      .fetch();
    const arquitectos = await $content("arquitectos")
      .only([ "slug","title","img"])
      .sortBy("createdAt", "desc")
      .fetch();
    return {
      edificios,
      cuidades,
      arquitectos
    };
  },
  head() {
    return {
      title: "Catálogo de edificios | Home",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Proyect 1"
        }
      ],
      htmlAttrs: {
        lang: "en"
      }
    };
  }
};
</script>

<style class="postcss">
.article-card {
  border-radius: 8px;
}
.article-card a {
  background-color: #000000;
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
