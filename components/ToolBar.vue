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
        <v-btn
          @click.stop="onClickPlus"
          class="default v-btn--simple"
          light
          icon
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn
          @click.stop="onClickMinux"
          class="default v-btn--simple"
          light
          icon
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        {{ $store.state.counter }}
      </v-toolbar-title>
    </div>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";

export default Vue.extend({
  data: () => ({
    title: null,
    drawer: false,
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
    ...mapState(["counter"]),
    ...mapMutations([
      "plusCounter",
      "minusCounter",
      "setDrawer",
      "toggleDrawer"
    ]),
    onClickBtn() {
      this.$store.commit("setDrawer");
    },
    onClickPlus() {
      this.$store.commit("plusCounter");
      console.log(this.$store.state.counter);
    },
    onClickMinux() {
      this.$store.commit("minusCounter");
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
