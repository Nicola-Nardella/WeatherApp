import I from 'immutable'

export default class TemperatureDefinition extends I.Record({
  humidity: 0,
  tempMax: 0,
  tempMin: 0,
  temp: 0,
}){}
