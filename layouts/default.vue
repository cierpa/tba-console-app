<template lang="pug">
  v-app#inspire
    Navbar
    v-content
      v-container(class="fill-height")
        nuxt
        //- amplify-sign-out(v-if="isLoggedIn")
        //- amplify-authenticator(v-else)
    v-navigation-drawer(v-model="rightDrawer" :right="right" temporary fixed)
      v-list
        v-list-item(@click.native="right = !right")
          v-list-item-action
            v-icon(light) mdi-repeat
</template>

<script>
import { AmplifyEventBus } from 'aws-amplify-vue'
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      isLoggedIn: false,
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
  },
  async mounted() {
    const currentUserInfo = await this.$Amplify.Auth.currentUserInfo()
    this.isLoggedIn = Boolean(currentUserInfo)
  }
}
</script>
