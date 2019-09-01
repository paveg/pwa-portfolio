<template>
  <MaterialCard :title="title" :text="text" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MaterialCard from "@/components/MaterialCard.vue";

@Component({
  components: {
    MaterialCard
  }
})
export default class About extends Vue {
  title: string = "about";
  text: string = "work in progress";
}
</script>
