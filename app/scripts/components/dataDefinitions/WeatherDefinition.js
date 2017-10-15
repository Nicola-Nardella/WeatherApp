import I from 'immutable'

import InfoDefinition from './InfoDefinition'
import TemperatureDefinition from './TemperatureDefinition'

export default class WeatherDefinition extends I.Record({
  name: '',
  main: new TemperatureDefinition(),
  weather: I.List(new InfoDefinition()).first(),
  wind: 0,
  clouds: 0,
}){}
