<template>
  <div class="mobile-nav-bar__buttons">
    <template v-if="!isAuthenticated">
      <SignupButton />
      <LoginButton />
    </template>
    <template v-if="isAuthenticated">
      <!-- <button class="button__logout p-4" @click="routeToPodcast()">Listen to his AI podcast</button> -->
      <LogoutButton />
    </template>
  </div>
</template>

<script>
import LoginButton from "@/components/buttons/login-button.vue";
import LogoutButton from "@/components/buttons/logout-button.vue";
import SignupButton from "@/components/buttons/signup-button.vue";

export default {
  components: { LoginButton, LogoutButton, SignupButton },
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
