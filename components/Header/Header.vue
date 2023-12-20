<template>
  <header class="bg-white">
    <div
      class="container mx-auto flex items-center justify-between p-4 lg:py-8"
    >
      <a href="/" aria-label="Zur Startseite">
        <img src="/img/bregtec_logo_color.svg" alt="" class="h-10 lg:h-16" />
      </a>

      <!-- Contact Info -->
      <ul class="hidden gap-8 lg:flex">
        <li>
          <a href="tel:+41817561530" class="font-display text-sm uppercase">
            <font-awesome-icon
              icon="fa-solid fa-phone"
              class="mr-2 text-secondary"
            />+41&nbsp;817&nbsp;561&nbsp;530</a>
        </li>
        <li>
          <a
            href="https://www.bregtec.com"
            class="font-display text-sm uppercase"
          >
            <font-awesome-icon
              icon="fa-solid fa-house"
              class="mr-2 text-secondary"
            />
            www.bregtec.com</a
          >
        </li>
        <li>
          <a
            href="mailto:info@bregtec.com"
            class="font-display text-sm uppercase"
          >
            <font-awesome-icon
              icon="fa-solid fa-envelope"
              class="mr-2 text-secondary"
            />
            info@bregtec.com</a
          >
        </li>
      </ul>

      <button
        class="px-4 py-2 lg:hidden"
        id="header-mobile-menutoggle"
        aria-label="Navigation öffnen"
        type="button"
        @click="toggleMenu"
      >
        <font-awesome-icon icon="fa-solid fa-bars" class="text-xl" />
      </button>
    </div>

    <div
      id="header-navigation"
      class="fixed top-0 z-[1000] flex h-full w-72 flex-col bg-primary transition-[left] duration-500 lg:relative lg:left-auto lg:top-auto lg:w-full lg:bg-secondary"
      :class="isMenuOpen ? 'left-0' : '-left-full'"
      :aria-hidden="!isMenuOpen && isMobile"
    >
      <div class="flex-1 px-4 pt-5 lg:pt-0">
        <img src="/img/bregtec_logo_white.svg" alt="" class="h-10 lg:hidden" />

        <nav class="mt-8 uppercase text-white lg:container lg:mx-auto lg:mt-0">
          <ul class="flex flex-col lg:flex-row">
            <li>
              <a href="/" class="block py-3 font-display lg:px-6 lg:py-4"
                >Home</a
              >
            </li>
            <li>
              <a
                href="/produkte"
                class="block py-3 font-display lg:px-6 lg:py-4"
                >Produkte</a
              >
            </li>
            <li>
              <a
                href="/dienstleistungen"
                class="block bg-primary py-3 font-display lg:px-6 lg:py-4"
                >Dienstleistungen</a
              >
            </li>
            <li>
              <a
                href="/unternehmen"
                class="block py-3 font-display lg:px-6 lg:py-4"
                >Unternehmen</a
              >
            </li>
            <li>
              <a href="/kontakt" class="block py-3 font-display lg:px-6 lg:py-4"
                >Kontakt</a
              >
            </li>
            <li>
              <a href="/news" class="block py-3 font-display lg:px-6 lg:py-4"
                >News</a
              >
            </li>
            <li>
              <a
                href="/downloads"
                class="block py-3 font-display lg:px-6 lg:py-4"
                >Downloads</a
              >
            </li>
          </ul>
        </nav>
      </div>

      <ul class="flex w-full justify-between gap-[2px] lg:hidden">
        <li class="w-1/4">
          <button
            class="grid h-full w-full place-items-center bg-[#3A4A5C] p-5"
            aria-label="Suche öffnen"
            type="button"
          >
            <font-awesome-icon
              icon="fa-solid fa-magnifying-glass"
              class="text-secondary"
            />
          </button>
        </li>
        <li class="w-1/4">
          <a
            href="tel:+41817561530"
            class="grid h-full w-full place-items-center bg-[#3A4A5C] p-5"
            aria-label="Bei Bregtec anrufen"
          >
            <font-awesome-icon
              icon="fa-solid fa-phone"
              class="text-secondary"
            />
          </a>
        </li>
        <li class="w-1/4">
          <a
            href="/"
            class="grid h-full w-full place-items-center bg-[#3A4A5C] p-5"
            aria-label="Zurück zur Startseite"
          >
            <font-awesome-icon
              icon="fa-solid fa-house"
              class="text-secondary"
            />
          </a>
        </li>
        <li class="w-1/4">
          <a
            href="mailto:info@bregtec.com"
            class="grid h-full w-full place-items-center bg-[#3A4A5C] p-5"
            aria-label="Per E-Mail kontaktieren"
          >
            <font-awesome-icon
              icon="fa-solid fa-envelope"
              class="text-secondary"
            />
          </a>
        </li>
      </ul>

      <button
        id="header-mobile-menuclose"
        class="absolute right-2 top-3 p-4 lg:hidden"
        aria-label="Navigation schliessen"
        type="button"
        @click="toggleMenu"
      >
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          class="text-2xl text-white"
        />
      </button>
    </div>

    <span
      id="header-mobile-navigation-backdrop"
      class="fixed left-0 top-0 z-[999] h-screen w-screen bg-black opacity-50 lg:hidden"
      :class="isMenuOpen ? 'block' : 'hidden'"
    ></span>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
const isMobile = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const checkIsMobile = () => {
  isMobile.value = window.innerWidth < 768; // You can adjust the breakpoint as needed
};

// onMounted(() => {
//   window.addEventListener('resize', checkIsMobile);
//   checkIsMobile();
// });

// onBeforeUnmount(() => {
//   window.removeEventListener('resize', checkIsMobile);
// });

</script>
