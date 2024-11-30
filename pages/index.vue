<script setup>
import { ref, onMounted } from "vue";
const slogan = ref(null);
const { $typed } = useNuxtApp();
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init();
});

onMounted(() => {
  new $typed(slogan.value, {
    strings: [
      "Web Developer",
      "Student",
      "Tech Enthusiast",
      "Photographer",
    ],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 3000,
    loop: true,
  });
});
</script>

<template>
  <section
    id="home"
    class="pt-24 pb-8 bg-light dark:bg-dark dark:text-white transition-colors min-h-screen overflow-hidden"
  >
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full self-center px-4 lg:w-1/2" data-aos="fade-up">
          <h1 class="text-base font-semibold md:text-lg lg:text-xl">
            Hello World! I'm
            <span
              class="text-primary text-4xl block lg:text-6xl dark:text-blue-400"
              >byntang<span class="rgb">xyz</span></span
            >
          </h1>
          <span ref="slogan" class="rgb text-3xl font-bold lg:text-5xl"></span>
          <p class="font-medium text-slate-500 mb-10 md:text-lg lg:text-xl">
            I'm just an ordinary human, nothing special
            <NuxtLink href="/about" class="text-blue-400">about me</NuxtLink>!
          </p>
          <NuxtLink
            href="/portfolio"
            class="text-base font-semibold text-white bg-blue-500 py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-200 ease-in-out"
            >View My Stats</NuxtLink
          >
        </div>

        <div class="w-full self-end px-4 lg:w-1/2" data-aos="fade-up">
          <div class="relative mt-10 lg:right-0 lg:mt-9">
            <div class="p-4 mx-auto">
              <div class="flex flex-wrap">
                <NuxtImg
                  src="img/pfp1.png"
                  alt="photo-profile"
                  width="280px"
                  height="280px"
                  class="max-w-full mx-auto rounded-lg relative bg-white dark:bg-slate-200 shadow-2xl p-2 pb-6 lg:w-[400px]"
                />
              </div>
              <p class="text-center text-slate-500">-Bintang Maulana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
