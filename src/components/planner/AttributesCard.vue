<template>
  <v-card color="grey-darken-3" title="Аттрибуты">
    <v-card-text>
      <v-table>
        <tbody>
          <tr>
            <td>Сила</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Ловкость</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Интеллект</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Гармония</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Живучесть</td>
            <td>1</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AttributesCard'
})
</script>

<style scoped>

</style>
