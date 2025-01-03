<template>
  <button class="button__sign-up" @click="handleSignUp">Get access</button>
</template>

<script>
export default {
  methods: {
    handleSignUp() {
      this.$auth0.loginWithRedirect({
        appState: {
          target: "/chat",
        },
        authorizationParams: {
          prompt: "login",
          screen_hint: "signup",
        }
      });
    },
  },
};
</script>
