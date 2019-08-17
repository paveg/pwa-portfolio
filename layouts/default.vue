<template>
  <v-app light>
    <common-drawer />
    <v-footer app>
      <span>&copy; 2019 {{ author }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Vuetify from "vuetify";
import CommonDrawer from "@/components/CommonDrawer.vue";

Vue.use(Vuetify);

export default Vue.extend({
  components: {
    CommonDrawer
  },
  data() {
    return {
      title: "~/.pav.pf",
      author: "Ryota Ikezawa"
    };
  }
});
</script>
