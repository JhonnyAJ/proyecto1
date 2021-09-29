<template>
  <div class="m-8">
    <h1 class="font-bold text-4xl">Edificios</h1>
        <ul class="flex flex-wrap">
      <li
        v-for="edificio of edificios"
        :key="edificio.slug"
        class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
      >
              <NuxtLink
          :to="{ name: 'edificio-edificioId-slug', params: { slug: edificio.slug } }"
          class="
            flex
            transition-shadow
            duration-150
            ease-in-out
            shadow-sm
            hover:shadow-md
            xxlmax:flex-col
          "
        >
          <img
            v-if="edificio.img"
            class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
            :src="edificio.img"
          />

          <div
            class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
          >
            <h2 class="font-bold">{{ edificio.title }}</h2>
            <p>Altura: {{ edificio.Altura }}</p>
            <p>Pisos: {{ edificio.Pisos }}</p>
            <p>Arquitectos: {{ edificio.Arquitectos }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const edificios = await $content("edificios")
      .only([ "slug","title","Ubicación","Altura","Pisos","Arquitectos","Uso","Finalización","img"])
      .sortBy("Altura", "desc")
      .fetch();
    //console.log(edificios)
    return {
      edificios
    };
  },
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
