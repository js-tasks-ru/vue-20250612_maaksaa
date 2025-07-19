<script setup lang="ts">

interface Props {
  description: string;
}
defineProps<Props>()
</script>

<template>
  <div class="meetup-description">{{ description }}</div>
</template>

<style scoped>
/* _meetup-description.css */
.meetup-description {
  margin: var(--spacing-large) 0;
  white-space: pre-wrap;
}
</style>
