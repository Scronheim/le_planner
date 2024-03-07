export interface GameClass {
  id: number
  name: string
  icon: string
  subClasses: GameClass[]
}

export interface Build {
  selectedClass: GameClass
  level: number
}
