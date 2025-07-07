import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const selectedId = ref(1)
    const meetup = ref(null)

    const isPrevDisabled = computed(() => selectedId.value === 1)
    const isNextDisabled = computed(() => selectedId.value === 5)

    async function fetchMeetup(Id) {
      meetup.value = await getMeetup(Id)
    }

    // можно вместо onMounted, добавить сюда immediate: true для инициализации первого значения
    watch(selectedId, newId => {
      fetchMeetup(newId)
    })

    onMounted(() => {
      fetchMeetup(selectedId.value)
    })

    return {
      selectedId,
      meetup,
      isPrevDisabled,
      isNextDisabled,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button @click="selectedId--" class="button button--secondary" type="button" :disabled="isPrevDisabled">Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div class="radio-group__button">
            <input
              id="meetup-id-1"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="1"
              v-model="selectedId"
            />
            <label for="meetup-id-1" class="radio-group__label">1</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-2"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="2"
              v-model="selectedId"
            />
            <label for="meetup-id-2" class="radio-group__label">2</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-3"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="3"
              v-model="selectedId"
            />
            <label for="meetup-id-3" class="radio-group__label">3</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-4"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="4"
              v-model="selectedId"
            />
            <label for="meetup-id-4" class="radio-group__label">4</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-5"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="5"
              v-model="selectedId"
            />
            <label for="meetup-id-5" class="radio-group__label">5</label>
          </div>
        </div>

        <button @click="selectedId++" class="button button--secondary" type="button" :disabled="isNextDisabled">Следующий</button>
      </div>
      <template v-if="meetup !== null">
        <div class="meetup-selector__cover">
          <div class="meetup-cover">
            <h1 class="meetup-cover__title">{{ meetup.title }}</h1>
          </div>
        </div>
      </template>

    </div>
  `,
})
