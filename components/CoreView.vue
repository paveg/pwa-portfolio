<template>
  <v-content>
    <div id="core-view">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
  </v-content>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CoreView"
});
</script>

<style lang="scss">
#core-view {
  margin-bottom: 100px;
  padding: 0 15px;
}
</style>
