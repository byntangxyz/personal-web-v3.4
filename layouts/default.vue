<script setup>
import Header from '../components/Header.vue'
</script>

<template>
    <div>
      <AppHeader />
      <Header />
      <slot />
      <AppFooter />
    </div>
  </template>