import VueTheme from "./index";
import Heading from "./components/Heading.vue";

const VueThemeInstall = function(Vue: any) {
  Object.defineProperty(Vue.prototype, "$theme", {
    get: function() {
      return new VueTheme();
    }
  });

  Vue.component(Heading.name, Heading);
};
export default VueThemeInstall;
