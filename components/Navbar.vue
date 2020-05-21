<template lang="pug">
  v-app-bar(fixed app)
    v-row
      v-col.pa-0(sm='2' md='6' lg="1")
        v-toolbar-title
          v-img(:src="'/svg/posha-logo.svg'" contain height="35")
      v-col.pa-0(md='6' lg="1")
      v-col.pa-0(sm='8' md='6' lg="4")
        v-autocomplete(
          color="warning"
          filled
          dense
          outlined
          hide-details
          prepend-inner-icon="mdi-magnify"
          ref="campaign"
          v-model="campaign"
          :items="campaignList"
          label="キャンペーンを検索")
          template(v-slot:no-data)
            v-list-item
              v-list-item-title 該当するキャンペーンがありません
</template>

<script>
export default {
  data: () => ({
    campaignList: ['キャンペーン１', 'キャンペーン２'],
    campaign: null
  })
}
</script>
