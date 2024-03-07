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
            <td>1</td>
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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AdditionalDefensesTab'
})
</script>

<style scoped>

</style>
