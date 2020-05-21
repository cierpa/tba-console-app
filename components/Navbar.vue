<template lang="pug">
  v-card(color="grey lighten-4")
    v-toolbar(flat)
      v-toolbar-title
        v-img(:src="'/svg/posha-logo.svg'" contain height="35")
      v-autocomplete(
          class="pa-12"
          filled
          dense
          outlined
          hide-details
          prepend-inner-icon="mdi-magnify"
          ref="campaign"
          v-model="campaign"
          :items="campaignList"
          label="キャンペーンを検索"
          messages="['aaa']"
      )
</template>

<script>
export default {
  data: () => ({
    campaignList: ['a', 'b'],
    campaign: null
  })
}
</script>
