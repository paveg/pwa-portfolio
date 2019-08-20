<template>
  <MaterialCard :title="title" :text="text" />
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
      title: "home",
      text: "text"
    };
  }
});
</script>
