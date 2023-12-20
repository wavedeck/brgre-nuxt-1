<template>
  <header id="main-header">
    <div class="header-row-1 container mx-auto">
      <!-- Logo -->
      <a href="/" aria-label="Zur Startseite">
        <img src="/img/bregtec_logo_color.svg" alt="" class="h-10 lg:h-16" />
      </a>

      <!-- Contact Info -->
      <ul class="contact-info">
        <li>
          <a href="tel:+41817561530" class="contact-info__link">
            <font-awesome-icon
              icon="fa-solid fa-phone"
              class="mr-2 text-secondary"
            />
            +41 81 756 15 30
          </a>
        </li>
        <li>
          <a href="https://www.bregtec.com" class="contact-info__link">
            <font-awesome-icon
              icon="fa-solid fa-house"
              class="mr-2 text-secondary"
            />
            www.bregtec.com
          </a>
        </li>
        <li>
          <a href="mailto:info@bregtec.com" class="contact-info__link">
            <font-awesome-icon
              icon="fa-solid fa-envelope"
              class="mr-2 text-secondary"
            />
            info@bregtec.com
          </a>
        </li>
      </ul>

      <!-- MobileMenuToggle -->
      <button
        id="header-mobile-menutoggle"
        aria-label="Navigation öffnen"
        type="button"
        @click="toggleMenu"
      >
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
    </div>


    <div
      id="header-navigation"
      :class="isMenuOpen ? 'open' : ''"
      :aria-hidden="!isMenuOpen && isMobile"
    >
      <div class="flex-1 px-4 pt-5 lg:pt-0">
        <img
          src="/img/bregtec_logo_white.svg"
          alt=""
          class="header-navigation__logo"
        />

        <nav class="header-navigation__nav container">
          <ul class="header-navigation__navlist">
            <li v-for="item in navItems">
              <NuxtLink
                :to="item.url"
                class="header-navigation__navlink"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <!-- MobileActions -->
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

      <!-- MobileMenuToggle -->
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

const navItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Produkte",
    url: "/produkte",
  },
  {
    label: "Dienstleistungen",
    url: "/dienstleistungen",
  },
  {
    label: "Unternehmen",
    url: "/unternehmen",
  },
  {
    label: "Kontakt",
    url: "/kontakt",
  },
  {
    label: "News",
    url: "/news",
  },
  {
    label: "Downloads",
    url: "/downloads",
  },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const checkIsMobile = () => {
  isMobile.value = window.innerWidth < 768; // You can adjust the breakpoint as needed
};

onMounted(() => {
  window.addEventListener("resize", checkIsMobile);
  checkIsMobile();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkIsMobile);
});
</script>
