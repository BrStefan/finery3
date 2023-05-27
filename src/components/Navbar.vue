<template>
  <v-app-bar app>
    <v-app-bar-nav-icon v-if="isMobile" @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Logo</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-list v-if="!isMobile" dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', link: '/' },
        { title: 'About', link: '/about' },
        { title: 'Contact', link: '/contact' },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>
