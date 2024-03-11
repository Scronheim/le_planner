<template>
  <v-img
    width="64"
    height="64"
    cover
    style="background-image: url(/images/classes.webp);"
    :style="{ backgroundPosition: gameClass.icon }"
  />
</template>

<script lang="ts">
export default {
  props: {
    gameClass: {
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