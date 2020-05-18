<template lang="pug">
  v-app(dark)
    v-content
      v-container
        nuxt
    v-navigation-drawer(v-model="rightDrawer" :right="right" temporary fixed)
      v-list
        v-list-item(@click.native="right = !right")
          v-list-item-action
            v-icon(light) mdi-repeat
    v-footer(app)
      span &copy; {{ new Date().getFullYear() }}
</template>

<script>
import { AmplifyEventBus } from 'aws-amplify-vue'

export default {
  data() {
    return {
      fixed: false,
      right: true,
      rightDrawer: false
    }
  },
  created() {
    AmplifyEventBus.$on('authState', (info) => {
      if (info === 'signedIn') {
        this.$router.push('/')
      } else if (info === 'signedOut') {
        this.$router.push('/signin')
      }
    })
  }
}
</script>
