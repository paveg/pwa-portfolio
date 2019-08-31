<template>
  <v-app light>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  layout: string = "empty";
  @Prop({ type: Object, default: null })
  error;

  private pageNotFound: string = "404 Not Found";
  private otherError: string = "An error occurred";
  private head() {
    const title: any =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
