<template>
  <v-card color="grey-darken-3" title="Доп. защита">
    <v-card-text>
      <v-table>
        <tbody>
          <tr>
            <td>Рейтинг уворота</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Шанс уворота</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Броня</td>
            <td>{{ armourFromItems }}</td>
          </tr>
          <tr>
            <td>Ослабление брони</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Шанс блока</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Эффективность блока</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Ослабление блока</td>
            <td>1</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { useAppStore } from '@/store/app'

export default {
  setup() {
    const appStore = useAppStore()

    return { appStore }
  },
  computed: {
    armourFromItems(): number {
      let result: number = 0
      const helmetArmour = this.appStore.build.slots.helmet?.implicits.filter(i => i.name === 'Броня').reduce((acc, curr) => acc + curr.from, 0)
      if (helmetArmour) {
        result += helmetArmour
      }
      const bodyArmour = this.appStore.build.slots.bodyArmor?.implicits.filter(i => i.name === 'Броня').reduce((acc, curr) => acc + curr.from, 0)
      if (bodyArmour) {
        result += bodyArmour
      }
      return result
    }
  }
}
</script>

<style scoped>

</style>
