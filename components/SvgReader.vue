<template>
  <component :is="svg" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    svg() {
      return () => import(`~/assets/img/${this.name}.svg`)
    }
  }
}
</script>
