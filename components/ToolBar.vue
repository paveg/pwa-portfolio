<template>
  <v-toolbar id="toolbar" flat prominent style="background: white;">
    <div class="v-toolbar-title float-left">
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
  data: () => ({
    title: null,
    drawer: false,
    responsive: false,
    responsiveInput: false
  }),
  watch: {
    $route(val) {
      this.title = val.name;
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
      console.log("[info][wip] clicked button");
    },
    onResponsiveInverted() {
      this.responsive = window.innerWidth < 1264;
    }
  }
});
</script>

<style lang="scss">
#toolbar a {
  text-decoration: none;
}
.v-toolbar-title {
  margin-left: auto;
}
</style>
