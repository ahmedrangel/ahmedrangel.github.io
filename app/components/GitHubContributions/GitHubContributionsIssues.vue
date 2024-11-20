<script setup lang="ts">
defineProps<{
  data: Contributions["issues"][number]
  ;
}>();

function mapIcons (state: Issues["state"]) {
  switch (state) {
    case "open": return "octicon:issue-opened-24";
    case "completed": return "octicon:issue-closed-24";
    case "not-planned": return "octicon:skip-24";
    default: return "octicon:issue-opened-24";
  }
}
</script>

<template>
  <GitHubContributionsContainer class="pt-4" :data="data">
    <Icon
      :name="mapIcons(data.state)"
      :class="{
        'text-green': data.state === 'open',
        'text-gray': data.state === 'not-planned',
        'text-indigo': data.state === 'completed',
      }"
      class="fw-bold flex-shrink-0"
      size="1.2em"
    />
  </GitHubContributionsContainer>
</template>
