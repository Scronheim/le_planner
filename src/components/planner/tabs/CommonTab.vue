<template>
  <v-card color="grey-darken-3" title="Общее">
    <v-card-text>
      <v-table>
        <tbody>
          <tr>
            <td>Здоровье</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Мана</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Восстановление здоровья</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Восстановление маны</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Скорость передвижения</td>
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
  name: 'CommonTab'
})
</script>

<style scoped>

</style>
