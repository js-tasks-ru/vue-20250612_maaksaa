import { computed, defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: Number,
    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    },
  },

  setup(props, { emit }) {
    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне
    function increment() {
      if (props.count < props.max) {
        emit('update:count', props.count + 1)
      }
    }
    function decrement() {
      if (props.count > props.min) {
        emit('update:count', props.count - 1)
      }
    }

    const isDecrementDisabled = computed(() => props.count <= props.min)
    const isIncrementDisabled = computed(() => props.count >= props.max)

    return {
      increment,
      decrement,
      isDecrementDisabled,
      isIncrementDisabled,
    }
  },

  template: `
    <div class="counter">
      <UiButton @click="decrement" aria-label="Decrement" :disabled="isDecrementDisabled">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton @click="increment" aria-label="Increment" :disabled="isIncrementDisabled">➕</UiButton>
    </div>
  `,
})
