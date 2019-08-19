<template>
  <v-card :style="styles" exact light raised>
    <v-card class="v-card--material__header"></v-card>
    <v-card-title v-text="textTitle" />
    <p v-text="text" class="text-area" />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "MaterialCard",
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
    },
    textTitle: {
      type: String,
      default: undefined
    }
  },
  computed: {
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

<style scoped lang="scss">
.theme--light.v-card {
  margin-right: 15px;
}
.v-card--material {
  &__header {
    &.v-card {
      border-radius: 4px;
    }
  }
}
.text-area {
  padding: 5px;
}
</style>
