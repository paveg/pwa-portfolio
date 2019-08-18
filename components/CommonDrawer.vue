<template>
  <v-navigation-drawer
    id="app-drawer"
    app
    dark
    floating
    persistent
    mobiel-break-point="991"
    width="260"
  >
    <v-img :src="image" :gradient="sidebarOverlayGradient" height="100%">
      <v-layout class="full-height" tag="v-list" column>
        <v-list tile avatar class="drawer-top">
          <v-list tile avatar color="white">
            <v-img :src="logo" width="40" height="40" />
          </v-list>
          <v-list tile title class="title">
            PAVLOG
          </v-list>
        </v-list>
        <br />
        <v-divider />
        <v-list-item
          v-for="(item, i) in linkItems"
          :key="i"
          :to="item.to"
          :active-class="color"
          router
          exact
          tile
          class="v-list-item"
        >
          <v-list action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list>
          <v-list v-text="item.text" title />
        </v-list-item>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";

export default Vue.extend({
  name: "CommonDrawer",
  data: () => ({
    logo: require("@/assets/image/icon.png"),
    responsive: false,
    linkItems: [
      {
        icon: "mdi-home",
        text: "Home",
        to: "/"
      },
      {
        icon: "mdi-account",
        text: "About",
        to: "/about"
      },
      {
        icon: "mdi-note",
        text: "Resume",
        to: "/resume"
      },
      {
        icon: "mdi-email",
        text: "Contact",
        to: "/contact"
      }
    ]
  }),
  computed: {
    ...mapState(["image", "color"]),
    sidebarOverlayGradient() {
      return `${this.$store.state.sidebarBackgroundColor}, ${this.$store.state.sidebarBackgroundColor}`;
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
    ...mapMutations("app", ["setDrawer", "toggleDrawer"]),
    onResponsiveInverted() {
      this.responsive = window.innerWidth < 991;
    }
  }
});
</script>

<style lang="scss">
#app-drawer {
  .v-list__tile {
    border-radius: 4px;
    &--buy {
      margin-top: auto;
      margin-bottom: 17px;
    }
  }
  .drawer-top {
    display: flex;
    text-align: center;
    margin-top: 15px;
    font-size: 1.8rem;
    margin-left: 30px;
    .title {
      margin-left: 12px;
      font-family: "Menlo for Powerline";
      margin-top: 6px;
    }
  }
  .v-image__image--contain {
    top: 9px;
    height: 60%;
  }
  div.v-responsive.v-image > div.v-responsive__content {
    overflow-y: auto;
  }
}
</style>
