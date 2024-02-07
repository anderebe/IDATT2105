<template>
  <div class="feedback">
    <NavHeader />
    <Feedback />
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
import Feedback from "@/components/FeedbackContent.vue";

export default {
  name: "FeedbackView",
  components: {
    Feedback,
    NavHeader,
  },
};
</script>
