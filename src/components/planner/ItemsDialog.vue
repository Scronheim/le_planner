<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="3">
          <v-tabs
            density="compact"
            direction="vertical"
            v-model="selectedTab"
          >
            <template
              v-for="_itemType in appStore.itemTypes[itemClass]"
              :key="_itemType.value"
            >
              <template v-if="_itemType.value === 'header'">
                <v-card-title class="text-grey-darken-1">
                  {{ _itemType.title }}
                </v-card-title>
                <v-divider />
              </template>
              <template v-else>
                <v-tab
                  :value="_itemType.value"
                  :text="_itemType.title"
                  :disabled="_itemType.value !== itemType && itemClass !== 'weapons' && itemClass !== 'offHands'"
                  @click="setSelectedTab(_itemType.value)"
                />
              </template>
            </template>
            <!-- <v-tab>Малые [1x1]</v-tab>
                <v-tab>Малый Лагонический [1x1]</v-tab>
                <v-tab>Humble [2x1]</v-tab>
                <v-tab>Stout [1x2]</v-tab>
                <v-tab>Grand [3x1]</v-tab>
                <v-tab>Large [1x3]</v-tab>
                <v-tab>Ornate [4x1]</v-tab>
                <v-tab>Huge [1x4]</v-tab>
                <v-tab>Adorned [2x2]</v-tab> -->
          </v-tabs>
        </v-col>
        <v-col>
          <v-window v-model="selectedTab">
            <v-window-item
              v-for="_itemType in appStore.itemTypes[itemClass]"
              :key="_itemType.value"
              :value="_itemType.value"
            >
              <v-row v-for="(chunk, chunkIndex) in chunkedSelectedTypeItems" :key="chunkIndex">
                <v-col v-for="item in chunk" :key="item.name">
                  <ItemCard
                    :item="item"
                    :item-class="itemClass"
                    @set-item="setItem"
                  />
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="error" @click="removeSelectedItem">
        Снять предмет
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { chunk } from 'lodash'

import { useAppStore } from '@/store/app'

import { Item } from '@/types/types'

export default {
  emits: ['setItem', 'removeSelectedItem'],
  props: {
    itemClass: {
      type: String,
      default: 'armour',
    },
    itemType: {
      type: String,
      default: 'helmets',
    },
    itemIsSelected: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const appStore = useAppStore()

    return { appStore }
  },
  data() {
    return {
      selectedTab: '',
    }
  },
  computed: {
    chunkedSelectedTypeItems(): Item[][] {
      if (this.itemClass === 'weapons') return chunk(this.appStore.items.weapons[this.selectedTab], 2)
      return chunk(this.appStore.items[this.itemType], 2)
    }
  },
  methods: {
    removeSelectedItem(): void {
      this.$emit('removeSelectedItem')
    },
    setItem(item: Item): void {
      this.$emit('setItem', item)
    },
    setSelectedTab(tab: string): void {
      this.selectedTab = tab
    },
  }
}
</script>