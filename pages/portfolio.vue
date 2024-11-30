<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <section id="portfolio" class="bg-slate-100 pt-36 pb-16 dark:bg-slate-800 overflow-hidden">
    <div class="container">
      <div class="w-full px-4">
        <div class="mx-auto mb-16 max-w-xl text-center" data-aos="fade-up">
          <h4 class="mb-2 text-lg font-semibold text-primary">Portfolio</h4>
          <h2
            class="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl"
          >
            Project Terbaru
          </h2>
        </div>
      </div>

      <div
        class="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12"
      >
        <a
          href="https://byntangxyz.github.io/alya-roshidere/"
          class="mb-12 p-4 md:w-1/2"
          data-aos="fade-up"
        >
          <div class="overflow-hidden rounded-md shadow-md">
            <NuxtImg src="/portfolio/Alya.png" alt="Alya Wiki" width="w-full" />
          </div>
          <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
            Alya Roshidere Wiki
          </h3>
          <p class="text-base font-medium text-secondary">
            Project html pertama saya tanpa framework apapun. Disini memuat
            informasi tentang Alissa Mikhailovna Kujuo atau Alya dari anime
            Roshidere.
          </p>
        </a>
        <a
          href="https://sijaarc.vercel.app"
          class="mb-12 p-4 md:w-1/2"
          data-aos="fade-up"
        >
          <div class="overflow-hidden rounded-md shadow-md">
            <img src="/portfolio/Sijaarc.png" alt="Sijaarc" width="w-full" />
          </div>
          <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
            Website Kelas SIJA ARC
          </h3>
          <p class="text-base font-medium text-secondary">
            Website kelas yang saya buat bersama teman sekelas. Website ini
            berisi informasi tentang kelas SIJA ARC dan dibuat dengan NextJs.
          </p>
        </a>
        <a
          href="https://hololive-id-gen3.vercel.app"
          class="mb-12 p-4 md:w-1/2"
          data-aos="fade-up"
        >
          <div class="overflow-hidden rounded-md shadow-md">
            <NuxtImg
              src="/portfolio/holoidg3.png"
              alt="Holoidg3"
              width="w-full"
            />
          </div>
          <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
            Hololive ID Gen 3 Web
          </h3>
          <p class="text-base font-medium text-secondary">
            Karena saya ketagihan react, akhirnya saya membuat web ini karena
            gabut. Ini adalah website berisi talent dan informasinya dari
            Hololive ID Gen 3.
          </p>
        </a>
        <a
          href="https://bxnime.vercel.app"
          class="mb-12 p-4 md:w-1/2"
          data-aos="fade-up"
        >
          <div class="overflow-hidden rounded-md shadow-md">
            <NuxtImg src="portfolio/bxnime.png" alt="bxnime" width="w-full" />
          </div>
          <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
            BxNime Anime List
          </h3>
          <p class="text-base font-medium text-secondary">
            Website anime list dengan menggunakan API dari MyAnimeList. Website
            ini dibuat dengan menggunakan React dan Typescript.
          </p>
        </a>
      </div>
    </div>
  </section>
</template>
