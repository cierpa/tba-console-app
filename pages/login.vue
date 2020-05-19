<template lang="pug">
  v-app#inspire
    v-content
      v-container(class="fill-height" fluid)
        v-row(align="center" justify="center")
          v-col(cols="12" sm="8" md="4")
            v-card(outlined)
              v-toolbar(flat)
                v-col(class="d-flex justify-space-around")
                  SvgReader(name="posha-logo")
              v-toolbar(flat)
                v-col(class="d-flex justify-space-around")
                  h2 ログイン
              v-card-text
                v-form
                  v-text-field(label="メールアドレス" name="email" type="text" outlined dense)
                  v-text-field(label="パスワード" name="password" type="password" outlined dense)
              v-card-actions
                v-spacer
                div(class="my-2")
                  v-btn(large color="warning") ログイン
</template>

<script>
import SvgReader from '@/components/SvgReader'

export default {
  components: {
    SvgReader
  },
  data() {
    return {
      background: null
    }
  }
}
</script>
