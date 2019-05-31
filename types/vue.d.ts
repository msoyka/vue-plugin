import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $theme: any;
  }
}
