import TemperatureDefinition from '../dataDefinitions/TemperatureDefinition'

const round = number => Math.round(number * 10) / 10
export default {
  getFromData (data) {
    return new TemperatureDefinition({
      humidity: data.get('humidity'),
      tempMax: round(data.get('temp_max')),
      tempMin: round(data.get('temp_min')),
    })
  },
}
