<template>
  <v-menu
    open-on-hover
    :close-on-content-click="false"
    location="end"
  >
    <template #activator="{ props }">
      <v-img
        v-bind="props"
        :width="itemSizes.width"
        :height="itemSizes.height"
        cover
        style="background-image: url(/images/items_blessings.webp);"
        :style="{ backgroundPosition: item.icon }"
      />
    </template>
    <ItemCard
      v-if="showPopupCard"
      :item="item"
      :clickable="false"
    />
  </v-menu>
</template>

<script lang="ts">
import { PropType } from 'vue'

import { useAppStore } from '@/store/app'

import { Item } from '@/types/types'

export default {
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true,
    },
    itemClass: {
      type: String,
      default: 'armour',
    },
    isHovering: {
      type: Boolean,
      default: false,
    },
    showPopupCard: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const appStore = useAppStore()

    return { appStore }
  },
  data() {
    return {
    }
  },
  computed: {
    itemSizes() {
      console.log(this.itemClass, this.item.type)
      
      return this.appStore.itemTypes[this.itemClass].find(t => t.value === this.item.type)?.size
    },
    itemIsAmulet(): boolean {
      return this.item.type === 'amulets'
    }
  },
}
</script>

<style scoped>

</style>