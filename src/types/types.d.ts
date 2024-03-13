export interface GameClass {
  id: number
  name: string
  icon: string
  subClasses: GameClass[]
}

export interface Build {
  selectedClass: Partial<GameClass>
  slots: {
    helmet: Item | null
    amulet: Item | null
    weapon: Item | null
    bodyArmor: Item | null
    offHand: Item | null
    ring1: Item | null
    belt: Item | null
    ring2: Item | null
    gloves: Item | null
    boots: Item | null
    relic: Item | null
  }
  blessings: Blessing[]
  level: number
}

export interface Timeline {
  id: number
  name: string
  boss: string
  level: number
  exclusiveRewards: string[]
  blessings: {
    normal: Blessing[]
    empowered: Blessing[]
  }
}

export interface Blessing {
  name: string
  implicits: Modifier[]
  icon: string
}

export interface Modifier {
  name: string
  from: number | string
  to?: number | string
}
export type ItemType = 'helmets' | 'amulets' | 'onehandedSwords' | 'onehandedAxes' | 'onehandedMaces' | 'daggers' | 'scepters' | 'wands'
 | 'twohandedSwords' | 'twohandedAxes' | 'twohandedMaces' | 'twohandedSpears' | 'twohandedStaffs' | 'bows' | 'bodyArmors'
 | 'quivers' | 'catalysts' | 'shields' | 'rings' | 'belts' | 'gloves' | 'boots' | 'relics'

export interface Item {
  name: string
  type: ItemType
  icon: string
  range?: number
  baseAttackRate?: number
  implicits: Modifier[]
  modifiers?: Modifier[]
  requiredLevel: number
  requiredClass?: number
  relatedAilments?: []
  timelineToFarm?: number
}

export interface Items {
  helmets: Item[]
  amulets?: Item[]
  weapons?: {
    onehandedSwords: Item[]
    onehandedAxes: Item[]
    onehandedMaces: Item[]
    daggers: Item[]
    scepters: Item[]
    wands: Item[]
    twohandedSwords: Item[]
    twohandedAxes: Item[]
    twohandedMaces: Item[]
    twohandedSpears: Item[]
    twohandedStaffs: Item[]
    bows: Item[]
  }
  bodyArmors?: Item[]
  quivers?: Item[]
  catalysts?: Item[]
  shields?: Item[]
  rings?: Item[]
  belts?: Item[]
  gloves?: Item[]
  boots?: Item[]
  relics?: Item[]
  idols?: Item[]
}