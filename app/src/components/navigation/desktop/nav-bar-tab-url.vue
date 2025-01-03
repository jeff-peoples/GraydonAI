<template>
  <a href="#"
    class="d-flex flex-row justify-content-center align-items-center nav-bar__tab"
    @click="goToUrl()">
    {{ label }}
  </a>
</template>

<script>
export default {
  props: {
    url: String,
    label: String,
  },
  methods: {
    goToUrl() {
        window.location.href = this.url;
      },    
  }    
};
</script>
