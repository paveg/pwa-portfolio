<template>
  <div>
    <h1>skill</h1>
    <div class="flex">
      <div class="career">
        <h2>Overview</h2>
        <span>work in progress...</span>
      </div>
      <div class="code-space">
        <code class="codes">{{ message }}</code>
        <vue-json-pretty :data="json" :deep="deep" :show-length="showLength" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
//@ts-ignore
import VueJsonPretty from "vue-json-pretty"

export default Vue.extend({
  components: {
    VueJsonPretty
  },
  data() {
    return {
      showLength: true,
      deep: 2,
      message:
        "$ curl -H 'Content-Type:application/json' http://localhost:3000/skill"
    }
  },
  computed: {
    json() {
      return {
        skill: {
          language: [
            "Ruby",
            "Go",
            "C++",
            "ShellScript",
            "TypeScript",
            "JavaScript"
          ],
          framework: ["Ruby on Rails", "React.js"],
          middleware: ["Redis", "gRPC", "nginx"],
          database: ["MySQL", "PostgreSQL"],
          other: ["Redis", "gRPC", "nginx", "zsh", "GitHub", "Docker"],
          editor: ["neovim", "JetBrains"]
        }
      }
    }
  }
})
</script>

<style>
.flex {
  display: flex;
}

.code-space {
  width: 70vw;
  background-color: black;
}

.codes {
  width: 98%;
}

.career {
  width: 40vw;
  margin-right: auto;
}

@media screen and (max-width: 767px) {
  /* 767px以下用（タブレット／スマートフォン用）の記述 */
  .flex {
    display: block;
  }

  .code-space {
    width: 100%;
    background-color: black;
    font-size: smaller;
  }

  .career {
    width: 100%;
  }
}
</style>
