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
            <v-avatar tile class="avatar">
              <img :src="logo" alt="avatar" />
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-title class="title">
            pav
          </v-list-item-title>
        </v-list>
        <v-divider light />
        <v-list-item
          v-for="(item, i) in linkItems"
          :key="i"
          :to="item.to"
          router
          exact
          tile
          class="v-list-item"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list v-text="item.name" title />
        </v-list-item>
        <v-divider light />
        <v-chip class="ma-4" color="info" style="width: 87%" label>
          <v-icon left>mdi-progress-wrench</v-icon>
          work in progress
        </v-chip>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LinkInterface } from "~/types";
// TODO: Add mapMutations

@Component
export default class CommonDrawer extends Vue {
  name: string = "CommonDrawer";
  logo: string =
    "https://raw.githubusercontent.com/paveg/pwa-portfolio/master/assets/image/icon_circle.png";
  image: string =
    "https://www.pakutaso.com/shared/img/thumb/edgawa-hanabi-27_TP_V4.jpg";
  responsive: boolean = false;
  linkItems: LinkInterface[] = [
    {
      icon: "mdi-home",
      name: "Home",
      to: "/"
    },
    {
      icon: "mdi-account",
      name: "About",
      to: "/about"
    },
    {
      icon: "mdi-note",
      name: "Resume",
      to: "/resume"
    },
    {
      icon: "mdi-email",
      name: "Contact",
      to: "/contact"
    },
    {
      icon: "mdi-security",
      name: "Privacy Policy",
      to: "/privacy_policy"
    }
  ];
  public get inputValue(): boolean {
    return this.$store.state.drawer;
  }
  public set inputValue(val: boolean) {
    this.$store.state.drawer = val;
  }
  public get sidebarOverlayGradient(): string {
    return `${this.$store.state.sidebarBackgroundColor}, ${this.$store.state.sidebarBackgroundColor}`;
  }
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  }
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
  onResponsiveInverted() {
    this.responsive = window.innerWidth < 991;
  }
}
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
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .v-avatar.v-list-item__avatar.v-avatar--tile.white {
    margin-left: 20px;
  }
  .v-image__image--contain {
    top: 9px;
    height: 60%;
  }
  div.v-responsive.v-image > div.v-responsive__content {
    overflow-y: auto;
  }
  .v-avatar {
    border-radius: 50%;
  }
}
</style>
