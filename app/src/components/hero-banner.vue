<template>
  <div class="herotext">

    <div class="mobile-nav-bar__buttons herobuttons pt-4 pt-md-1" v-if="isAuthenticated">
      <button class="button__logout p-4" @click="routeToChat()" >Chat with GrAIdon</button>
      <button class="button__logout p-4" @click="routeToPodcast()">Listen to his AI podcast</button>
      
    </div>

    <div class="mobile-nav-bar__buttons herobuttons d-flex d-md-none" v-if="!isAuthenticated">
      <SignupButton />
      <LoginButton />
    </div>

    <p>"While visiting with Diane, this summer of 1988, she asked me to write down a kind of biography for all six of you, brothers and sisters. As I started to recall some of the events of years past and sorted through old photographs this kind of grew and grew and became more interesting. So this is to all of you but dedicated to Diane for giving me that extra push to get started." – Graydon Peoples
    </p>
    <p>Between 1988 and 2000, Graydon Peoples wrote 300 pages of memoirs remembering his very full life. Explore his history through AI with "GrAIdon", an AI agent trained on the full text of his memoirs and other historical information. </p>
    <p>Ask it questions about his life, growing up, experiences, stories and vacations with his children, his career, boating, grandkids. </p>
  
  </div>
</template>

<script>
import MobileNavBarButtons from "@/components/navigation/mobile/mobile-nav-bar-buttons.vue";
import NavBarTabs from "@/components/navigation/desktop/nav-bar-tabs.vue";
import LoginButton from "@/components/buttons/login-button.vue";
import SignupButton from "@/components/buttons/signup-button.vue";

export default {
    components: { MobileNavBarButtons, NavBarTabs, LoginButton, SignupButton },
    data() {
      return {
        isAuthenticated: this.$auth0.isAuthenticated,
      };
    },
    methods: {
      routeToChat() {
        this.$router.push("/chat");
      },
      routeToPodcast() {
        window.location.href = "https://soundcloud.com/peepz/graydon-peoples-podcast";
      },
    },
};
</script>
