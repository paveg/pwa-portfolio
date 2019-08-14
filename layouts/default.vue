<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :right="right"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon right>
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "About",
          to: "/"
        },
        {
          icon: "mdi-account-circle",
          title: "Profile",
          to: "/profile"
        },
        {
          icon: "mdi-folder-open",
          title: "Skill",
          to: "/skill"
        },
        {
          icon: "mdi-email",
          title: "Contact",
          to: "/contact"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "pav/portfolio"
    }
  }
}
</script>
