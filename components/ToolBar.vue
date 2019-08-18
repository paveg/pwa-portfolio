<template>
  <v-toolbar id="toolbar" flat prominent style="background: white;">
    <div class="v-toolbar-title float-left">
      <v-toolbar-title class="tertiary--text font-weight-light">
        {{ title }}
        <v-btn
          v-if="responsive"
          @click.stop="onClickBtn"
          class="default v-btn--simple"
          light
          icon
        >
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        <v-btn @click.stop="onClickPlus" class="default v-btn--simple" light icon>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn @click.stop="onClickMinux" class="default v-btn--simple" light icon>
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        {{ counter }}
      </v-toolbar-title>
    </div>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  data: () => ({
    counter: 0,
    title: null,
    drawer: false,
    responsive: false,
    responsiveInput: false
  }),
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
      console.log("[info][wip] clicked button");
    },
    onClickPlus() {
      this.counter++;
    },
    onClickMinux() {
      this.counter--;
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
