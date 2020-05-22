<template lang="pug">
  v-app
    Header
    v-row.pt-12.fill-height(no-gutters)
      v-col
        v-simple-table
          template(v-slot:default)
            thead.grey.lighten-4
              tr
                th
                th キャンペーンタイトル
                th ポスター数
                th ロケーション数
                th キャンペーン期間
                th
            tbody
              tr
                td.pt-3.pb-3(width="10%")
                  v-img(:src="'/svg/campaign-img.svg'" contain height="85" position="right")
                td(width="40%")
                  v-img(:src="'/svg/draft.svg'" contain height="22" position="left")
                  | 下書き中のキャンペーン
                td 20
                td 40
                td
                  div 2020/01/01
                  |&emsp;&emsp; ~
                  div 2020/05/01
                td(width="9.5%")
                  v-btn(color="warning" outlined) 編集

              //- tr
                td.pt-3.pb-3(width="10%")
                  v-img(:src="'/svg/campaign-img.svg'" contain height="85" position="right")
                td(width="40%")
                  v-img(:src="'/svg/publication-end.svg'" contain height="22" position="left")
                  | 公開終了のキャンペーン
                td 20
                td 40
                td
                  div 2020/01/01
                  |&emsp;&emsp; ~
                  div 2020/05/01
                td(width="9.5%")
                  v-btn(color="warning" outlined) 編集


</template>
<script>
import Header from '@/components/Header'
import SampleData from '@/assets/sample-data.json'

export default {
  components: {
    Header
  },
  data: () => ({
    SampleData
  }),
  head: () => ({
    title: 'ホーム'
  })
}
</script>
