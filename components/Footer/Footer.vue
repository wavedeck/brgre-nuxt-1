import { NuxtLink } from '#build/components';
<template>
  <footer id="main-footer">
    <div class="footer-row-1">
      <div class="footer-row-1__inner container mx-auto">
        <div class="flex-1">
          <img src="/img/bregtec_logo_white.svg" alt="" class="h-12" />

          <div class="mt-4 flex gap-8 text-white">
            <div>
              <p class="font-display text-sm uppercase text-white">
                Bregtec GmbH<br />
                Langäulistrasse 9<br />
                9470 Buchs<br />
                SCHWEIZ
              </p>
            </div>
            <div>
              <ul class="flex gap-2">
                <li>
                  <a href="#">
                    <font-awesome-icon icon="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <font-awesome-icon icon="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <font-awesome-icon icon="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <font-awesome-icon icon="fab fa-tiktok" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <font-awesome-icon icon="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <ul class="footer-contactinfo">
            <li>
              <a
                href="tel:+41817561530"
                class="font-display text-sm uppercase text-white"
              >
                <font-awesome-icon icon="fas fa-phone" />+41 81 756 15 30</a
              >
            </li>
            <li>
              <a
                href="https://www.bregtec.com"
                class="font-display text-sm uppercase text-white"
              >
                <font-awesome-icon icon="fas fa-home" />www.bregtec.com</a
              >
            </li>
            <li>
              <a
                href="mailto:info@bregtec.com"
                class="font-display text-sm uppercase text-white"
              >
                <font-awesome-icon icon="fas fa-envelope" />info@bregtec.com</a
              >
            </li>
          </ul>
        </div>
        <div>
          <a href="#" class="bregtec-button w-full bg-secondary text-black"
            >Jetzt Kontaktieren</a
          >
          <a href="#" class="bregtec-button mt-4 w-full bg-secondary text-black"
            >Jetzt Termin vereinbaren</a
          >
        </div>
      </div>
    </div>
    <div class="footer-row-2">
      <div class="footer-row-2__inner container mx-auto">
        <ul class="flex gap-8">
          <li>
            <NuxtLink
              to="/impressum"
              class="inline-block py-2 font-display text-sm uppercase text-white"
              >Impressum</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/datenschutzerklaerung"
              class="inline-block py-2 font-display text-sm uppercase text-white"
              >DSGVO</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/kontakt"
              class="inline-block py-2 font-display text-sm uppercase text-white"
              >Kontakt</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
