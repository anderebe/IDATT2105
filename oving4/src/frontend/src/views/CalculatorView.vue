<template>
  <NavHeader />
  <CalculatorContent />
</template>

<script>
// @ is an alias to /src
import NavHeader from "@/components/NavHeader.vue";
import CalculatorContent from "@/components/CalculatorContent.vue";

export default {
  name: "CalculatorView",
  components: {
    CalculatorContent,
    NavHeader,
  },
};
</script>
