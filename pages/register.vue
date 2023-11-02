<script lang="ts" setup>
useHead({
  title: 'Nuxt Commerce | Register',
  meta: [
    {
      name: 'description',
      content: 'This is the register page'
    }
  ]
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-card flat width="100%">
        <v-breadcrumbs :items="['Register']">
          <template #prepend>
            <v-icon>mdi-home</v-icon>
          </template>
        </v-breadcrumbs>
      </v-card>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card>
          <v-card-title class="text-h6">Register</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field variant="outlined" label="Name" required></v-text-field>
              <v-text-field variant="outlined" label="Email" type="email" required></v-text-field>
              <v-text-field variant="outlined" label="Password" type="password" required></v-text-field>
              <v-text-field variant="outlined" label="Confirm Password" type="password" required></v-text-field>
              <v-btn block color="primary">Register</v-btn>
            </v-form>
          </v-card-text>
          <div class="d-flex align-center px-4 py-2" style="gap: 0.25rem;">
            <span>Already have an account?</span>
            <v-btn variant="text" :to="{ name: 'login' }" color="primary">Login</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
