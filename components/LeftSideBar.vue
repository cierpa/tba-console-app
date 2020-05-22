<template lang="pug">
  v-navigation-drawer(
    v-model="drawer"
    permanent
    absolute
    width="300"
    fixed
  )
    v-list-item
    v-list-item
    v-list-item
      v-list-item-action
        v-icon mdi-apps
      v-list-item-content
        v-list-item-title キャンペーン
</template>

<script>
export default {
  data: () => ({
    drawer: true
  })
}
</script>
