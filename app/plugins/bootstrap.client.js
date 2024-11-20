import Collapse from "bootstrap/js/dist/collapse";
import Carousel from "bootstrap/js/dist/carousel";
import Tab from "bootstrap/js/dist/tab";

class Bootstrap {
  toogleCollapse (el) {
    const bsCollapse = new Collapse(el);
    bsCollapse.toggle();
  }

  startAllCarousel () {
    const carousels = document.querySelectorAll(".carousel");
    for (const carousel of carousels) {
      const carouselInstance = new Carousel(carousel);
      carouselInstance.cycle();
    }
  }

  initializeTab () {
    const tab = new Tab(".nav-tabs");
    tab.show();
  }
}

const bootstrap = new Bootstrap();

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:suspense:resolve", () => {
    bootstrap.startAllCarousel();
  });
  return {
    provide: { bootstrap }
  };
});
