<template>
  <body>
    <NavHeader />
    <GifContent />
  </body>
</template>

<script>
// @ is an alias to /src
import NavHeader from "@/components/NavHeader.vue";
import GifContent from "@/components/GifContent.vue";

export default {
  name: "HomeView",
  components: {
    GifContent,
    NavHeader,
  },
};
</script>
