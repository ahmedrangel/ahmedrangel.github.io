<script setup lang="ts">
defineProps<{
  data: Contributions["prs"][number];
}>();

function mapIcons (state: PullRequest["state"]) {
  switch (state) {
    case "open": return "octicon:git-pull-request-24";
    case "merged": return "octicon:git-merge-24";
    case "draft": return "octicon:git-pull-request-draft-24";
    case "closed": return "octicon:git-pull-request-closed-24";
    default: return "octicon:git-pull-request-24";
  }
}
</script>

<template>
  <GitHubContributionsContainer class="pt-4" :data="data">
    <Icon
      :name="mapIcons(data.state)"
      :class="{
        'text-green': data.state === 'open',
        'text-grasy': data.state === 'draft',
        'text-indigo': data.state === 'merged',
        'text-red': data.state === 'closed',
      }"
      class="fw-bold flex-shrink-0"
      size="1.2em"
    />
  </GitHubContributionsContainer>
</template>
