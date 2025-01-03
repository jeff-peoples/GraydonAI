<template>
  <PageLayout>
    <div class="content-layout p-0 pt-md-4 p-md-5 pb-md-0">
      <!-- <h1 id="page-title" class="content__title">
        Chat
      </h1> -->
      <div class="content__body">
        <!-- <p id="page-description">
          <span>
            This page retrieves a <strong>protected message</strong> from an
            external API.
            </span>
          <span>
            <strong>Only authenticated users can access this page.</strong>
          </span>
        </p> -->
        <!-- <CodeSnippet title="Protected Message" :code="message" /> -->
        <div class="chatwindow">

          <div class="messages" ref="messagespane">
            <div class="message" v-for="message in messages" :key="message.id" :ref="'message' + message.id">
              <div class="who">{{ message.who }}</div>
              {{ message.text }}
            </div>
            <Spinner invertedstate class="m-auto" v-if="senddisabled"/>
          </div>

          
          <div class="d-flex flex-column bottom mt-auto">
            <div class="mt-5 mt-md-4">
              <div class="d-inline-flex autobuttons align-self-end" @click="autoPrompt('Suggest some topics and questions')">Suggest some topics</div>
              <div class="d-inline-flex autobuttons align-self-end" @click="autoPrompt('Choose randomly a fact or experience from Graydon\'s memoirs')">Randomly tell me something</div>
            </div>
            <div class="d-flex chatbox">
              <div class="d-flex flex-column input w-100"> 
                  <textarea placeholder="Type a message..." v-model="prompt" :disabled="senddisabled" @keyup.enter="sendMessage()"/>
                <button class="align-self-end" @click="sendMessage()" :disabled="senddisabled" :class="{ senddisabled: 'processing'}">{{ buttontext }}</button>
              </div>
          </div>
          </div>

        </div>

      </div>
    </div>
  </PageLayout>
</template>

<script>
import CodeSnippet from "@/components/code-snippet.vue";
import PageLayout from "@/components/page-layout.vue";
import { getChatCompletion } from "@/services/message.service";
import Spinner from '@/components/Spinner/Spinner.vue';

export default {
  components: {
    PageLayout,
    CodeSnippet,
    Spinner
  },
  data() {
    return {
      senddisabled: false,
      message: "",
      prompt: "",
      buttontext: "Send",
      user: this.$auth0.user,  
      messages: [
        {
          id: 1,
          who: "GrAIdon",
          text: "Hello, I'm GrAIdon. I'm an AI trained on the full text of Graydon Peoples memoirs. Ask me anything about the 300 pages he wrote - His life, growing up, stories and vacations with his children, his career, boating, grandkids. For example, 'What was your experience like at Iowa State University?'",
        },
        {
          id: 2,
          who: "GrAIdon",
          text: "You can also type 'Suggest some topics and questions for me to ask you about.'",
        },                                       
      ]
    };
  },
  async mounted() {
  },
  methods: {
    autoPrompt(prompt) {
      this.prompt = prompt;
      this.sendMessage();
    },
    scrollToLatestMessage() {
      this.$nextTick(() => {
        const messagesPane = this.$refs.messagespane;
        const newMessage = this.$refs['message' + (this.messages.length - 1)][0];
        messagesPane.scrollTop = (newMessage.offsetTop - 100);
      });
    },
    async sendMessage() {

      this.senddisabled = true
      this.buttontext = "Thinking..."

      this.messages.push({
        id: this.messages.length + 1,
        who: "You",
        text: this.prompt,
      });

      this.scrollToLatestMessage();      

      const accessToken = await this.$auth0.getAccessTokenSilently();
      const { data, error } = await getChatCompletion(this.prompt, this.user.email, accessToken);

      if (data) {

        this.message = JSON.stringify(data, null, 2);
          this.messages.push({
          id: this.messages.length + 1,
          who: "GrAIdon",
          text: data.text,
        });

        this.scrollToLatestMessage();

        this.senddisabled = false
        this.buttontext = "Send"
        this.prompt = "";
      } else {
        console.log("Nothing returned from API server")
      }

      if (error) {
        alert(JSON.stringify(error, null, 2));
        this.senddisabled = false
        this.buttontext = "Send"
        return
      }
      
    },
  },
};
</script>
