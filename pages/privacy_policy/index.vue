<template>
  <v-card v-bind="$attrs" :style="styles" v-on="$listeners" light flat>
    <helper-offset :inline="inline" :full-width="false" :offset="offset">
      <v-card
        v-if="!$slots.offset"
        :class="`elevation-${elevation}`"
        class="v-card--material__header"
        light
      >
        <span>
          <h2 class="entry-title">プライバシーポリシー</h2>
          <p>
            「<a href="https://pavlog.work/">https://pavlog.work/</a
            >」（当サイト）を利用される方は、以下に記載する諸条件に同意したものとみなします。
          </p>
          <h3>個人情報の収集について</h3>
          <p>
            利用者は匿名のままで、当サイトを自由に閲覧することができます。<br />
            お問い合わせ等、場合によっては利用者の氏名やメールアドレスなどの個人情報を開示をお願いする事があります。<br />
            しかし、利用者の個人情報を利用者の許可なく、当サイトから第三者へ開示・共有することはありません。
          </p>
          <h4>Google Analytics</h4>
          <p>
            当サイトではアクセス解析のために、Google
            Analyticsを利用しております。
          </p>
          <v-spacer />
          <h3>ウェブサーバの記録</h3>
          <p>
            当サイトのウェブサーバは、利用者のコンピュータのIDアドレスを自動的に収集・記録します。<br />
            しかし、これらは利用者個人を特定するものではありません。<br />
            利用者が自ら個人情報を開示しない限り、利用者は匿名のままで、当サイトを自由に閲覧することができます。
          </p>
          <v-spacer />
          <h3>免責事項</h3>
          <p>
            利用者が当サイトを閲覧し内容を参照したことによって、何かしらの損害を被った場合でも、当サイト管理者は責任を負いません。<br />
            当サイトからリンクされたウェブサイトの内容やサービスに関して、当サイトの個人情報の保護についての諸条件は適用されません。<br />
            上記同様に、当サイト以外のウェブサイトの内容及び個人情報の保護に関しても当サイト管理者は責任を負いません。
          </p>
        </span>
      </v-card>
    </helper-offset>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import HelperOffset from "@/components/helper/Offset.vue";

export default Vue.extend({
  components: {
    HelperOffset
  },
  props: {
    fullWidth: {
      type: Boolean,
      default: false
    },
    elevation: {
      type: [Number, String],
      default: 10
    },
    offset: {
      type: [Number, String],
      default: 24
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    title: "privacy policy",
    name: "privacy policy"
  }),
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
