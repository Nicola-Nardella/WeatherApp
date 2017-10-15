import WeatherDefinition from '../dataDefinitions/WeatherDefinition'
import InfoHelper from './InfoHelper'
import TemperatureHelper from './TemperatureHelper'

export default {
  getFromData (data) {
    return new WeatherDefinition({
      name: data.get('name'),
      main: TemperatureHelper.getFromData(data.get('main')),
      weather: InfoHelper.getFromData(data.get('weather').first()),
      wind: data.get('wind').get('speed'),
      clouds: data.get('clouds').get('today'),
    })
  },
}
