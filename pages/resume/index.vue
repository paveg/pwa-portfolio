<template>
  <MaterialCard :textTitle="textTitle" :text="text" />
</template>

<script lang="ts">
import Vue from "vue";
import MaterialCard from "@/components/MaterialCard.vue";
export default Vue.extend({
  components: {
    MaterialCard
  },
  data() {
    return {
      textTitle: "resume",
      text: "work in progress"
    };
  }
});
</script>
