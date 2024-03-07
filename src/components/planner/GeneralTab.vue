<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col>
          <AttributesCard />
        </v-col>
        <v-col>
          <CommonTab />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ResistancesTab />
        </v-col>
        <v-col>
          <AdditionalDefensesTab />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GeneralTab',
})
</script>

<style scoped>

</style>
