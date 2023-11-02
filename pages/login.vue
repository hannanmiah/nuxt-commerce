<script lang="ts" setup>
useHead({
  title: 'Nuxt Commerce | Login',
  meta: [
    {
      name: 'description',
      content: 'This is the login page'
    }
  ]
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-card flat width="100%">
        <v-breadcrumbs :items="['Login']">
          <template #prepend>
            <v-icon>mdi-home</v-icon>
          </template>
        </v-breadcrumbs>
      </v-card>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card>
          <v-card-title class="text-h6">Login</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field variant="solo" label="Email" type="email" required></v-text-field>
              <v-text-field variant="solo" label="Password" type="password" required></v-text-field>
              <v-checkbox label="Remember Me"></v-checkbox>
              <v-btn block color="primary">Login</v-btn>
            </v-form>
          </v-card-text>
          <div class="d-flex align-center px-4 py-2" style="gap: 0.25rem;">
            <span>Don't have an account?</span>
            <v-btn variant="text" :to="{ name: 'register' }" color="primary">Register</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
