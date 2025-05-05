<template>
  <div id="about" class="pt-5">
    <h3 class="fw-bold mb-4" data-aos="fade-right">{{ t("about_me") }}</h3>
    <div class="row justify-content-center g-4">
      <div class="col-12 col-md-3 pb-3">
        <div class="ps-0 pe-3">
          <div class="position-relative" data-aos="fade-in" data-aos-duration="900">
            <img class="img-fluid w-100" src="/images/ar-profile.jpg">
            <div class="profile-image position-absolute w-100 h-100 border" />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-9" data-aos="fade-left">
        <p>{{ t("bio") }}</p>
        <div class="row gy-3 align-items-end">
          <div class="col-lg-6 col-md-6 d-flex align-items-center">
            <Icon class="iconify me-2" name="ph:graduation-cap-duotone" />
            <span>{{ t("degree") }}</span>
          </div>
          <div class="col-lg-6 col-md-6 d-flex align-items-center">
            <Icon class="iconify me-2" name="ph:cake-duotone" />
            <span>{{ INFO.birthday }} ({{ ageCalc(INFO.birthday) }} {{ t("years_old") }})</span>
          </div>
          <div class="col-lg-6 col-md-6 d-flex align-items-center">
            <Icon class="iconify me-2" name="ph:map-pin-duotone" />
            <span>{{ t("address") }}</span>
          </div>
          <div class="col-lg-6 col-md-6 d-flex align-items-center">
            <Icon class="iconify me-2" name="ph:envelope-simple-duotone" />
            <NuxtLink :to="`mailto:${INFO.email}`" target="_blank">{{ INFO.email }}</NuxtLink>
          </div>
          <div class="col-lg-6 col-md-6 d-flex align-items-center">
            <div v-for="(socials, index) of INFO.socials" :key="index">
              <NuxtLink :to="socials.url" target="_blank" class="socials-icons">
                <Icon class="iconify me-2" :name="socials.icon" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
