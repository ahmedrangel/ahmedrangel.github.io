<script setup lang="ts">
import { enUS, es } from "date-fns/locale";

const lang = useState("lang");
const locale = computed(() => (lang.value === "es" ? es : enUS));

defineProps<{
  data: Contributions["issues" | "prs"][number];
}>();

const formatStars = (stars: number) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(stars);
};
</script>

<template>
  <div class="d-flex align-items-center gap-2">
    <NuxtLink
      :to="`https://github.com/${data.repo}`"
      target="_blank"
      relative
      :class="['overflow-hidden shadow-sm flex-shrink-0', data.type === 'Organization' ? 'rounded-3' : 'rounded-circle']"
      style="width: 46px;"
    >
      <img :src="`https://github.com/${data.repo.split('/')[0]}.png`" :alt="data.repo" style="max-width: 46px; min-width: 46px;">
    </NuxtLink>
    <div class="d-flex justify-content-between gap-2 gap-lg-3" style="min-width: 0%; flex: 1 1 0;">
      <div class="d-flex flex-column gap-1 text-truncate">
        <NuxtLink :to="data.url" target="_blank" class="d-flex align-items-center gap-1 h6 m-0">
          <slot />
          <span class="text-truncate">{{ data.title }}</span>
        </NuxtLink>

        <div class="d-flex gap-2 align-items-end">
          <NuxtLink :to="`https://github.com/${data.repo}`" target="_blank" class="d-inline-flex gap-1 text-decoration-none h6 m-0 fw-normal">
            <span class="opacity-75">{{ data.repo?.split('/')[0] }}</span>
            <span class="opacity-50">/</span>
            <span class="text-truncate">{{ data.repo?.split('/')[1] }}</span>
          </NuxtLink>
          <div class="d-none d-md-flex gap-2">
            <NuxtLink :to="`https://github.com/${data.repo}`" target="_blank" class="text-muted align-items-center d-inline-flex gap-1 h6 m-0">
              <Icon name="octicon:star" />
              <span class="small">{{ formatStars(data.stars) }}</span>
            </NuxtLink>
            <NuxtLink :to="data.url" target="_blank" class="text-muted align-items-center d-inline-flex gap-1 h6 m-0">
              <Icon name="octicon:comment-24" />
              <span class="small">{{ data.comments }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column justify-content-between text-end">
        <NuxtLink :to="data.url" target="_blank" class="small">
          #{{ data.number }}
        </NuxtLink>

        <time :datatime="data.created_at" class="small text-muted text-nowrap">{{ distanceToNowStrict(new Date(data.created_at), { locale, addSuffix: true }) }}</time>
      </div>
    </div>
  </div>
</template>
