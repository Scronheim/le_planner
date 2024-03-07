<template>
  <v-img width="64" height="64" cover style="background-image: url(/images/classes.webp);"
    :style="{ backgroundPosition: class.icon }" />
</template>

<script lang="ts">
export default {
  props: {
    class: {
      type: Object,
      required: true,
    },
  },
  computed: {
    classIconOffset(): void {
      return this.icons.find(i => i.classId === this.classId).iconOffset
    }
  },
  data() {
    return {
    }
  }
}
</script>