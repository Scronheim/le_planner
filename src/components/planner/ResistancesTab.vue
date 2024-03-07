<template>
  <v-card color="grey-darken-3" title="Сопротивления">
    <v-card-text>
      <v-table>
        <tbody>
          <tr>
            <td>Огонь</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Холод</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Молния</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Физический урон</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Некротический</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Яд</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Пустота</td>
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
  name: 'ResistancesTab'
})
</script>

<style scoped>

</style>
