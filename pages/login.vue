<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar justify="center" flat>
                <SvgReader name="posha-logo" />
                <!-- <v-toolbar-title>ログイン</v-toolbar-title> -->
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="メールアドレス"
                    name="email"
                    type="text"
                    outlined
                    dense
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="パスワード"
                    name="password"
                    type="password"
                    outlined
                    dense
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <div class="my-2">
                  <v-btn large color="warning">ログイン</v-btn>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SvgReader from '@/components/SvgReader'

export default {
  components: {
    SvgReader
  },
  data() {
    return {
      background: null
    }
  }
}
</script>
