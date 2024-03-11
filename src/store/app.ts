// Utilities
import { GameClass } from '@/types/types'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    classes: <GameClass[]>[
      { id: 1, name: 'Дикарь', icon: '', subClasses: [
        { id: 11, name: 'Повелитель зверей', icon: '-195px -260px' },
        { id: 12, name: 'Шаман', icon: '-130px -260px' },
        { id: 13, name: 'Друид', icon: '-195px -195px' }
      ] },
      { id: 2, name: 'Маг', icon: '', subClasses: [
        { id: 21, name: 'Волшебник', icon: '-130px 0' },
        { id: 22, name: 'Магический клинок', icon: '0 0' },
        { id: 23, name: 'Мастер рун', icon: '-65px 0' }
      ] },
      { id: 3, name: 'Рыцарь', icon: '', subClasses: [
        { id: 31, name: 'Рыцарь пустоты', icon: '-130px -65px' },
        { id: 32, name: 'Охранник кузницы', icon: '-195px -65px' },
        { id: 33, name: 'Паладин', icon: '-65px -65px' }
      ] },
      { id: 4, name: 'Аколит', icon: '', subClasses: [
        { id: 41, name: 'Некромант', icon: '0 -195px' },
        { id: 42, name: 'Лич', icon: '-65px -195px' },
        { id: 43, name: 'Чернокнижник', icon: '0 -65px' }
      ] },
      { id: 5, name: 'Плут', icon: '', subClasses: [
        { id: 51, name: 'Стрелок', icon: '-130px -130px' },
        { id: 52, name: 'Танцующий с клинками', icon: '-130px -195px' },
        { id: 53, name: 'Сокольничая', icon: '0 -130px' }
      ] }
    ],
    timelines: [
      { 
        name: 'Fall of the Outcasts', boss: 'Abomination',
        level: 58, exclusiveRewards: ['Уникальные или сетовые лук или колчан'],
        blessings: {
          normal: [
            { name: 'Проклятие плоти', implicits: [
              { name: '30% - 50% увеличен шанс выпадения Большого идола' }
            ], icon: '-2604px -1796px' },
            { name: 'Благосклонность душ', implicits: [
              { name: '30% - 50% увеличен шанс выпадения Ornate идола' }
            ], icon: '-2940px -1628px' }
          ],
          empowered: [
            { name: 'Великое проклятие плоти', implicits: [
              { name: '51% - 100% увеличен шанс выпадения Большого идола' }
            ], icon: '-3192px -1712px' },
            { name: 'Великая благосклонность душ', implicits: [
              { name: '51% - 100% увеличен шанс выпадения Ornate идола' }
            ], icon: '-2016px -1712px' }
          ]
        }
      },
      { name: 'The Stolen Lance', boss: 'Охотник на богов Аргентус',
        level: 62, exclusiveRewards: ['Уникальные или сетовые палочки или каталисты', 'Уникальные или сетовые двуручные палки или скипетры'],
        blessings: {
          normal: [
            { name: 'Arrogance of Argentus', implicits: [
              { name: '10% - 20% увеличен шанс выпадения шлема' }
            ], icon: '-588px -2300px' },
            { name: 'Embrace of Ice', implicits: [
              { name: '10% - 20% увеличен шанс выпадения нательной брони' }
            ], icon: '-1260px -2300px' }
          ],
          empowered: [
            { name: 'Grand Arrogance of Argentus', implicits: [
              { name: '22% - 50% увеличен шанс выпадения шлема' }
            ], icon: '-672px -1628px' },
            { name: 'Grand Embrace of Ice', implicits: [
              { name: '22% - 50% увеличен шанс выпадения нательной брони' }
            ], icon: '-2940px -1376px' }
          ]
        }
      }
    ]
  }),
})
