<template>
  <v-card exact light raised>
    <v-card class="v-card--material__header"></v-card>
    <p v-text="text" />
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
</style>
