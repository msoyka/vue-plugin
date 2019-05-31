<template>
  <component :is="tag" :class="dynamicClass">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Heading extends Vue {
  @Prop() private tag!: string;
  @Prop() private size?: string;

  headingSize = this.size || "1";

  get dynamicClass() {
    return `heading-${this.headingSize}`;
  }
}
</script>

<style scoped lang="scss">
.heading-1 {
  color: red;
}

.heading-2 {
  color: blue;
}

.heading-3 {
  color: green;
}

.heading-4 {
  color: yellow;
}

.heading-5 {
  color: purple;
}

.heading-6 {
  color: lightcoral;
}
</style>
