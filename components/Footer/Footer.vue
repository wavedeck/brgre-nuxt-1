<template>
  <footer id="main-footer">
    <div class="bg-[#2E2E29] py-12" id="footer-row-1">
      <div class="container mx-auto flex items-end">
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
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-tiktok"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>

          <ul class="mt-8 hidden gap-8 lg:flex">
            <li>
              <a
                href="tel:+41817561530"
                class="font-display text-sm uppercase text-white"
                ><i class="fas fa-phone mr-2 text-secondary"></i>+41 81 756 15
                30</a
              >
            </li>
            <li>
              <a
                href="https://www.bregtec.com"
                class="font-display text-sm uppercase text-white"
                ><i class="fas fa-home mr-2 text-secondary"></i
                >www.bregtec.com</a
              >
            </li>
            <li>
              <a
                href="mailto:info@bregtec.com"
                class="font-display text-sm uppercase text-white"
                ><i class="fas fa-envelope mr-2 text-secondary"></i
                >info@bregtec.com</a
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
    <div class="bg-[#494941]" id="footer-row-2">
      <div class="container mx-auto flex justify-end">
        <ul class="flex gap-8">
          <li>
            <a
              href="/impressum"
              class="inline-block py-2 font-display text-sm uppercase text-white"
              >Impressum</a
            >
          </li>
          <li>
            <a
              href="/datenschutzerklaerung"
              class="inline-block py-2 font-display text-sm uppercase text-white"
              >DSGVO</a
            >
          </li>
          <li>
            <a
              href="/kontakt"
              class="inline-block py-2 font-display text-sm uppercase text-white"
              >Kontakt</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>