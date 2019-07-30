<template>
	<nav>
<!--     <div class="text-center ma-2">
     <v-snackbar v-model="snackbar" :timeout="6000" top color="indigo">
      {{ msg }}
      <v-btn color="white" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div> -->

  <v-app-bar app>
   <v-toolbar-title class="text-uppercase grey--text">
    <router-link to="/" tag="div">
      <span class="font-weight-light">Tip</span>
      <span>Giver</span>
    </router-link>
  </v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items v-for="link in links" :key="link.text" class="hidden-sm-and-down">
    <v-btn router :to="link.route" text>{{ link.text }}</v-btn>
  </v-toolbar-items>
  <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
</v-app-bar>


<v-navigation-drawer v-model="drawer" :right="right" app class="white">
  <v-list dense nav class="py-0">
    <v-list-item two-line>
      <v-list-item-avatar>
        <img src="https://randomuser.me/api/portraits/men/81.jpg" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Dashboard</v-list-item-title>
        <v-list-item-subtitle>What you wanna do?</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item v-for="link in links" :key="link.text" link router :to="link.route">
      <v-list-item-icon>
        <v-icon>{{ link.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ link.text }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-navigation-drawer>

</nav>
</template>

<script>
	export default {
    data() {
      return {
        drawer: false,
        right: true,
        links: [
        {text: 'Home', icon: 'mdi-image', route: '/'},
        {text: 'About', icon: 'mdi-help-box', route: '/about'},
        {text: 'Tips', icon: 'mdi-view-dashboard', route: '/tips'},
        ],
        snackbar: true,
        msg: 'User Added Successfully',
      }
    }
  }
</script>