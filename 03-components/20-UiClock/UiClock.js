import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const now = ref(new Date())
    let timerId = 0

    onMounted(() => {
      timerId = setInterval(() => {
        now.value = new Date()
      }, 1000)
    })

    onUnmounted(() => {
      clearInterval(timerId)
    })

    const formattedTime = computed(() => now.value.toLocaleTimeString(navigator.language, { timeStyle: 'medium' }))

    return {
      formattedTime,
    }
  },

  template: `<div class="clock">{{ formattedTime }}</div>`,
})
