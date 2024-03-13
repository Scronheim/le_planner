<template>
  <v-card
    min-width="400"
    elevation="10"
    color="grey-darken-4"
    v-on="clickable ? {click: setItem}: {}"
  >
    <v-card-title>{{ item.name }}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="3" align="center">
          <ItemIcon
            :item="item"
            :item-class="itemClass"
            :show-popup-card="false"
          />
        </v-col>
        <v-col>
          <template v-if="itemIsWeapon">
            <p>Дистанция атаки: <span class="font-weight-bold">{{ item.range }}</span></p>
            <p>Базовая скорость атаки: <span class="font-weight-bold">{{ item.baseAttackRate }}</span></p>
          </template>
          <v-list nav>
            <v-list-item v-for="impl in item.implicits" :key="impl.name">
              <v-list-item-title>+<span class="text-success font-weight-bold">{{ impl.from }}</span> {{ impl.name }}</v-list-item-title>
              <v-divider />
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row v-if="item.modifiers?.length">
        <v-col>
          <p>Аффиксы</p>
          <v-list nav>
            <v-list-item v-for="mod in item.modifiers" :key="mod.name">
              <v-list-item-title>+<span class="text-success font-weight-bold">{{ mod.from }}</span> {{ mod.name }}</v-list-item-title>
              <v-divider />
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>Требуемый уровень: <span class="font-weight-bold">{{ item.requiredLevel }}</span></p>
          <template v-if="item.requiredClass">
            <p>Требуемый класс: <span class="font-weight-bold">{{ item.requiredClass }}</span></p>
          </template>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { PropType } from 'vue'

import { Item } from '@/types/types'
export default {
  emits: ['setItem'],
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true,
    },
    itemClass: {
      type: String,
      default: 'armour',
    },
    clickable: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
    itemIsWeapon(): boolean {
      return !!this.item.baseAttackRate
    }
  },
  methods: {
    setItem(): void {
      this.$emit('setItem', this.item)
    }
  }
}
</script>

<style scoped>
.v-list-item--density-compact.v-list-item--one-line {
  min-height: 20px;
}
</style>