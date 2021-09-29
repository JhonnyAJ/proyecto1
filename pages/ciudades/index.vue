<template>
  <div class="m-8">
    <h1 class="font-bold text-4xl">Cuidades</h1>
        <ul class="flex flex-wrap">
      <li
        v-for="ciudad of cuidades"
        :key="ciudad.slug"
        class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
      >
        <NuxtLink
          :to="{ name: 'ciudades-cityId-slug', params: { slug: ciudad.slug } }"
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
            v-if="ciudad.img"
            class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
            :src="ciudad.img"
          />

          <div
            class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
          >
            <h2 class="font-bold">{{ ciudad.title }}</h2>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const cuidades = await $content("ciudades")
      .only([ "slug","title","img"])
      .sortBy("createdAt", "desc")
      .fetch();
    //console.log(cuidades)
    return {
      cuidades
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
