<template>
  <div class="mobile-nav-bar__tabs">
    <!-- <MobileNavBarTab path="/profile" label="Profile" /> -->
    <!-- <MobileNavBarTab path="/" label="Home" /> -->
    <template v-if="isAuthenticated">
      <!-- <MobileNavBarTab path="/chat" label="Chat" /> -->
      <!-- <MobileNavBarTab path="/admin" label="Admin" /> -->
    </template>
  </div>
</template>

<script>
import MobileNavBarTab from "@/components/navigation/mobile/mobile-nav-bar-tab.vue";

export default {
  components: { MobileNavBarTab },
  data() {
    return {
      isAuthenticated: this.$auth0.isAuthenticated,
    };
  },
};
</script>
