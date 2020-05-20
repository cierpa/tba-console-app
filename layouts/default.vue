<template lang="pug">
  v-app#inspire
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
    v-footer(app)
      span &copy; {{ new Date().getFullYear() }}
</template>

<script>
import { AmplifyEventBus } from 'aws-amplify-vue'

export default {
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
