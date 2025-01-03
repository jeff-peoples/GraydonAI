<template>
  <div @click="mobileMenuStore.closeMobileMenu()" class="mobile-nav-bar__brand me-0">
    <router-link to="/">Ask GrAIdon
      <!-- <img
        class="mobile-nav-bar__logo"
        src="https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg"
        alt="Auth0 shield logo"
        width="82"
        height="24"
      /> -->
    </router-link>
    <div class="d-flex nav-bar__tabs podcast text-end" @click="routeToPodcast()">Listen to his AI podcast </div>
  </div>
</template>

<script>
import { mobileMenuStore } from "./mobile-menu.store.js";

export default {
  data() {
    return {
      mobileMenuStore,
    };
  },
  methods: {
    routeToPodcast() {
        window.location.href = "https://soundcloud.com/peepz/graydon-peoples-podcast";
      },    
  }    
};
</script>
