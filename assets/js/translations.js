import i18next from "https://cdn.skypack.dev/i18next";
import Backend from "https://cdn.skypack.dev/i18next-http-backend";

/*==================== TRANSLATIONS ====================*/

i18next.use(Backend).init(
  {
    lng: "en",
    backend: {
      loadPath: "assets/utils/locales/{{lng}}/translation.json",
    },
  },
  () => {
    // Now translations are ready
    updateI18nContent();
  }
);

function updateI18nContent() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = i18next.t(el.getAttribute("data-i18n"));
  });
}

function changeLng(lng) {
  i18next.changeLanguage(lng, () => {
    updateI18nContent();
  });
}

window.changeLng = changeLng;
