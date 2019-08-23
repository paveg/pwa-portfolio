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
import Vue from "vue";
import HelperOffset from "@/components/helper/Offset.vue";
export default Vue.extend({
  name: "MaterialCard",
  components: {
    HelperOffset
  },
  props: {
    color: {
      type: String,
      default: "secondary"
    },
    elevation: {
      type: [Number, String],
      default: 10
    },
    inline: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    offset: {
      type: [Number, String],
      default: 24
    },
    title: {
      type: String,
      default: undefined
    },
    text: {
      type: String,
      default: undefined
    }
  },
  computed: {
    hasOffset() {
      return (
        // @ts-ignore
        this.$slots.header || this.$slots.offset || this.title || this.text
      );
    },
    styles() {
      const top = Number(this.offset) * 2;
      const bottom = this.offset;

      return {
        marginTop: `${top}px`,
        marginBottom: `${bottom}px`
      };
    }
  }
});
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
