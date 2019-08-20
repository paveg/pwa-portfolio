<template>
  <v-app>
    <core-filter />
    <core-toolbar />
    <common-drawer />
    <core-view />
    <core-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Vuetify from "vuetify";
import CoreFilter from "@/components/CoreFilter.vue";
import CommonDrawer from "@/components/CommonDrawer.vue";
import CoreToolbar from "@/components/CoreToolbar.vue";
import CoreView from "@/components/CoreView.vue";
import CoreFooter from "@/components/CoreFooter.vue";

Vue.use(Vuetify);

export default Vue.extend({
  components: {
    CoreFilter,
    CoreToolbar,
    CommonDrawer,
    CoreView,
    CoreFooter
  },
  data() {
    return {
      title: "~/.pav.pf",
      author: "Ryota Ikezawa"
    };
  }
});
</script>

<style lang="scss">
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
