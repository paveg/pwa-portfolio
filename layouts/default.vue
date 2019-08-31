<template>
  <v-app>
    <core-toolbar />
    <common-drawer />
    <core-view />
    <core-footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Vuetify from "vuetify";
import CommonDrawer from "@/components/CommonDrawer.vue";
import CoreToolbar from "@/components/CoreToolbar.vue";
import CoreView from "@/components/CoreView.vue";
import CoreFooter from "@/components/CoreFooter.vue";

Vue.use(Vuetify);

@Component({
  components: {
    CoreToolbar,
    CommonDrawer,
    CoreView,
    CoreFooter
  }
})
export default class extends Vue {
  title: string = "~/.pav.pf";
  author: string = "Ryota Ikezawa";
}
</script>

<style lang="scss">
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
