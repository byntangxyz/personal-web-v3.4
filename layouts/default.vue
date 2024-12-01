<script setup>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
</script>

<template>
    <div>
      <AppHeader />
      <Header />
      <slot />
      <Footer />
      <AppFooter />
    </div>
  </template>