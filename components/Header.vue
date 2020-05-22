<template lang="pug">
  v-card.pb-2.pa-2(outlined)
    v-row(align="start" justify='start' no-gutters)
      v-col.pa-2.ml-6(cols="2")
          span.headline キャンペーン
      v-col.pa-0.ml-12(cols="9" align="right")
          v-btn(large color="warning")
            v-icon mdi-plus
            | 新規キャンペーン作成
</template>
