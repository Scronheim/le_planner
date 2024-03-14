<template>
  <v-row justify="center">
    <v-col>
      <v-card color="grey-darken-4">
        <v-card-text>
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
                  <GeneralTab />
                </v-window-item>
                <v-window-item value="offense">
                  <OffenseTab />
                </v-window-item>
                <v-window-item value="defense">
                  <DefenseTab />
                </v-window-item>
              </v-window>
            </v-col>
            <v-col>
              <v-row>
                <v-col cols="2">
                  <ClassIcon :game-class="appStore.build.selectedClass" />
                </v-col>
                <v-col>
                  <v-menu :close-on-content-click="false" v-model="menuIsOpen">
                    <template #activator="{ props }">
                      <v-btn
                        v-bind="props"
                        variant="outlined"
                      >
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
                        />
                      </v-list-group>
                    </v-list>
                  </v-menu>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Уровень"
                    type="number"
                    v-model.number="appStore.build.level"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-card title="Снаряжение" color="grey-darken-3">
                    <v-card-text>
                      <v-row>
                        <v-col />
                        <v-col>
                          <ItemSlot
                            item-class="armour"
                            item-type="helmets"
                            :width="83"
                            :height="83"
                            @add-item-to-build="addItemToBuild($event, 'helmet')"
                            @remove-item-from-build="removeItemFromBuild('helmet')"
                          />
                        </v-col>
                        <v-col>
                          <ItemSlot
                            item-class="accessories"
                            item-type="amulets"
                            :width="72"
                            :height="74"
                            @add-item-to-build="addItemToBuild($event, 'amulet')"
                            @remove-item-from-build="removeItemFromBuild('amulet')"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <ItemSlot
                            item-class="weapons"
                            item-type="onehandedSwords"
                            :width="83"
                            :height="154"
                            @add-item-to-build="addItemToBuild($event, 'weapon')"
                            @remove-item-from-build="removeItemFromBuild('weapon')"
                          />
                        </v-col>
                        <v-col>
                          <ItemSlot
                            item-class="armour"
                            item-type="bodyArmors"
                            :width="100"
                            :height="150"
                            @add-item-to-build="addItemToBuild($event, 'bodyArmor')"
                            @remove-item-from-build="removeItemFromBuild('bodyArmor')"
                          />
                        </v-col>
                        <v-col>
                          <ItemSlot
                            item-class="offHands"
                            item-type="quivers"
                            :width="83"
                            :height="154"
                            @add-item-to-build="addItemToBuild($event, 'offHand')"
                            @remove-item-from-build="removeItemFromBuild('offHand')"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <ItemSlot
                            item-class="accessories"
                            item-type="rings"
                            :width="50"
                            :height="50"
                            @add-item-to-build="addItemToBuild($event, 'ring1')"
                            @remove-item-from-build="removeItemFromBuild('ring1')"
                          />
                        </v-col>
                        <v-col>
                          <ItemSlot
                            item-class="armour"
                            item-type="belts"
                            :width="100"
                            :height="50"
                            @add-item-to-build="addItemToBuild($event, 'belt')"
                            @remove-item-from-build="removeItemFromBuild('belt')"
                          />
                        </v-col>
                        <v-col>
                          <ItemSlot
                            item-class="accessories"
                            item-type="rings"
                            :width="50"
                            :height="50"
                            @add-item-to-build="addItemToBuild($event, 'ring2')"
                            @remove-item-from-build="removeItemFromBuild('ring2')"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <ItemSlot
                            item-class="armour"
                            item-type="gloves"
                            :width="83"
                            :height="83"
                            @add-item-to-build="addItemToBuild($event, 'gloves')"
                            @remove-item-from-build="removeItemFromBuild('gloves')"
                          />
                        </v-col>
                        <v-col>
                          <ItemSlot
                            item-class="armour"
                            item-type="boots"
                            :width="83"
                            :height="83"
                            @add-item-to-build="addItemToBuild($event, 'boots')"
                            @remove-item-from-build="removeItemFromBuild('boots')"
                          />
                        </v-col>
                        <v-col>
                          <ItemSlot
                            item-class="accessories"
                            item-type="relics"
                            :width="83"
                            :height="83"
                            @add-item-to-build="addItemToBuild($event, 'relic')"
                            @remove-item-from-build="removeItemFromBuild('relic')"
                          />
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card title="Идолы" color="grey-darken-3">
                    <v-card-text>
                      <v-row justify="center">
                        <v-sheet width="50" height="50" />
                        <ItemSlot :width="50" :height="50" />
                        <ItemSlot :width="50" :height="50" />
                        <ItemSlot :width="50" :height="50" />
                        <v-sheet width="50" height="50" />
                      </v-row>
                      <v-row justify="center">
                        <ItemSlot :width="50" :height="50" />
                        <ItemSlot :width="50" :height="50" />
                        <ItemSlot :width="50" :height="50" />
                        <ItemSlot :width="50" :height="50" />
                        <ItemSlot :width="50" :height="50" />
                      </v-row>
                      <v-row justify="center">
                        <ItemSlot :width="50" :height="50" />
                        <ItemSlot :width="50" :height="50" />
                        <v-sheet width="50" height="50" />
                        <ItemSlot :width="50" :height="50" />
                        <ItemSlot :width="50" :height="50" />
                      </v-row>
                      <v-row justify="center">
                        <ItemSlot :width="50" :height="50" />
                        <ItemSlot :width="50" :height="50" />
                        <ItemSlot :width="50" :height="50" />
                        <ItemSlot :width="50" :height="50" />
                        <ItemSlot :width="50" :height="50" />
                      </v-row>
                      <v-row justify="center">
                        <v-sheet width="50" height="50" />
                        <ItemSlot :width="50" :height="50" />
                        <ItemSlot :width="50" :height="50" />
                        <ItemSlot :width="50" :height="50" />
                        <v-sheet width="50" height="50" />
                      </v-row>
                    </v-card-text>
                  </v-card>
                  <v-card
                    class="mt-6"
                    title="Благословения"
                    color="grey-darken-3"
                  >
                    <v-card-text>
                      <v-row>
                        <v-col>
                          <v-btn
                            size="64"
                            icon="mdi-plus"
                            color="success"
                            variant="outlined"
                            @click="blessingsDialog = true"
                          />
                        </v-col>
                        <v-col>
                          <v-btn
                            size="64"
                            icon="mdi-plus"
                            color="success"
                            variant="outlined"
                          />
                        </v-col>
                        <v-col>
                          <v-btn
                            size="64"
                            icon="mdi-plus"
                            color="success"
                            variant="outlined"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-btn
                            size="64"
                            icon="mdi-plus"
                            color="success"
                            variant="outlined"
                          />
                        </v-col>
                        <v-col>
                          <v-btn
                            size="64"
                            icon="mdi-plus"
                            color="success"
                            variant="outlined"
                          />
                        </v-col>
                        <v-col>
                          <v-btn
                            size="64"
                            icon="mdi-plus"
                            color="success"
                            border="11"
                            variant="outlined"
                          />
                        </v-col>
                        <v-col>
                          <v-btn
                            size="64"
                            icon="mdi-plus"
                            color="success"
                            variant="outlined"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-btn
                            size="64"
                            icon="mdi-plus"
                            color="success"
                            variant="outlined"
                          />
                        </v-col>
                        <v-col>
                          <v-btn
                            size="64"
                            icon="mdi-plus"
                            color="success"
                            variant="outlined"
                          />
                        </v-col>
                        <v-col>
                          <v-btn
                            size="64"
                            icon="mdi-plus"
                            color="success"
                            variant="outlined"
                          />
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <v-dialog width="800" v-model="blessingsDialog">
    <BlessingsDialog />
  </v-dialog>
</template>

<script lang="ts">
import { useAppStore } from '@/store/app'
import { GameClass, Item } from '@/types/types'

export default {
  setup() {
    const appStore = useAppStore()

    return { appStore }
  },
  data() {
    return {
      tab: <string>'general',
      menuIsOpen: <boolean>false,
      blessingsDialog: <boolean>false,
    }
  },
  computed: {
    selectedSubClass() {
      const subClasses = this.appStore.classes.flatMap(c => c.subClasses)
      return subClasses.find(subCl => subCl.id === this.appStore.build.selectedClass.id)?.name
    },
  },
  methods: {
    removeItemFromBuild(itemSlot: string) {
      this.appStore.build.slots[itemSlot] = null
    },
    addItemToBuild(item: Item, itemSlot: string) {
      this.appStore.build.slots[itemSlot] = item
    },
    setSelectedClass(selectedClass: GameClass): void {
      this.appStore.build.selectedClass = selectedClass
      this.menuIsOpen = false
    }
  }
}
</script>

<style scoped>

</style>
