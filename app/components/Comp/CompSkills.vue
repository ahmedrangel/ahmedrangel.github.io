<template>
  <div id="skills">
    <h3 class="fw-bold mb-4" data-aos="fade-right">{{ t("main_skills") }}</h3>
    <table class="table table-borderless m-0 align-middle">
      <tbody>
        <tr v-for="(main_skills, index) of SKILLS" :key="index">
          <td class="col-3 text-center bg-primary m-2 rounded-2" data-aos="fade-right">
            <span class="fw-bold mb-0 text-color-inverted">{{ t(main_skills.skill_id) }}</span>
          </td>
          <td>
            <template v-for="(skills, index2) of main_skills.skills" :key="index2">
              <div class="d-inline-flex" data-aos="zoom-in">
                <span class="d-inline-flex align-items-center shadow m-1 px-2 py-2 text-nowrap rounded-2 bg-card h6 fw-normal">
                  <Icon class="iconify me-1" :name="skills.icon" size="1.2em" :style="{ width: '1em', color: skills?.color }" />{{ skills.name }}
                </span>
              </div>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
