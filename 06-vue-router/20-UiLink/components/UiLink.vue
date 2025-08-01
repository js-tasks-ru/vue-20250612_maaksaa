<script setup>
// Вместо <span> должен быть <RouterLink> или <a>
// Используйте динамический компонент <component :is="...">
const props = defineProps({
  to: { type: [String, Object] },
  href: { type: String, },
})
</script>

<template>
  <component :is="to ? 'RouterLink' : 'a'" :to="to" :href="href">
    <slot />
  </component>
</template>

<style scoped>
.link {
  color: var(--color-text-primary);
}

.link:hover {
  text-decoration: underline;
}
</style>
