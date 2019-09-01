<template>
  <v-card v-bind="$attrs" :style="styles" v-on="$listeners" light raised>
    <helper-offset
      v-if="hasOffset"
      :inline="inline"
      :full-width="fullWidth"
      :offset="offset"
    >
      <v-card
        v-if="!$slots.offset"
        :color="color"
        :class="`elevation-${elevation}`"
        class="v-card--material__header"
        light
      >
        <template v-slot:header v-if="!title && !text" />
        <span v-else>
          <h4 v-text="title" class="title font-weight-light mb-2" />
          <p v-text="text" class="category font-weigth-thin" />
        </span>
      </v-card>
      <template v-slot v-else name="offset" />
    </helper-offset>
    <v-card-title v-text="title"></v-card-title>
    <v-card-text>
      <p v-text="text" />
      <template v-slot />
    </v-card-text>
    <v-divider v-if="$slots.actions" class="mx-3" />
    <v-card-actions v-if="$slots.actions">
      <template v-slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HelperOffset from "@/components/helper/Offset.vue";

@Component({
  components: {
    HelperOffset
  }
})
export default class MaterialCard extends Vue {
  name: string = "MaterialCard";
  color: string = "secondary";
  elevation: number | string = 10;
  inline: boolean = false;
  fullWidth: boolean = false;
  offset: number | string = 24;
  @Prop({ type: String, default: undefined })
  title: string | undefined;
  @Prop({ type: String, default: undefined })
  text: string | undefined;
  public get hasOffset(): any {
    return this.$slots.header || this.$slots.offset || this.title || this.text;
  }
  public get styles(): object {
    const top = Number(this.offset) * 2;
    const bottom = this.offset;

    return {
      marginTop: `${top}px`,
      marginBottom: `${bottom}px`
    };
  }
}
</script>

<style lang="scss">
.v-card--material {
  &__header {
    &.v-card {
      border-radius: 4px;
    }
  }
}
</style>
