<template>
  <v-toolbar id="core-toolbar" flat prominent style="background: white;">
    <div class="v-toolbar-title">
      <v-toolbar-title class="tertiary--text font-weight-light">
        <v-btn
          v-if="responsive"
          @click.stop="onClickBtn"
          class="default v-btn--simple"
          light
          icon
        >
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        {{ title }}
      </v-toolbar-title>
    </div>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  name: "CoreToolbar",
  data: () => ({
    title: "home",
    responsive: false,
    responsiveInput: false
  }),
  computed: {},
  watch: {
    $route(val) {
      this.title = val.name === "index" ? "home" : val.name;
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  methods: {
    ...mapMutations(["setDrawer", "toggleDrawer"]),
    onClickBtn() {
      this.$store.commit("toggleDrawer");
    },
    onResponsiveInverted() {
      this.responsive = window.innerWidth < 1270;
      this.responsiveInput = window.innerWidth > 991;
    }
  }
});
</script>

<style lang="scss">
#core-toolbar a {
  text-decoration: none;
}
.theme--light.v-sheet {
  max-height: max-content;
}
</style>
