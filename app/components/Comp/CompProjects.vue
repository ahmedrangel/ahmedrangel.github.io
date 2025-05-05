<script setup>
const projectsOrdered = computed(() => {
  return sortProjects(PROJECTS);
});

const lang = useState("lang");
</script>

<template>
  <div id="projects">
    <h3 class="fw-bold mb-4" data-aos="fade-right">{{ t("projects") }}</h3>
    <MasonryWall :items="projectsOrdered" :ssr-columns="1" :gap="16" :max-columns="2" :column-width="400" data-aos="fade-in">
      <template #default="{ item: projects }">
        <div :id="projects.id" class="card overflow-hidden bg-card shadow border-top border-start border-end">
          <img v-if="projects?.images?.length === 1" :src="`/images/${projects.images[0]}`" class="card-img-top border-bottom border-1" alt="" data-aos="fade-in">
          <div v-else class="carousel slide carousel-fade border-bottom border-1" data-bs-ride="carousel">
            <div class="carousel-indicators mb-2">
              <div class="px-2 rounded-1 d-flex bg-indicator">
                <button v-for="(image, i) of projects.images" :key="i" type="button" class="btn-indicator" :data-bs-target="`#${projects.id} .carousel`" :data-bs-slide-to="i" :class="{ active: !i }" aria-current="true" :aria-label="`${projects.title} ${i + 1}`" />
              </div>
            </div>
            <div class="carousel-inner">
              <div v-for="(image, i) of projects.images" :key="i" class="carousel-item" :class="{ active: !i }" data-bs-interval="7000">
                <img :src="`/images/${image}`" class="card-img-top d-block w-100" data-aos="fade-in">
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="d-flex align-items-center mb-2 gap-1" data-aos="fade-right">
              <span v-if="projects.type" :title="projectTypes.find(el => el.value === projects.type).title" class="d-flex">
                <Icon class="h5 m-0" :name="projectTypes.find(el => el.value === projects.type).icon" height="22" />
              </span>
              <NuxtLink :to="projects.url || projects.repository" target="_blank" class="text-primary fw-bold d-inline-block">
                <h5 class="m-0 fw-bold">
                  {{ projects.name }}
                </h5>
              </NuxtLink>
            </div>
            <p class="m-0 small">{{ t("months")[projects.start_month - 1] }} {{ projects.start_year }} — {{ t("months")[projects.end_month - 1] }} {{ projects.end_year }}</p>
            <div class="my-2" data-aos="fade-left">
              <!-- eslint-disable-next-line vue/no-v-html, vue/no-v-html -->
              <p v-html="lang === 'en' ? projects.desc_en : projects.desc_es" />
              <ul v-if="projects?.desc_li_en?.length || projects?.desc_li_es?.length">
                <li v-for="(li, index2) of lang === 'en' ? projects.desc_li_en : projects.desc_li_es" :key="index2">
                  <!-- eslint-disable-next-line vue/no-v-html, vue/no-v-html -->
                  <span v-html="li" />
                </li>
              </ul>
            </div>
            <div class="d-flex gap-2 flex-wrap" data-aos="fade-right">
              <small v-for="(tags, index3) of projects.tags" :key="index3" class="border px-2 py-1 text-nowrap rounded-2">
                {{ tags }}
              </small>
            </div>
          </div>
          <div class="card-footer p-0 d-flex gap-1 border-0">
            <NuxtLink v-if="projects.repository" class="rounded-0 bg-secondary w-100 fw-bold text-white d-flex gap-1 justify-content-center align-items-center border-0 border-bottom border-top h6 m-0 py-2" target="_blank" :to="projects.repository">
              <Icon name="simple-icons:github" size="1.2em" />
              {{ t("repository") }}
            </NuxtLink>
            <NuxtLink v-if="projects.url" class="rounded-0 bg-primary w-100 fw-bold text-color-inverted d-flex gap-1 justify-content-center align-items-center border-0 border-bottom border-top h6 m-0 py-2" target="_blank" :to="projects.url">
              <Icon name="ic:round-launch" size="1.2em" />
              <span>{{ t("view") }}</span>
            </NuxtLink>
          </div>
        </div>
      </template>
    </MasonryWall>
  </div>
</template>
