<script setup>
import Header from '../components/header.vue'
</script>

<template>
    <div>
      <AppHeader />
      <Header />
      <slot />
      <AppFooter />
    </div>
  </template>