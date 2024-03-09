<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-sheet
        v-bind="props"
        :width="width"
        :height="height"
        :border="isHovering ? true: false"
        :class="[isHovering ? 'item-border': '']"
        @click="openItemsDialog"
      >
        <v-container class="fill-height">
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
    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols="3">
            <v-tabs
              density="compact"
              hide-slider
              direction="vertical"
              v-model="selectedTab"
            >
              <template
                v-for="_itemType in itemTypes[itemClass]"
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
                v-for="_itemType in itemTypes[itemClass]"
                :key="_itemType.value"
                :value="_itemType.value"
              >
                {{ _itemType.title }}
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
export default {
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
  data() {
    return {
      itemDialog: false,
      selectedTab: '',
      itemTypes: {
        armour: [
          { value: 'helmets', title: 'Шлемы' }, { value: 'bodyArmor', title: 'Нательная броня' },
          { value: 'gloves', title: 'Перчатки' }, { value: 'belts', title: 'Пояса' }, 
          { value: 'boots', title: 'Ботинки' }
        ],
        weapons: [
          { value: 'onehandedSword', title: 'Одноручные мечи' },
          { value: 'onehandedAxes', title: 'Одноручные топоры' }, { value: 'onehandedMaces', title: 'Одноручные булавы' },
          { value: 'daggers', title: 'Клинки' }, { value: 'scepters', title: 'Скипетры' },
          { value: 'wands', title: 'Палочки' }, { value: 'twohandedSword', title: 'Двуручные мечи' },
          { value: 'twohandedAxes', title: 'Двуручные топоры' }, { value: 'twohandedMaces', title: 'Двуручные булавы' },
          { value: 'twohandedSpears', title: 'Двуручные пики' }, { value: 'twohandedStaff', title: 'Двуручные палки' },
          { value: 'bow', title: 'Луки' }
        ],
        offHands: [
          { value: 'quiver', title: 'Колчаны' },
          { value: 'shield', title: 'Щиты' }, { value: 'catalist', title: 'Каталисты' }
        ],
        accessories: [
          { value: 'rings', title: 'Кольца' }, { value: 'amulets', title: 'Амулеты' },
          { value: 'relics', title: 'Релики' }
        ],
        idols: [],
      },
    }
  },
  methods: {
    openItemsDialog() {
      this.itemDialog = true
    },
    toggleDialog(): void {
      this.selectedTab = this.itemType
      
    },
    setSelectedTab(tab: string): void {
      this.selectedTab = tab
    }
  }
}
</script>

<style scoped>
.item-border {
  border: 1px dashed #4CAF50;
  cursor: pointer;
}
</style>