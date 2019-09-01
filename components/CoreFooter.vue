<template>
  <v-footer id="core-footer" absolute height="82">
    <div class="footer-items">
      <span v-for="link in links" :key="link.name">
        <a :href="link.to" class="tertiary--text footer-links"
          ><v-icon>{{ link.icon }}</v-icon></a
        >
      </span>
    </div>
    <v-spacer />
    <span class="font-weight-light copyright">
      &copy;
      {{ new Date().getFullYear() }}
      <a href="https://www.pavlog.tokyo" target="_blank">Ryota Ikezawa</a>
    </span>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LinkInterface } from "~/types";

@Component
export default class CoreFooter extends Vue {
  name: string = "CoreFooter";
  links: LinkInterface[] = [
    {
      name: "github",
      icon: "mdi-github-circle",
      to: "https://github.com/paveg"
    },
    {
      name: "hatena-blog",
      icon: "mdi-blogger",
      to: "https://www.pavlog.tokyo"
    },
    {
      name: "twitter",
      icon: "mdi-twitter",
      to: "https://twitter.com/_pavlog"
    },
    {
      name: "linkedin",
      icon: "mdi-linkedin",
      to: "https://www.linkedin.com/in/xpav"
    }
  ];
}
</script>

<style>
#core-footer {
  z-index: 0;
  background-color: rgba(0, 0, 0, 0);
}
</style>
