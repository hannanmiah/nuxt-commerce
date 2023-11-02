<script setup lang="ts">
const { sm, md, xs } = useDisplay()
useHead({
  title: 'Nuxt Commerce | Home',
  meta: [
    {
      name: 'description',
      content: 'This is the home page'
    }
  ]
})

const page = ref(1)

</script>

<template>
  <v-container fluid>
    <v-row class="mb-10" align="center" justify="space-around">
      <v-col cols="12" md="8">
        <v-card elevation="10">
          <v-carousel cycle>
            <v-carousel-item cover src="/images/banner_one.png"></v-carousel-item>
            <v-carousel-item cover src="/images/banner_two.png"></v-carousel-item>
            <v-carousel-item cover src="/images/banner_three.png"></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-row no-gutters align="center" justify="space-around">
          <v-col cols="12" sm="5" md="12">
            <v-sheet color="orange-accent-1" elevation="4" class="d-flex flex-column pa-4 mb-4 text-center">
              <h3 class="text-body-1 font-weight-bold mb-1">Compare Products</h3>
              <h6 class="text-body-2 font-weight-light text-orange-darken-4 mb-2">Choose two products to compare</h6>
              <v-form>
                <v-text-field flat bg-color="white" variant="solo" placeholder="Search Product One"
                  density="compact"></v-text-field>
                <v-text-field flat bg-color="white" variant="solo" placeholder="Search Product Two"
                  density="compact"></v-text-field>
                <v-hover v-slot="{ isHovering, props }">
                  <v-btn v-bind="props" flat block color="primary" :variant="isHovering ? 'flat' : 'outlined'">View
                    Comparison</v-btn>
                </v-hover>
              </v-form>
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="6" md="12">
            <v-hover v-slot="{ isHovering, props }">
              <v-sheet v-bind="props" :elevation="isHovering ? 10 : 4">
                <v-img cover src="/images/hero_pc.png" alt="hero-pc"></v-img>
              </v-sheet>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="d-flex flex-column justify-center align-center mb-10">
      <h2 class="text-h6">Featured Products</h2>
      <h3 class="text-subtitle-1 font-weight-light">Check and get your desired products</h3>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="n in 12" :key="n">
        <v-card elevation="10" :to="{ name: 'products-product', params: { product: 'jakfaf-skldfsdjf-product-' + n } }">
          <v-img cover src="/images/monitor.png"></v-img>
          <v-card-text class="text-subtitle-1">Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Iste sunt laborum alias</v-card-text>
          <v-card-title class="text-primary">54,500 <span
              class="text-decoration-line-through text-subtitle-2 text-grey-darken-1">60,000</span></v-card-title>
          <v-card-actions>
            <v-btn flat color="primary" variant="outlined">View</v-btn>
            <v-btn flat color="primary" variant="flat">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="my-4">
      <v-pagination rounded="circle" v-model="page" length="20"
        :total-visible="xs ? 2 : sm ? 4 : md ? 6 : 10"></v-pagination>
    </v-row>
  </v-container>
</template>
