<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    mobiel-break-point="991"
    width="260"
  >
    <v-img :src="image" :gradient="sidebarOverlayGradient" height="100%">
      <v-layout class="full-height" tag="v-list" column>
        <v-list tile avatar class="flex-list">
          <v-list-item-avatar tile avatar color="white">
            <v-avatar>
              <img :src="logo" alt="avatar" />
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-title class="title">
            Ryota Ikezawa
          </v-list-item-title>
        </v-list>
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
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
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
    logo:
      "https://raw.githubusercontent.com/paveg/pwa-portfolio/master/assets/image/icon_circle.png",
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
    inputValue: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("setDrawer", val);
      }
    },
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
    ...mapMutations(["setDrawer", "toggleDrawer"]),
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
  .flex-list {
    display: flex;
  }
  .v-avatar.v-list-item__avatar.v-avatar--tile.white {
    margin-left: 24px;
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
