<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-sheet
        v-bind="props"
        :width="width"
        :height="height"
        :class="[isHovering ? 'item-border': '']"
        @click="openItemsDialog"
      >
        <v-row
          v-if="selectedItem"
          class="fill-height"
          align="center"
          justify="center"
        >
          <ItemIcon
            :item="selectedItem"
            :item-class="itemClass"
            :is-hovering="isHovering"
          />
        </v-row>
        <v-container v-else class="fill-height">
          <v-row
            align="center"
            justify="center"
          >
            <v-btn
              icon="mdi-plus"
              color="success"
            >
              <v-icon icon="mdi-plus" />
            </v-btn>
          </v-row>
        </v-container>
      </v-sheet>
    </template>
  </v-hover>

  <v-dialog
    width="1200"
    v-model="itemDialog"
  >
    <ItemsDialog
      :item-class="itemClass"
      :item-type="itemType"
      :item-is-selected="!!selectedItem"
      @set-item="setItem"
      @remove-selected-item="removeSelectedItem"
    />
  </v-dialog>
</template>

<script lang="ts">
import { useAppStore } from '@/store/app'

import { Item } from '@/types/types'

export default {
  emits: ['addItemToBuild', 'removeItemFromBuild'],
  props: {
    itemClass: {
      type: String,
      default: 'armour',
    },
    itemType: {
      type: String,
      default: 'helmets',
    },
    width: {
      type: Number,
      default: 64,
    },
    height: {
      type: Number,
      default: 64,
    }
  },
  setup() {
    const appStore = useAppStore()

    return { appStore }
  },
  data() {
    return {
      itemDialog: false,
      selectedTab: '',
      selectedItem: <Item | null> null,
    }
  },
  methods: {
    removeSelectedItem(): void {
      this.selectedItem = null
      this.$emit('removeItemFromBuild')
      this.itemDialog = false
    },
    setItem(item: Item): void {
      this.selectedItem = item
      this.$emit('addItemToBuild', item)
      this.itemDialog = false
    },
    openItemsDialog() {
      this.itemDialog = true
    },
    toggleDialog(): void {
      this.selectedTab = this.itemType
    },
  }
}
</script>

<style scoped>
.item-border {
  border: 1px dashed #4CAF50;
  cursor: pointer;
}
</style>