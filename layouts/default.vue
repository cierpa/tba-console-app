<template lang="pug">
  v-app
    Navbar
    NavigationDrawer
    v-content
      v-container.container-pos(fluid)
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
import NavigationDrawer from '@/components/NavigationDrawer'

export default {
  components: {
    Navbar,
    NavigationDrawer
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
