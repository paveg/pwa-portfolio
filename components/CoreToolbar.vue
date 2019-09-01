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
import { Component, Watch, Vue } from "vue-property-decorator";
// TODO: add mapMuttions

@Component
export default class CoreToolbar extends Vue {
  name: string = "CoreToolbar";
  title: string = "home";
  responsive: boolean = false;
  responsiveInput: boolean = false;
  @Watch("route")
  route(val) {
    this.title = val.name === "index" ? "home" : val.name;
  }

  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  }
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }

  onClickBtn(): void {
    this.$store.commit("toggleDrawer");
  }
  onResponsiveInverted(): void {
    this.responsive = window.innerWidth < 1270;
    this.responsiveInput = window.innerWidth > 991;
  }
}
</script>

<style lang="scss">
#core-toolbar a {
  text-decoration: none;
}
.theme--light.v-sheet {
  max-height: max-content;
}
</style>
