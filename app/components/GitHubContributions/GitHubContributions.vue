<script setup lang="ts">
const data = ref<Contributions | null>();

onMounted(async () => {
  data.value = await $fetch<Contributions>("https://contribs.ahmedrangel.com/api/contributions").catch(() => null);
});

const prsSlice = ref(20);
const issSlice = ref(20);

const prs = computed(() => data.value?.prs.slice(0, prsSlice.value) || []);
const issues = computed(() => data.value?.issues.slice(0, issSlice.value) || []);
</script>

<template>
  <div v-if="data" class="border border-top-0 rounded-2 shadow overflow-hidden">
    <ul class="nav nav-pills nav-justified gap-1">
      <li class="nav-item m-0 h5">
        <button class="nav-link active rounded-top rounded-end-0 rounded-bottom-0 border-top fw-bold" data-bs-toggle="pill" data-bs-target="#pills-prs">Pull Requests</button>
      </li>
      <li class="nav-item m-0 h5">
        <button class="nav-link rounded-top rounded-start-0 rounded-bottom-0 fw-bold border-top" data-bs-toggle="pill" data-bs-target="#pills-iss">Issues</button>
      </li>
    </ul>
    <div id="pills-tabContent" class="tab-content rounded-bottom-2" data-aos="fade-left">
      <div id="pills-prs" class="tab-pane fade show active" role="tabpanel">
        <div class="d-flex flex-column" style="gap: 2px">
          <GitHubContributionsPullRequests v-for="pr of prs" :key="pr.url" :data="pr" class="bg-card p-3 shadow" />
          <button v-if="prsSlice <= prs.length" class="bg-card p-3 shadow text-center btn rounded-0" @click="prsSlice += 20">Show more</button>
        </div>
      </div>
      <div id="pills-iss" class="tab-pane fade" role="tabpanel">
        <div class="d-flex flex-column" style="gap: 2px">
          <GitHubContributionsIssues v-for="iss of issues" :key="iss.url" :data="iss" class="bg-card p-3 shadow" />
          <button v-if="issSlice <= issues.length" class="bg-card p-3 shadow text-center btn rounded-0" @click="issSlice += 20">Show more</button>
        </div>
      </div>
    </div>
  </div>
</template>
