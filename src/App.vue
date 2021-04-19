<template>
    <section id="main" class="bg-backgroundColor">
      <Header />
      <Intro />
    </section>
</template>

<script>

import Header from './components/header/Header'
import Intro from './components/Intro'

export default {
  name: 'App',
  components: {
    Header,
    Intro
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
