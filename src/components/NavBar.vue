<template>
  <v-col cols="3">
    <v-navigation-drawer permanent expand-on-hover>
      <v-list nav dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>
              mdi-twitter
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>
              mdi-home
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>
              mdi-account-outline
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-col>
</template>

<script>
export default {};
</script>

<style scoped></style>
