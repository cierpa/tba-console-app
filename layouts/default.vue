<template lang="pug">
  v-app.black#inspire
    LeftSidebar
    Navbar
    v-content
      nuxt
    v-navigation-drawer(v-model="rightDrawer" :right="right" temporary fixed)
      v-list
        v-list-item(@click.native="right = !right")
          v-list-item-action
            v-icon(light) mdi-repeat
</template>

<script>
import { AmplifyEventBus } from 'aws-amplify-vue'
import Navbar from '@/components/Navbar'
import LeftSidebar from '@/components/LeftSidebar'

export default {
  components: {
    Navbar,
    LeftSidebar
  },
  data: () => ({
    title: 'aaaa',
    isLoggedIn: false,
    fixed: false,
    right: true,
    rightDrawer: false
  }),
  created() {
    AmplifyEventBus.$on('authState', (info) => {
      if (info === 'signedIn') {
        this.$router.push('/home')
      } else if (info === 'signedOut') {
        this.$router.push('/login')
      }
    })
  },
  async mounted() {
    const currentUserInfo = await this.$Amplify.Auth.currentUserInfo()
    this.isLoggedIn = Boolean(currentUserInfo)
  }
}
</script>
