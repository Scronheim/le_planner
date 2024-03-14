<template>
  <v-card color="grey-darken-3" title="Защита">
    <v-card-text>
      <v-row>
        <v-col>
          <v-table>
            <tbody>
              <tr>
                <td>Стойкость</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Порог стойкости</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Шанс скользящего удара</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Предотвращение крит. удара</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Уменьшение доп. урона от крит. ударов</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Шанс парировать</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Восстановление варда</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Удержание варда</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Порог распада варда</td>
                <td>1</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
        <v-col>
          <v-table>
            <tbody>
              <tr>
                <td>Получаемый урон</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Получаемый урон в движении</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Получаемый урон от окружающих врагов</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Наносимый урон по мане, перед здоровьем</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Наносимый урон по мане, перед вардом</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Предотвращение оглушения</td>
                <td>1</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p class="text-h6 text-center">
            Эффективное количество здоровья
          </p>
          <v-table>
            <thead>
              <tr>
                <th />
                <th>ЭКЗ vs удар</th>
                <th>ЭКЗ vs период. урон</th>
                <th>ЭКЗ vs ваншот</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Физический урон</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Урон огнём</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Урон холодом</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Урон молнией</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Некротический урон</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Урон пустотой</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Урон ядом</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p class="text-h6 text-center">
            Усиление здоровья / Похищение здоровье
          </p>
          <v-table>
            <thead>
              <tr>
                <th />
                <th>Ближний бой</th>
                <th>Заклинания</th>
                <th>Лук</th>
                <th>Метание</th>
                <th>Период. урон</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Похищение здоровья</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
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
}
</script>

<style scoped>

</style>
