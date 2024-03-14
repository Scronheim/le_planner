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
        class="flex-0-0"

        style="background-image: url(/images/items_blessings.webp);"
        :style="{backgroundPosition: item.icon, transform: scaleImage()}"
      />
    </template>
    <ItemCard
      v-if="showPopupCard"
      :item="item"
      :item-class="itemClass"
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
      return this.appStore.itemTypes[this.itemClass].find(t => t.value === this.item.type)?.size
    },
  },
  methods: {
    scaleImage(): string {
      switch (this.item.type) {
      case 'amulets':
        return 'scale(0.45)'
      
      default:
        return 'scale(1)'
      }
    }
  },
}
</script>

<style scoped>

</style>