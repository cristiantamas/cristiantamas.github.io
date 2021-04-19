<template>
  <section
    id="header" 
    class="h-16 flex p-10"
  >
    <!-- Name-->
    <a 
      class="flex flex-1 flex-wrap content-center text-2xl mr-5 text-gray-300 hover:text-gray-100"
      href="https://cristiantamas.github.io"
    > 
      &lt; Cristian Tamas /&gt;
    </a>

    <!-- Github icon -->
    <a
      class="flex flex-wrap content-center pr-5 text-gray-300 hover:text-gray-100"
      href="https://github.com/cristiantamas"
      target="_blank"
    >
        <i class="fab fa-github fa-2x"></i>
    </a>

    <!-- LinkedIn icon -->
    <a
      class="flex flex-wrap content-center text-gray-300 hover:text-gray-100"
      href="https://www.linkedin.com/in/cristian-tamas/"
      target="_blank"
    >
        <i class="fab fa-linkedin fa-2x" />
    </a>
  </section>
</template>

<script>
export default {
  name: 'Header'
}
</script>