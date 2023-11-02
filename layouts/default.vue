<script setup lang="ts">
const config = useRuntimeConfig()
const drawer = ref(false)
const searchBoxOpen = ref(false)
const { lgAndUp, mdAndUp, smAndDown, xs, sm, md } = useDisplay()

const { data: categories } = useFetch(config.public.baseApiUrl + '/categories/tree')

</script>

<template>
  <v-app>
    <v-app-bar :scroll-behavior="lgAndUp ? 'hide' : 'elevate'" scroll-threshold="2" flat color="primary"
      :extended="searchBoxOpen">
      <template #prepend>
        <v-app-bar-nav-icon class="d-lg-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-btn variant="text" class="mx-md-2" to="/">
          Nuxt Commerce
        </v-btn>
      </template>
      <v-text-field density="compact" variant="solo" append-inner-icon="mdi-magnify" placeholder="Search" hide-details
        v-if="!smAndDown"></v-text-field>
      <template #append>
        <v-btn icon v-if="smAndDown" @click="searchBoxOpen = !searchBoxOpen"
          :density="xs ? 'compact' : sm ? 'comfortable' : 'default'">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon class="mx-md-2" :density="xs ? 'compact' : sm ? 'comfortable' : 'default'">
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
        <v-btn color="secondary" variant="flat" class="me-1 me-md-2"
          :size="xs ? 'x-small' : sm ? 'small' : md ? 'default' : 'large'" :to="{ name: 'register' }">
          Register
        </v-btn>
        <v-btn variant="flat" color="secondary" :size="xs ? 'x-small' : sm ? 'small' : md ? 'default' : 'large'"
          :to="{ name: 'login' }">
          Login
        </v-btn>
      </template>
      <template #extension v-if="searchBoxOpen">
        <v-card flat class="w-100">
          <v-toolbar density="compact" dense floating>
            <v-text-field density="compact" variant="solo" prepend-inner-icon="mdi-magnify" hide-details
              autofocus></v-text-field>
          </v-toolbar>
        </v-card>
      </template>
    </v-app-bar>
    <v-app-bar scroll-behavior="elevate" scroll-threshold="4" density="compact" color="white" v-if="lgAndUp">
      <v-spacer></v-spacer>
      <v-toolbar-items variant="flat">
        <v-menu v-for="category in categories" :key="category.id" open-on-hover>
          <template #activator="{ props }">
            <v-btn size="small" flat variant="flat" v-bind="props"> {{ category.name
            }} </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="cat in category.children" :key="cat.id"
              :to="{ name: 'category', params: { category: cat.name } }" prepend-icon="mdi-list-box">
              <v-list-item-title>{{ cat.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary :location="mdAndUp ? 'left' : 'bottom'"
      :width="md ? 400 : sm ? 350 : 200">
      <v-list nav>
        <v-list-group v-for="category in categories" :key="category.id" :value="category.name">
          <template #activator="{ props }">
            <v-list-item density="comfortable" prepend-icon="mdi-list-box" v-bind="props">
              <v-list-item-title>{{ category.name }}</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
          </template>
          <v-list-item density="compact" v-for="cat in category.children" :key="cat.id" prepend-icon="mdi-view-list"
            :title="cat.name" :value="cat.name" :to="{ name: 'category', params: { category: cat.name } }">
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main class="bg-accent">
      <slot />
    </v-main>
    <v-footer color="primary" class="d-flex flex-column justify-space-between align-stretch">
      <v-row>
        <v-col>
          <v-list class="bg-primary">
            <v-list-item>Support</v-list-item>
            <v-list-item subtitle="Contact US">
            </v-list-item>
            <v-list-item subtitle="FAQ">
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <v-list class="bg-primary">
            <v-list-item>About Us</v-list-item>
            <v-list-item>
              <v-list-item-subtitle>
                Terms and Conditions
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle>
                Privacy Policy
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle>
                Return Policy
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <v-list class="bg-primary" lines="two">
            <v-list-item>Stay Connected</v-list-item>
            <v-list-item>
              <v-list-item-title class="text-subtitle-2">Nuxt Commerce
                Limited</v-list-item-title>
              <v-list-item-subtitle>Head Office: 28 Kazi Nazrul Islam Ave,Navana Zohura Square, Dhaka
                1000</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="text-subtitle-2">Email:</v-list-item-title>
              <v-list-item-subtitle>hannanhridoy@gmail.com</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row align="center" justify="center" no-gutters class="pa-4">
        <v-btn icon class="mr-2">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon class="mr-2">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </v-row>
      <v-divider></v-divider>
      <v-row justify="center" no-gutters class="pa-2">
        <span class="text-subtitle-2 font-weight-light"> Nuxt Commerce &copy; {{ new Date().getFullYear() }} || All Rights
          Reserved</span>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style></style>
