// Utilities
import { GameClass } from '@/types/types'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    classes: <GameClass[]>[
      {id: 1, name: 'Дикарь', icon: '', subClasses: [
        {id: 11, name: 'Повелитель зверей', icon: '-195px -260px'},
        {id: 12, name: 'Шаман', icon: '-130px -260px'},
        {id: 13, name: 'Друид', icon: '-195px -195px'},
      ]},
      {id: 2, name: 'Маг', icon: '', subClasses: [
        {id: 21, name: 'Волшебник', icon: '-130px 0'},
        {id: 22, name: 'Магический клинок', icon: '0 0'},
        {id: 23, name: 'Мастер рун', icon: '-65px 0'},
      ]},
      {id: 3, name: 'Рыцарь', icon: '', subClasses: [
        {id: 31, name: 'Рыцарь пустоты', icon: '-130px -65px'},
        {id: 32, name: 'Охранник кузницы', icon: '-195px -65px'},
        {id: 33, name: 'Паладин', icon: '-65px -65px'},
      ]},
      {id: 4, name: 'Аколит', icon: '', subClasses: [
        {id: 41, name: 'Некромант', icon: '0 -195px'},
        {id: 42, name: 'Лич', icon: '-65px -195px'},
        {id: 43, name: 'Чернокнижник', icon: '0 -65px'},
      ]},
      {id: 5, name: 'Плут', icon: '', subClasses: [
        {id: 51, name: 'Стрелок', icon: '-130px -130px'},
        {id: 52, name: 'Танцующий с клинками', icon: '-130px -195px'},
        {id: 53, name: 'Сокольничая', icon: '0 -130px'},
      ]},
    ],
  }),
})
