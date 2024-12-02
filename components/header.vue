<script setup>
import { ref, onMounted, onBeforeUnmount, getCurrentInstance } from "vue";
import { PhMoonStars, PhSun } from "@phosphor-icons/vue";
import AOS from "aos";
import "aos/dist/aos.css";

const isNavVisible = ref(false);
const hamburger = ref(null);
const navMenu = ref(null);
const isDarkMode = ref(false);
const header = ref(null);
const toTop = ref(null);

// Fungsi untuk scroll ke atas
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Memantau scroll event
const onScroll = () => {
  const fixedNav = header.value.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.value.classList.add("navbar-fixed");
    toTop.value.classList.remove("hidden");
    toTop.value.classList.add("flex");
  } else {
    header.value.classList.remove("navbar-fixed");
    toTop.value.classList.remove("flex");
    toTop.value.classList.add("hidden");
  }
};

onMounted(() => {
  // Inisialisasi AOS
  AOS.init();

  // Tambahkan event scroll saat komponen dimuat
  window.addEventListener("scroll", onScroll);

  // Cek mode gelap yang disimpan di localStorage
  const savedMode = localStorage.getItem("darkMode") === "true";
  isDarkMode.value = savedMode;

  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  }

  // Tambahkan event listener untuk klik luar navbar
  window.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  // Hapus event listener saat komponen di-unmount
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("click", handleClickOutside);
});

function handleClickOutside(event) {
  if (
    hamburger.value &&
    navMenu.value &&
    !hamburger.value.contains(event.target) &&
    !navMenu.value.contains(event.target)
  ) {
    isNavVisible.value = false;
  }
}

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem("darkMode", isDarkMode.value); // Simpan ke Local Storage

  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
</script>

<template>
  <header
    ref="header"
    class="absolute top-0 left-0 w-full flex items-center z-10 transition-colors"
    data-aos="fade-down"
  >
    <div class="container">
      <div class="flex items-center justify-between relative">
        <div class="px-4">
          <NuxtLink
            href="/"
            class="font-bold text-3xl block py-6 px-4 text-primary dark:text-blue-400"
          >
            byntangxyz
          </NuxtLink>
        </div>

        <div class="flex items-center px-4 lg:px-1">
          <button
            @click="toggleDarkMode"
            class="px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-12 lg:mr-0"
          >
            <!-- Gunakan icon Sun untuk Light Mode dan Moon untuk Dark Mode -->
            <span v-if="isDarkMode">
              <PhMoonStars :size="32" />
            </span>
            <span v-else>
              <PhSun :size="32" />
            </span>
          </button>
          <button
            ref="hamburger"
            id="hamburger"
            name="hamburger"
            type="button"
            class="block absolute right-4 lg:hidden"
            @click="isNavVisible = !isNavVisible"
            :class="{ 'hamburger-active': isNavVisible }"
          >
            <span
              class="hamburger-line origin-top-left transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"
            ></span>
          </button>
          <nav
            ref="navMenu"
            id="nav-menu"
            :class="{ hidden: !isNavVisible }"
            class="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent text-center"
          >
            <ul class="block lg:flex">
              <li class="group">
                <NuxtLink
                  href="/"
                  class="text-base text-black py-2 mx-8 flex group-hover:text-blue-400 dark:text-white"
                  >Home</NuxtLink
                >
              </li>
              <li class="group">
                <NuxtLink
                  href="/portfolio"
                  class="text-base text-black py-2 mx-8 flex group-hover:text-blue-400 dark:text-white"
                  >Portfolio</NuxtLink
                >
              </li>
              <li class="group">
                <NuxtLink
                  href="/about"
                  class="text-base text-black py-2 mx-8 flex group-hover:text-blue-400 dark:text-white"
                  >About</NuxtLink
                >
              </li>
              <li class="group">
                <a
                  href="https://bxfundz.my.id"
                  target="_blank"
                  class="text-base text-black py-2 mx-8 flex group-hover:text-blue-400 dark:text-white"
                  >Blog</a
                >
              </li>
              <li class="group">
                <a
                  href="https://bxlinks.vercel.app"
                  target="_blank"
                  class="text-base text-black py-2 mx-8 flex group-hover:text-blue-400 dark:text-white"
                  >Links</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <!-- To Top Button -->
  <button
    ref="toTop"
    id="to-top"
    class="hidden fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full"
    @click="scrollToTop"
  >
    ↑
  </button>
</template>
