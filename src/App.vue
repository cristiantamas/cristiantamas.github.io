<template>
    <section id="main" class="h-screen bg-backgroundColor">
      <Header />
    </section>
</template>

<script>

import Header from './components/header/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
