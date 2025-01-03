<template>
  <div class="nav-bar__tabs">
    <!-- <NavBarTab path="/profile" label="Profile" /> -->
    <NavBarTab path="/" label="Home" />
    <template v-if="isAuthenticated">
      <NavBarTab path="/chat" label="Chat" />
      <!-- <NavBarTab path="/admin" label="Admin" /> -->
    </template>
  </div>
</template>

<script>
import NavBarTab from "@/components/navigation/desktop/nav-bar-tab.vue";

export default {
  components: {
    NavBarTab,
  },
  data() {
    return {
      isAuthenticated: this.$auth0.isAuthenticated,
    };
  },
};
</script>
