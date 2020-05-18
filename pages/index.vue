<template lang="pug">
  v-layout(row wrap)
    v-flex(xs12)
      v-text-field(v-model="state.content" label="content")

    v-flex(xs12)
      v-btn(color="primary" @click="createPost") Add

    br
    br

    v-flex(xs12 class="mb-5")
      v-card
        v-card-title(class="headline") Welcome to Chat
        div(v-for="(list, index) in mapPosts" :key="index")
          v-card-text(class="font-weight-thin pt-0") {{ list.content }}

    SampleCom1
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '@/src/graphql/queries'
import { createPost } from '@/src/graphql/mutations'
import { onCreatePost } from '@/src/graphql/subscriptions'
import SampleCom1 from '~/components/SampleCom1.vue'

export default {
  components: {
    SampleCom1
  },

  data() {
    return {
      state: {
        posts: [],
        content: ''
      }
    }
  },

  computed: {
    mapPosts() {
      return this.state.posts.map((post, idx) => {
        return post
      })
    }
  },

  async mounted(e) {
    const posts = await API.graphql(graphqlOperation(listPosts))
    this.state.posts = posts.data.listPosts.items

    API.graphql(graphqlOperation(onCreatePost)).subscribe({
      next: (eventData) => {
        const post = eventData.value.data.onCreatePost
        const posts = [
          ...this.state.posts.filter((content) => {
            return content.content !== post.content
          }),
          post
        ]
        this.state.posts = posts
      }
    })
  },

  methods: {
    // createPost = async () => {
    async createPost() {
      // バリデーションチェック
      if (this.state.content === '') return

      // 新規登録 mutation
      const createPostInput = {
        type: 'post',
        content: this.state.content,
        timestamp: 1589708886
      }

      // 登録処理
      const posts = [...this.state.posts, createPostInput]
      this.state.posts = posts
      this.state.title = ''
      this.state.content = ''
      await API.graphql(
        graphqlOperation(createPost, { input: createPostInput })
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
