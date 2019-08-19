<template>
  <v-app light>
    <tool-bar />
    <common-drawer />
    <core-view />
    <v-footer app>
      <span>&copy; 2019 {{ author }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Vuetify from "vuetify";
import CommonDrawer from "@/components/CommonDrawer.vue";
import ToolBar from "@/components/ToolBar.vue";
import CoreView from "~/components/CoreView.vue";

Vue.use(Vuetify);

export default Vue.extend({
  components: {
    ToolBar,
    CommonDrawer,
    CoreView
  },
  data() {
    return {
      title: "~/.pav.pf",
      author: "Ryota Ikezawa"
    };
  }
});
</script>
