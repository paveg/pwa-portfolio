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
export default class Contact extends Vue {
  title: string = "contact";
  text: string = "work in progress";
}
</script>
