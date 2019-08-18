<template>
  <v-app light>
    <tool-bar />
    <common-drawer />
    <v-footer app>
      <span>&copy; 2019 {{ author }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Vuetify from "vuetify";
import CommonDrawer from "@/components/CommonDrawer";
import ToolBar from "@/components/ToolBar";

Vue.use(Vuetify);

export default Vue.extend({
  components: {
    ToolBar,
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
