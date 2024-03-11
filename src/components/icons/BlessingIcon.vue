<template>
  <v-menu
    open-on-hover
    :close-on-content-click="false"
    location="end"
  >
    <template #activator="{ props }">
      <v-img
        v-bind="props"
        width="83"
        height="83"
        class="blessings-bg mx-2"
        :style="{ backgroundPosition: blessing.icon }"
      />
    </template>
    <v-card :title="blessing.name">
      <v-card-text>
        <v-list nav>
          <v-list-item
            v-for="impl in blessing.implicits"
            :key="impl.name"
            :title="impl.name"
          />
        </v-list>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
export default {
  props: {
    blessing: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.blessings-bg {
  background-image: url('/images/items_blessings.webp');
  display: inline-block;
}
</style>