<template>
  <section id="kontakt-hero" class="relative">
    <div class="hero-header">
      <div class="hero-header__content container mx-auto">
        <h1 class="hero-heading">
          <span class="hero-heading__inner">Was dürfen wir für Sie tun?</span>
        </h1>
      </div>
    </div>

    <div class="hero-description"></div>
  </section>

  <section id="kontakt-form" class="my-12">
    <div class="kontakt-content__wrapper container mx-auto px-4 lg:flex gap-4">
      <div class="kontakt-content__col1">
        <h2 class="kontakt-content__heading">Kontaktinformationen</h2>
        <div class="flex items-center gap-4">
          <font-awesome-icon icon="fas fa-phone text-white" />
          <a href="tel:+41817561530" class="font-display uppercase text-white"
            >+41 81 756 15 30</a
          >
        </div>
        <div class="my-2 flex items-center gap-4">
          <font-awesome-icon icon="fas fa-envelope text-white" />
          <a
            href="mailto:info@bregtec.com"
            class="font-display uppercase text-white underline"
            >info@bregtec.com</a
          >
        </div>
        <img src="/img/bregtec-company-sm.webp" alt="" />
        <div class="mt-4 flex items-start gap-4">
          <font-awesome-icon icon="fas fa-location-dot text-white" />
          <p class="font-display uppercase text-white">
            Bregtec GmbH<br /><br />
            Langäulistrasse 9<br />
            9470 Buchs, Schweiz<br /><br />
            Sie finden uns im 4. Obergeschoss.
          </p>
        </div>
      </div>
      <div class="kontakt-content__col2">
        <form action="/api/form/contactform" method="post">
          <div class="gap-4 md:flex">
            <div class="mb-4 md:w-1/2">
              <label for="contactform-gender" class="mb-2 block font-display"
                >Anrede</label
              >
              <select
                name="gender"
                id="contactform-gender"
                class="w-full border-b pb-2"
              >
                <option value="n" selected disabled>Bitte auswählen</option>
                <option value="m">Herr</option>
                <option value="f">Frau</option>
                <option value="o">Divers</option>
              </select>
            </div>
            <div class="mb-4 md:w-1/2">
              <label for="contactform-company" class="mb-2 block font-display"
                >Firma</label
              >
              <input
                type="text"
                name="company"
                id="contactform-company"
                class="w-full border-b pb-2"
              />
            </div>
          </div>
          <div class="gap-4 md:flex">
            <div class="mb-4 md:w-1/2">
              <label for="contactform-lastname" class="mb-2 block font-display"
                >Name</label
              >
              <input
                type="text"
                name="lastname"
                id="contactform-lastname"
                class="w-full border-b pb-2"
              />
            </div>
            <div class="mb-4 md:w-1/2">
              <label for="contactform-firstname" class="mb-2 block font-display"
                >Vorname</label
              >
              <input
                type="text"
                name="firstname"
                id="contactform-firstname"
                class="w-full border-b pb-2"
              />
            </div>
          </div>
          <div class="gap-4 md:flex">
            <div class="mb-4 md:w-1/2">
              <label for="contactform-email" class="mb-2 block font-display"
                >E-Mail</label
              >
              <input
                type="email"
                name="email"
                id="contactform-email"
                class="w-full border-b pb-2"
              />
            </div>
            <div class="mb-4 md:w-1/2">
              <label for="contactform-phone" class="mb-2 block font-display"
                >Telefon</label
              >
              <input
                type="tel"
                name="phone"
                id="contactform-phone"
                class="w-full border-b pb-2"
              />
            </div>
          </div>

          <div class="mb-4">
            <label for="contactform-regards" class="mb-2 block font-display"
              >Betreff</label
            >
            <select
              name="regards"
              id="contactform-regards"
              class="w-full border-b pb-2"
            >
              <option>Projektanfrage</option>
              <option>Terminvereinbarung Beratung und Verkauf</option>
              <option>Produktvorführung</option>
              <option>Gerätevermietung</option>
              <option>Service/Dienstleistung</option>
              <option>Onlineshop</option>
              <option>Sonstiges</option>
            </select>
          </div>

          <div>
            <label for="contactform-message" class="mb-2 block font-display"
              >Nachricht</label
            >
            <textarea
              name="message"
              id="contactform-message"
              class="w-full bg-[hsl(0,_0%,_85%)]"
              rows="8"
            ></textarea>
          </div>

          <button class="bregtec-button my-8 ml-auto" type="submit">Senden</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/pages/kontakt";

.kontakt-content__wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.kontakt-content__col1 {
  color: #fff;
  background-color: #ada48a;
  padding: 2rem;

  .kontakt-content__heading {
    text-transform: uppercase;
    font-family: "Exo", system-ui, sans-serif;
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
}

// MEDIA

@media screen and (min-width: 1024px) {

  .kontakt-content__wrapper {
    flex-direction: row;
}

  .kontakt-content__col1 {
    width: calc(36% - 2rem);
  }

  .kontakt-content__col2 {
    width: calc(64% - 2rem);
  }
}
</style>
