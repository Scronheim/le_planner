<template>
  <v-card
    color="grey-darken-3"
    title="Атака"
    class="overflow-auto"
    max-height="650"
  >
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="tableItems"
        :items-per-page="-1"
        :group-by="groupBy"
      >
        <template #group-header="{ item, columns, toggleGroup, isGroupOpen }">
          <tr>
            <td :colspan="columns.length">
              <v-btn
                size="small"
                variant="text"
                @click="toggleGroup(item)"
              >
                <template #prepend>
                  <v-icon :icon="isGroupOpen(item) ? '$expand' : '$next'" />
                </template>
                {{ item.value }}
              </v-btn>
            </td>
          </tr>
        </template>
        <template #bottom />
      </v-data-table>
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
  data() {
    return {
      tableItems: [
        {
          name: 'Длительность оглушения',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Другое'
        },
        {
          name: 'Шанс оглушения',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Другое'
        },
        {
          name: 'Freeze rate multiplier',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Длительность охлаждения',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Шанс охладить',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Длительность срезания брони',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Множитель срезания брони',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Шанс срезать броню',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Длительность слабости',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Шанс слабости',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Длительность ослепления',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Шанс ослепить',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Длительность замедления',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Шанс замедления',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Длительность шока',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Шанс шока',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Длительность чумы',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Множитель чумы',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Шанс чумы',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Длительность Time rot',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Множитель Time rot',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Шанс Time rot',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Длительность проклятия (Damned)',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Множитель проклятия (Damned)',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Шанс проклятия (Damned)',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Длительность рока (Doom)',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Множитель рока (Doom)',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Шанс рока (Doom)',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Длительность наэлектризованности',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Множитель наэлектризованности',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Шанс наэлектризовать',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Длительность заморозки',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Множитель заморозки',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Шанс заморозки',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Длительность поджога',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Множитель поджога',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Шанс поджога',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Длительность отравления',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Множитель отравления',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Шанс отравления',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Длительность кровотечения',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Множитель кровотечения',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: 'Шанс кровотечения',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Недуги'
        },
        {
          name: '% Яд',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Урон'
        },
        {
          name: '+ Яд',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Урон'
        },
        {
          name: '% Пустота',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Урон'
        },
        {
          name: '+ Пустота',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Урон'
        },
        {
          name: '% Некротический',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Урон'
        },
        {
          name: '+ Некротический',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Урон'
        },
        {
          name: '% Молния',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Урон'
        },
        {
          name: '+ Молния',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Урон'
        },
        {
          name: '% Холод',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Урон'
        },
        {
          name: '+ Холод',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Урон'
        },
        {
          name: '% Огонь',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Урон'
        },
        {
          name: '+ Огонь',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Урон'
        },
        {
          name: '% Физический',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Урон'
        },
        {
          name: '+ Физический',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Урон'
        },
        {
          name: 'Адаптивный',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Урон'
        },
        {
          name: 'Скорость атаки',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Скорость атаки'
        },
        {
          name: 'Скорость заклинаний',
          melee: 251,
          spell: 8,
          bow: 11,
          throwing: 12,
          dot: 56,
          type: 'Скорость атаки'
        },
        {
          name: 'Шанс крита',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Критический урон'
        },
        {
          name: 'Множитель крита',
          melee: 159,
          spell: 6,
          bow: 24,
          throwing: 4,
          dot: 3,
          type: 'Критический урон'
        }
      ],
      headers: [
        {
          title: 'Наименование',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        {
          title: 'Ближний бой',
          align: 'start',
          sortable: false,
          key: 'melee',
        },
        {
          title: 'Заклинания',
          align: 'start',
          sortable: false,
          key: 'spell',
        },
        {
          title: 'Лук',
          align: 'start',
          sortable: false,
          key: 'bow',
        },
        {
          title: 'Метание',
          align: 'start',
          sortable: false,
          key: 'throwing',
        },
        {
          title: 'Периодический урон',
          align: 'start',
          sortable: false,
          key: 'dot',
        }
      ],
      groupBy: [
        {
          key: 'type',
          order: 'desc',
        }
      ],
    }
  },
}
</script>

<style scoped>

</style>
