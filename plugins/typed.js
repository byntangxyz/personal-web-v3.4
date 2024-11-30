import Typed from "typed.js";

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('typed', Typed);
});
