<script setup lang="ts">
const data = ref<Contributions | null>();

onMounted(async () => {
  data.value = await $fetch<Contributions>("https://contribs.ahmedrangel.com/api/contributions").catch(() => null);
});
</script>

<template>
  <div v-if="data" class="border border-top-0 rounded-2 shadow overflow-hidden bg-card">
    <ul class="nav nav-pills nav-justified gap-1">
      <li class="nav-item m-0 h5">
        <button class="nav-link active rounded-top rounded-end-0 rounded-bottom-0 border-top fw-bold" data-bs-toggle="pill" data-bs-target="#pills-prs">Pull Requests</button>
      </li>
      <li class="nav-item m-0 h5">
        <button class="nav-link rounded-top rounded-start-0 rounded-bottom-0 fw-bold border-top" data-bs-toggle="pill" data-bs-target="#pills-iss">Issues</button>
      </li>
    </ul>
    <div id="pills-tabContent" class="tab-content px-3 pb-3 bg-card rounded-bottom-2" data-aos="fade-left">
      <div id="pills-prs" class="tab-pane fade show active" role="tabpanel">
        <GitHubContributionsPullRequests v-for="pr of data.prs.slice(0, 20)" :key="pr.url" :data="pr" />
      </div>
      <div id="pills-iss" class="tab-pane fade" role="tabpanel">
        <GitHubContributionsIssues v-for="iss of data.issues.slice(0, 20)" :key="iss.url" :data="iss" />
      </div>
    </div>
  </div>
</template>
