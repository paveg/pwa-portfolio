<template>
  <div :style="styles" :class="classes" class="v-offset">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelperOffset extends Vue {
  name: string = "HelperOffset";
  fullWidth: boolean = false;
  offset: number | string = 0;
  public get classes(): object {
    return {
      "v-offset--full-width": this.fullWidth
    };
  }

  public get styles(): object | null {
    // @ts-ignore
    if (!this.hasOffset) return null;

    return {
      top: `-${this.offset}px`,
      marginBottom: `-${this.offset}px`
    };
  }
}
</script>

<style lang="scss">
.v-offset {
  margin: 0 auto;
  max-width: calc(100% - 32px);
  position: relative;
}
.v-offset--full-width {
  max-width: 100%;
}
</style>
