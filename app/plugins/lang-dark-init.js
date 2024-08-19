export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", () => {
    locale.lang.init();
    locale.dark.init();
  });
});
