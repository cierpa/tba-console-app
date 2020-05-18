<template lang="pug">
  v-app#container
    v-form(v-model="valid")
      v-container
        v-row
          v-col(cols="12" md="4")
            v-text-field(v-model="firstname" :rules="nameRules" :counter="10" label="First name" required)

          v-col(cols="12" md="4")
            v-text-field(v-model="lastname" :rules="nameRules" :counter="10" label="Last name" required)

          v-col(cols="12" md="4")
            v-text-field(v-model="email" :rules="emailRules" label="E-mail" required)
</template>

<script>
// const required = '必須入力'

const conJson = {
  required: 'amam',
  required2: 'azaz'
}

export default {
  data() {
    return {
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        (v) => !!v || conJson.required,
        (v) => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || conJson.required2,
        (v) => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  }
}
</script>
