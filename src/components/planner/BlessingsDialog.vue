<template>
  <v-card title="Благословения">
    <v-card-text>
      <v-row>
        <v-col>
          <v-autocomplete
            label="Монолиты"
            :items="appStore.timelines"
            item-title="name"
            return-object
            v-model="selectedTimeline"
          >
            <template #prepend>
              <v-img
                src="/images/timeline.png"
                width="32"
                height="32"
              />
            </template>
            <template #append>
              <v-checkbox-btn label="Усиленные таймлайны" v-model="empoweredTimeline" />
            </template>
          </v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <BlessingIcon
            v-for="bless in selectedTimelineBlessings"
            :key="bless.name"
            :blessing="bless"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { useAppStore } from '@/store/app'
import { Timeline } from '@/types/types'

export default {
  setup() {
    const appStore = useAppStore()

    return { appStore }
  },
  data() {
    return {
      empoweredTimeline: false,
      selectedTimeline: <Timeline> {
        id: 1,
        name: 'Fall of the Outcasts',
        boss: '',
        level: 58,
        exclusiveRewards: [],
        blessings: {
          normal: [],
          empowered: [],
        },
      }
    }
  },
  computed: {
    selectedTimelineBlessings() {
      return this.empoweredTimeline ? this.selectedTimeline.blessings.empowered : this.selectedTimeline.blessings.normal
    }
  },
  methods: {
    
  },
}
</script>

<style scoped>

</style>