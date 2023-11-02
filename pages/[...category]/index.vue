<script lang="ts" setup>
const route = useRoute()
const category = computed(() => typeof route.params.category == 'string' ? [route.params.category] : route.params.category)

useHead({
  title: `Nuxt Commerce | ${category.value}`,
  meta: [
    {
      name: 'description',
      content: `This is the ${category.value} page`
    }
  ]
})

const priceRange = ref([0, 30])

</script>

<template>
  <v-container fluid>
    <v-row>
      <v-card variant="flat" width="100%">
        <v-breadcrumbs :items="category">
          <template #prepend>
            <v-icon>mdi-home</v-icon>
          </template>
        </v-breadcrumbs>
        <v-card-item>
          <div class="d-flex flex-wrap" style="gap: .5rem;">
            <v-chip variant="text" class="rounded-pill" :to="{ name: 'category', params: { category: [...category, n] } }"
              v-for="n in 15" :key="n" style="border: 1px solid #ddd;">Item {{ n }}</v-chip>
          </div>
        </v-card-item>
      </v-card>
    </v-row>
    <v-row>
      <v-col cols="12" md="3" class="d-flex flex-column" style="gap: .50rem;">
        <v-card variant="flat">
          <v-card-title class="text-subtitle-1">Price Range</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-range-slider v-model="priceRange" color="primary" :max="50" :min="-50" :step="1"
              hide-details></v-range-slider>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="4">
                <v-text-field density="compact" variant="solo" hide-details v-model="priceRange[0]"></v-text-field>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-text-field density="compact" variant="solo" hide-details v-model="priceRange[1]"></v-text-field>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
        <v-card flat>
          <v-list :opened="['availibility']" select-strategy="classic">
            <v-list-group value="availibility">
              <template #activator="{ props }">
                <v-list-item v-bind="props" title="Availibility">
                </v-list-item>
                <v-divider></v-divider>
              </template>
              <v-list-item density="compact" value="stock">
                <template #prepend="{ isActive }">
                  <v-list-item-action start>
                    <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                  </v-list-item-action>
                </template>
                <v-list-item-title>In Stock</v-list-item-title>
              </v-list-item>
              <v-list-item density="compact" value="out-of-stock" title="Out of stock">
                <template #prepend="{ isActive }">
                  <v-list-item-action start>
                    <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>
              <v-list-item density="compact" value="pre-order" title="Pre Order">
                <template #prepend="{ isActive }">
                  <v-list-item-action start>
                    <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>
              <v-list-item density="compact" value="upcoming" title="Upcoming">
                <template #prepend="{ isActive }">
                  <v-list-item-action start>
                    <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="9" class="d-flex flex-column" style="gap: .50rem;">
        <v-card variant="flat">
          <v-toolbar density="compact" color="white">
            <v-toolbar-title class="text-subtitle-1">{{ category[category.length - 1] }}</v-toolbar-title>
            <template #append>
              <span class="text-caption">Show:</span>
              <v-select density="compact" variant="solo" :items="[10, 20, 30, 40, 50]" class="mx-2"
                hide-details></v-select>
              <span class="text-caption">Sort By:</span>
              <v-select density="compact" variant="solo" :items="['Price', 'Name', 'Date']" class="mx-2"
                hide-details></v-select>
            </template>
          </v-toolbar>
        </v-card>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3" v-for="n in 24" :key="n">
            <v-card :to="{ name: 'products-product', params: { product: 'kadf-dldk3-product-33-again' + n } }">
              <v-img cover src="/images/laptop.png" alt="laptop"></v-img>
              <v-card-text>
                <div class="d-flex flex-column" style="gap: .50rem;">
                  <span class="text-subtitle-2">Dell Vostro 14 3400 Core i3 11th Gen 14" HD Laptop</span>
                  <ul class="text-caption specification">
                    <li>Processor: Intel Core i3-1115G4 (6MB Cache, 3.0 GHz up to 4.10 GHz)</li>
                    <li>RAM: 4GB DDR4, Storage: 1TB SATA HDD</li>
                    <li>Display: 14.0-inch HD (1366 x 768)</li>
                    <li>Features: Backlit Keyboard, HD Webcam</li>
                  </ul>
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-title class="text-center text-primary">48,500 <span
                  class="text-body-2 text-grey-darken-1 text-decoration-line-through">49,500</span></v-card-title>
              <div class="d-flex flex-column px-4 mb-2" style="gap: 0.25rem;">
                <v-btn variant="tonal" prepend-icon="mdi-cart" color="primary" size="small">Buy Now</v-btn>
                <v-btn prepend-icon="mdi-plus-box-multiple" variant="text" size="small">Add to Compare</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.specification {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: .25rem;
}
</style>
