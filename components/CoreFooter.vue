<template>
  <v-footer id="core-footer" absolute height="82">
    <div class="footer-items">
      <span v-for="link in links" :key="link.name">
        <a :href="link.Link" class="tertiary--text footer-links"
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
import Vue from "vue";
export default Vue.extend({
  name: "CoreFooter",
  data: () => ({
    links: [
      {
        name: "github",
        icon: "mdi-github-circle",
        Link: "https://github.com/paveg"
      },
      {
        name: "hatena-blog",
        icon: "mdi-blogger",
        Link: "https://www.pavlog.tokyo"
      },
      {
        name: "twitter",
        icon: "mdi-twitter",
        Link: "https://twitter.com/_pavlog"
      },
      {
        name: "linkedin",
        icon: "mdi-linkedin",
        Link: "https://www.linkedin.com/in/xpav"
      }
    ]
  })
});
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
