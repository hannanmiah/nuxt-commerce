<script lang="ts" setup>
const route = useRoute()
const product = computed(() => route.params.product)


useHead({
  title: `Nuxt Commerce | ${product.value}`,
  meta: [
    {
      name: 'description',
      content: `This is the ${product.value} page`
    }
  ]
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-card flat width="100%">
        <v-breadcrumbs :items="['Products', product]">
          <template #prepend>
            <v-icon>mdi-home</v-icon>
          </template>
        </v-breadcrumbs>
      </v-card>
    </v-row>
    <v-row>
      <v-col>
        <v-card flat rounded class="rounded-pill">
          <v-toolbar density="compact" color="white">
            <template #prepend>
              <span>Share:</span>
              <v-btn icon>
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </template>
            <v-spacer></v-spacer>
            <template #append>
              <v-btn prepend-icon="mdi-content-save-all">
                Save
              </v-btn>
              <v-btn prepend-icon="mdi-plus-box-multiple">
                Add to Compare
              </v-btn>
            </template>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-card flat>
          <v-img src="/images/laptop.png"></v-img>
          <div class="d-flex justify-center" style="gap: 0.25rem;">
            <v-avatar size="48" rounded="0" color="accent" v-for="n in 4" :key="n">
              <v-img src="/images/laptop.png"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <v-card flat>
          <v-card-title class="text-h5 text-primary">Dell Vostro 14 3400 Core i3 11th Gen 14" HD Laptop</v-card-title>
          <div class="d-flex px-4 py-2" style="gap: .25rem;">
            <v-chip>Price: 48,500</v-chip>
            <v-chip>Regular Price: 49,500</v-chip>
            <v-chip>Status: In Stock</v-chip>
            <v-chip>Product Code: 112233</v-chip>
            <v-chip>Brand: Dell</v-chip>
          </div>
          <v-card-text>
            <div class="d-flex flex-column align-start justify-space-between" style="gap: 0.50rem;">
              <h2 class="text-h6">Key Features:</h2>
              <ul class="specification d-flex flex-column">
                <li>MPN: BULLSEYEV14TGL21054001</li>
                <li>Model: Vostro 14 3400</li>
                <li>Processor: Intel Core i3-1115G4 (6MB Cache, 3.0 GHz up to 4.10 GHz)</li>
                <li>RAM: 4GB DDR4, Storage: 1TB SATA HDD</li>
                <li>Display: 14.0-inch HD (1366 x 768)</li>
                <li>Features: Backlit Keyboard, HD Webcam</li>
              </ul>
              <v-btn variant="text" color="primary" to="#specs">View More Info</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-row>
            <v-col cols="12" md="6">
              <v-card flat>
                <v-card-title>Payment Options</v-card-title>
                <v-item-group mandatory>
                  <div class="d-flex justify-space-between px-4 py-2" style="gap: 0.50rem;">
                    <v-item v-slot="{ isSelected, selectedClass, toggle }">
                      <v-sheet @click="toggle" border width="100%" :class="[selectedClass]">
                        <div class="d-flex align-center pa-1" style="gap: 0.25rem;">
                          <v-icon v-if="isSelected" color="primary">mdi-check</v-icon>
                          <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
                          <div class="d-flex flex-column">
                            <span>Cash on Delivery</span>
                            <span class="text-caption">Pay with cash upon delivery.</span>
                          </div>
                        </div>
                      </v-sheet>
                    </v-item>
                    <v-item v-slot="{ isSelected, selectedClass, toggle }">
                      <v-sheet @click="toggle" border width="100%" :class="[selectedClass]">
                        <div class="d-flex align-center pa-1" style="gap: 0.25rem;">
                          <v-icon v-if="isSelected" color="primary">mdi-check</v-icon>
                          <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
                          <div class="d-flex flex-column">
                            <span>Bkash</span>
                            <span class="text-caption">Save up to 30%</span>
                          </div>
                        </div>
                      </v-sheet>
                    </v-item>
                    <v-item v-slot="{ isSelected, selectedClass, toggle }">
                      <v-sheet @click="toggle" border width="100%" :class="[selectedClass]">
                        <div class="d-flex align-center pa-1" style="gap: 0.25rem;">
                          <v-icon v-if="isSelected" color="primary">mdi-check</v-icon>
                          <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
                          <div class="d-flex flex-column">
                            <span>Credit Card</span>
                            <span class="text-caption">15% discount ready</span>
                          </div>
                        </div>
                      </v-sheet>
                    </v-item>
                  </div>
                </v-item-group>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card flat>
                <v-card-title>Quantity</v-card-title>
                <div class="px-4 py-2">
                  <v-form>
                    <v-row align="center" justify="space-between">
                      <v-col>
                        <v-text-field density="compact" type="number" variant="outlined" min="1" max="10" required
                          hide-details>
                          <template #prepend>
                            <v-btn icon>
                              <v-icon>mdi-plus</v-icon>
                            </v-btn>
                          </template>
                          <template #append>
                            <v-btn icon>
                              <v-icon>mdi-minus</v-icon>
                            </v-btn>
                          </template>
                        </v-text-field>
                      </v-col>
                      <v-col>
                        <v-btn block color="primary">Buy Now</v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-column" style="gap: 1rem;" cols="12" md="8" lg="9">
        <div class="d-flex" style="gap: 0.5rem;">
          <v-btn flat color="secondary">Sepecification</v-btn>
          <v-btn flat>Description</v-btn>
          <v-btn flat>Reviews</v-btn>
          <v-btn flat>Questions</v-btn>
        </div>
        <v-card>
          <v-card-item>
            <v-card-title id="specs">Specification</v-card-title>
          </v-card-item>
          <v-card-text>
            <v-list :opened="['display', 'video', 'audio', 'power', 'warranty']">
              <v-list-group value="display">
                <template #activator="{ props }">
                  <v-list-item class="bg-grey-lighten-2" v-bind="props">
                    <v-list-item-title>
                      <h5 class="text-primary text-subtitle-1">Display Features</h5>
                    </v-list-item-title>
                  </v-list-item>
                </template>
                <v-list-item>
                  <v-table>
                    <tbody>
                      <tr>
                        <td class="w-25">Display Type</td>
                        <td>LED</td>
                      </tr>
                      <tr>
                        <td class="w-25">Display Size</td>
                        <td>14.0"</td>
                      </tr>
                      <tr>
                        <td class="w-25">Display Resolution</td>
                        <td>HD (1366 x 768)</td>
                      </tr>
                      <tr>
                        <td class="w-25">Display Touchscreen</td>
                        <td>No</td>
                      </tr>
                      <tr>
                        <td class="w-25">Display Features</td>
                        <td>Anti-glare LED-Backlit Display</td>
                      </tr>
                      <tr>
                        <td class="w-25">Display Brightness</td>
                        <td>220 nits</td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-list-item>
              </v-list-group>
              <v-list-group value="video">
                <template #activator="{ props }">
                  <v-list-item class="bg-grey-lighten-2" v-bind="props">
                    <v-list-item-title>
                      <h5 class="text-primary text-subtitle-1">Video Features</h5>
                    </v-list-item-title>
                  </v-list-item>
                </template>
                <v-list-item>
                  <v-table>
                    <tbody>
                      <tr>
                        <td class="w-25">
                          Flicker Safe
                        </td>
                        <td>
                          Yes
                        </td>
                      </tr>
                      <tr>
                        <td class="w-25">
                          Aspect Ratio
                        </td>
                        <td>
                          16:9
                        </td>
                      </tr>
                      <tr>
                        <td class="w-25">
                          Free Sync Support
                        </td>
                        <td>
                          AMD free sync technology
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-list-item>
              </v-list-group>
              <v-list-group value="audio">
                <template #activator="{ props }">
                  <v-list-item class="bg-grey-lighten-2" v-bind="props">
                    <v-list-item-title>
                      <h5 class="text-primary text-subtitle-1">Audio Features</h5>
                    </v-list-item-title>
                  </v-list-item>
                </template>
                <v-list-item>
                  <v-table>
                    <tbody>
                      <tr>
                        <td class="w-25">
                          Speakers
                        </td>
                        <td>
                          Built-in Dual Speakers
                        </td>
                      </tr>
                      <tr>
                        <td class="w-25">
                          Internal Mic
                        </td>
                        <td>
                          Built-in Microphone
                        </td>
                      </tr>
                      <tr>
                        <td class="w-25">
                          Sound Chip
                        </td>
                        <td>
                          Realtek ALC3204
                        </td>
                      </tr>
                      <tr>
                        <td class="w-25">
                          Sound Properties
                        </td>
                        <td>
                          Stereo Speakers, Waves MaxxAudio Pro
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-list-item>
              </v-list-group>
              <v-list-group value="power">
                <template #activator="{ props }">
                  <v-list-item class="bg-grey-lighten-2" v-bind="props">
                    <v-list-item-title>
                      <h5 class="text-primary text-subtitle-1">Power</h5>
                    </v-list-item-title>
                  </v-list-item>
                </template>
                <v-list-item>
                  <v-table>
                    <tbody>
                      <tr>
                        <td class="w-25">
                          Type
                        </td>
                        <td class="w-75">
                          External
                        </td>
                      </tr>
                      <tr>
                        <td class="w-25">
                          Voltage
                        </td>
                        <td class="w-75">
                          100 - 240 V
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-list-item>
              </v-list-group>
              <v-list-group value="warranty">
                <template #activator="{ props }">
                  <v-list-item class="bg-grey-lighten-2" v-bind="props">
                    <v-list-item-title>
                      <h5 class="text-primary text-subtitle-1">Warranty</h5>
                    </v-list-item-title>
                  </v-list-item>
                </template>
                <v-list-item>
                  <v-table>
                    <tbody>
                      <tr>
                        <td class="w-25">
                          Warranty Summary
                        </td>
                        <td class="w-75">
                          1 Year Onsite Warranty
                        </td>
                      </tr>
                      <tr>
                        <td class="w-25">
                          Warranty Service Type
                        </td>
                        <td class="w-75">
                          Onsite
                        </td>
                      </tr>
                      <tr>
                        <td class="w-25">
                          Covered in Warranty
                        </td>
                        <td class="w-75">
                          Manufacturing Defects
                        </td>
                      </tr>
                      <tr>
                        <td class="w-25">
                          Not Covered in Warranty
                        </td>
                        <td class="w-75">
                          Physical Damage
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-item>
            <v-card-title class="text-center text-primary">Related Product</v-card-title>
          </v-card-item>
          <v-divider></v-divider>
          <v-list>
            <v-list-item v-for="n in 4" :key="n"
              :to="{ name: 'products-product', params: { product: `kjsdfk-dkfdkf-proudct-${n}` } }">
              <div class="d-flex" style="gap: 1rem;">
                <v-img src="/images/laptop.png" width="60" height="60"></v-img>
                <div class="d-flex flex-column" style="gap: 0.5rem;">
                  <h2 class="text-body-1">LG 22MK430H-B 22" Full HD IPS LED Monitor with AMD FreeSync</h2>
                  <h3 class="text-subtitle-2 text-secondary">12,500 <v-icon>mdi-currency-bdt</v-icon></h3>
                  <v-btn prepend-icon="mdi-plus-box-multiple" variant="plain" size="small">Add to Compare</v-btn>
                </div>
              </div>
              <v-divider></v-divider>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.specification {
  list-style: none;
  padding: 0;
  margin: 0;
  gap: .25rem;
}

.v-item--selected {
  border: 1px solid #00695C;
}
</style>
