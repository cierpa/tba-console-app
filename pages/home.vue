<template lang="pug">
  v-container
    v-row.mb-6(align="start" justify='start' no-gutters)
        v-col.pa-2(sm='2' md='6' lg="8")
            span.headline キャンペーン
        v-col.pa-0(sm='8' md='6' lg="4" align="right")
            v-btn(large color="warning")
              v-icon mdi-plus
              | 新規キャンペーン作成

</template>
<script>
export default {
  head: () => ({
    title: 'ホーム'
  })
}
</script>
