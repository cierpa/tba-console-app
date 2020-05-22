<template lang="pug">
  v-row(align="center" justify="center")
    v-col(cols="12" sm="8" md="4")
      v-card(outlined)
        v-toolbar(flat)
          v-col.d-flex.justify-space-around
            v-img(:src="'/svg/posha-logo.svg'" contain height="35")
        v-toolbar(flat)
          v-col.d-flex.justify-space-around
            h2 ログイン
        v-card-text
          v-form
            v-text-field(label="メールアドレス" name="email" type="text" outlined dense)
            v-text-field(label="パスワード" name="password" type="password" outlined dense)
        v-card-actions
          v-spacer
          div.my-2
            v-btn(large color="warning") ログイン
</template>
<script>
export default {
  layout: 'empty',
  data: () => ({
    isLoggedIn: false,
    fixed: false,
    right: true,
    rightDrawer: false
  })
}
</script>
