import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'
import WeatherCard from './WeatherCard.js'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherCard,
  },

  setup() {
    return {
      weatherData: getWeatherData(),
      weatherConditionIcons: WeatherConditionIcons,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <WeatherCard v-for="weatherCity in weatherData" :weather="weatherCity" :icons="weatherConditionIcons" />
      </ul>
    </div>
  `,
})
