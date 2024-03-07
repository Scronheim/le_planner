<template>
  <v-row justify="center">
    <v-col>
      <v-card color="grey-darken-4">
        <v-card-text>
          <v-row>
            <v-col>
              <v-menu :close-on-content-click="false" v-model="menuIsOpen">
                <template #activator="{ props }">
                  <v-btn color="grey-darken-3" v-bind="props">
                    {{ selectedSubClass }}
                  </v-btn>
                </template>
                <v-list nav width="200">
                  <v-list-group
                    v-for="cl in appStore.classes"
                    :key="cl.name"
                    :value="cl.name"
                  >
                    <template #activator="{ props }">
                      <v-list-item
                        v-bind="props"
                        :prepend-icon="cl.icon"
                        :title="cl.name"
                      />
                    </template>
                    <v-list-item
                      v-for="subCl in cl.subClasses"
                      :key="subCl.name"
                      :title="subCl.name"
                      @click="setSelectedClass(subCl)"
                    >
                      <!-- <template #prepend> -->
                      <!-- <ClassIcon :classId="subCl.id" /> -->
                      <!-- </template> -->
                    </v-list-item>
                  </v-list-group>
                </v-list>
              </v-menu>
            </v-col>
            <v-col>
              <v-text-field
                label="Уровень"
                type="number"
                v-model.number="build.level"
              />
            </v-col>
            <v-col />
          </v-row>
          <v-row>
            <v-col>
              <v-tabs v-model="tab">
                <v-tab value="general">
                  Общее
                </v-tab>
                <v-tab value="offense">
                  Атака
                </v-tab>
                <v-tab value="defense">
                  Защита
                </v-tab>
                <v-tab value="minion">
                  Спутники
                </v-tab>
                <v-tab value="other">
                  Другое
                </v-tab>
              </v-tabs>
              <v-window v-model="tab">
                <v-window-item value="general">
                  general
                </v-window-item>
                <v-window-item value="offense">
                  offense
                </v-window-item>
              </v-window>
            </v-col>
            <v-col>
              тут шмотки
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { useAppStore } from '@/store/app'
import { Build, GameClass } from '@/types/types'

export default {
  setup() {
    const appStore = useAppStore()

    return { appStore }
  },
  data() {
    return {
      tab: <string> 'general',
      menuIsOpen: <boolean> false,
      build: <Build> {
        selectedClass: {
          id: 11
        },
        level: 100,
      },
    }
  },
  computed: {
    selectedSubClass() {
      const subClasses = this.appStore.classes.flatMap(c => c.subClasses)
      return subClasses.find(subCl => subCl.id === this.build.selectedClass.id)?.name
    },
  },
  methods: {
    setSelectedClass(selectedClass: GameClass): void {
      this.build.selectedClass = selectedClass
      this.menuIsOpen = false
    }
  }
}
</script>

<style scoped>
/* .v-list-group__items .v-list-item {
  padding-inline-start: 0 !important;
} */
</style>
