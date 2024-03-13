// Utilities
import { GameClass, Timeline, Items } from '@/types/types'
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
    timelines: <Timeline[]> [
      { 
        id: 1, name: 'Fall of the Outcasts', boss: 'Abomination',
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
      { id: 2, name: 'The Stolen Lance', boss: 'Охотник на богов Аргентус',
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
    ],
    itemTypes: {
      armour: [
        { value: 'helmets', title: 'Шлемы', size: { width: '83px', height: '83px' } },
        { value: 'bodyArmors', title: 'Нательная броня', size: { width: '83px', height: '124px' } },
        { value: 'gloves', title: 'Перчатки', size: { width: '83px', height: '83px' } },
        { value: 'belts', title: 'Пояса', size: { width: '82px', height: '41px' } }, 
        { value: 'boots', title: 'Ботинки', size: { width: '83px', height: '83px' } }
      ],
      weapons: [
        { value: 'onehandedSwords', title: 'Одноручные мечи', size: { width: '41px', height: '123px' } },
        { value: 'onehandedAxes', title: 'Одноручные топоры', size: { width: '83px', height: '124px' } },
        { value: 'onehandedMaces', title: 'Одноручные булавы', size: { width: '41px', height: '123px' } },
        { value: 'daggers', title: 'Клинки', size: { width: '41px', height: '82px' } },
        { value: 'scepters', title: 'Скипетры', size: { width: '41px', height: '123px' } },
        { value: 'wands', title: 'Палочки', size: { width: '41px', height: '123px' } },
        { value: 'twohandedSwords', title: 'Двуручные мечи', size: { width: '83px', height: '166px' } },
        { value: 'twohandedAxes', title: 'Двуручные топоры', size: { width: '83px', height: '166px' } },
        { value: 'twohandedMaces', title: 'Двуручные булавы', size: { width: '83px', height: '166px' } },
        { value: 'twohandedSpears', title: 'Двуручные пики', size: { width: '83px', height: '166px' } },
        { value: 'twohandedStaffs', title: 'Двуручные палки', size: { width: '41px', height: '164px' } },
        { value: 'twohandedStaffs', title: 'Луки', size: { width: '83px', height: '124px' } }
      ],
      offHands: [
        { value: 'quivers', title: 'Колчаны', size: { width: '83px', height: '124px' } },
        { value: 'shields', title: 'Щиты', size: { width: '83px', height: '124px' } },
        { value: 'catalists', title: 'Каталисты', size: { width: '83px', height: '83px' } }
      ],
      accessories: [
        { value: 'rings', title: 'Кольца', size: { width: '83px', height: '83px' } },
        { value: 'amulets', title: 'Амулеты', size: { width: '83px', height: '83px' } },
        { value: 'relics', title: 'Релики', size: { width: '83px', height: '83px' } }
      ],
      idols: [],
    },
    items: <Items> {
      helmets: [
        {
          name: 'Cloth Hood', type: 'helmets', icon: '-2100px -2048px', implicits: [
            { name: 'Броня', from: 14 }
          ], requiredClass: 5, requiredLevel: 1
        },
        {
          name: 'Copper Circlet', type: 'helmets', icon: '-840px -2720px', implicits: [
            { name: 'Броня', from: 8 }
          ], requiredClass: 2, requiredLevel: 1
        }
      ],
      amulets: [
        { name: 'Ruby Amulet', type: 'amulets', icon: '-2562px -1252px', implicits: [
          { name: 'Здоровье', from: 5, to: 25 }
        ], requiredLevel: 1 },
        { name: 'Brass Amulet', type: 'amulets', icon: '-1932px -2384px', implicits: [
          { name: 'Увеличение скорости заклинаний', from: '5%', to: '15%' }
        ], requiredLevel: 4 }
      ],
      weapons: {
        onehandedSwords: [
          {
            name: 'Gladius', type: 'onehandedSwords', icon: '-1008px -1252px',
            range: 1.9, baseAttackRate: 1.12,
            implicits: [
              { name: 'Урон в ближнем бою', from: 10 }
            ], requiredLevel: 1
          }
        ],
        onehandedAxes: [
          {
            name: 'Hatchet', type: 'onehandedAxes', icon: '-336px -752px',
            range: 1.9, baseAttackRate: 1.05,
            implicits: [
              { name: 'Урон в ближнем бою', from: 11 }
            ], requiredLevel: 1
          }
        ],
        onehandedMaces: [],
        daggers: [],
        scepters: [],
        wands: [],
        twohandedSwords: [],
        twohandedAxes: [],
        twohandedMaces: [],
        twohandedSpears: [],
        twohandedStaffs: [],
        bows: [],
      },
      bodyArmors: [],
      quivers: [],
      catalysts: [],
      shields: [],
      rings: [],
      belts: [],
      gloves: [],
      boots: [],
      relics: [],
    },
  }),
})
