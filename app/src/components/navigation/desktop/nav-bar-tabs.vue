<template>
  <div class="nav-bar__tabs">
    <!-- <NavBarTab path="/profile" label="Profile" /> -->
    <!-- <NavBarTab path="/" label="Home" /> -->
    <template v-if="isAuthenticated">
      <NavBarTabUrl url="https://soundcloud.com/peepz/graydon-peoples-podcast" label="Listen to his AI podcast" />
          
      <!-- <NavBarTab path="/chat" label="Chat" /> -->
      <!-- <NavBarTab path="/admin" label="Admin" /> -->
    </template>
  </div>
</template>

<script>
import NavBarTab from "@/components/navigation/desktop/nav-bar-tab.vue";
import NavBarTabUrl from "./nav-bar-tab-url.vue";

export default {
  components: {
    NavBarTab, NavBarTabUrl
  },
  data() {
    return {
      isAuthenticated: this.$auth0.isAuthenticated,
    };
  },
  methods: {
    routeToPodcast() {
        window.location.href = "https://soundcloud.com/peepz/graydon-peoples-podcast";
      },    
  }    
};
</script>
