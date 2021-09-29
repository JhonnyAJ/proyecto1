<template>
  <div>
  <Navigation />
  <div class="content">
    <nuxt />
  </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Oswald&display=swap"
        }
      ]
    };
  },
  components: {
    Navigation
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #2d3436;
  color: whitesmoke;
  font-family: Arial, Helvetica, sans-serif;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.content {
  padding: 0rem;
}

</style>
