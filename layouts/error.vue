<template>
  <main>
    <div class="container">
      <h1 class="error-title" v-if="error.statusCode === 404">Page not found</h1>
      <h1 class="error-title" v-if="error.statusCode >= 500">Network error</h1>
      <nuxt-link to="/" class="">
        <span>Return to home page</span>
      </nuxt-link>
    </div>
  </main>
</template>
<script>
export default {
  name: 'NuxtError',
  props: {
    error: {  // <--- Send in the error
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: this.message // <--- Set the SEO title
    }
  },
  computed: {
    statusCode() {  // <--- Get the status code
      return (this.error && this.error.statusCode) || 500
    },
    message() {  // <--- Print the error
      return this.error.message
    }
  },
  layout: 'error'
};
</script>
