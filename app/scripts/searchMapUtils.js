import _ from 'lodash'

const simpleSearch = [
  'clear sky',
  'few clouds',
  'scattered clouds',
  'broken clouds',
  'shower rain',
  'rain',
  'thunderstorm',
  'snow',
  'mist'
]

const advancedSearch = [
  'humidity < 60%',
  'humidity > 75%',
  'humidity > 80%',
  'wind speed < 2 m/s',
  'wind speed > 4 m/s',
  'wind speed > 6 m/s',
  'temperature < 5°',
  'temperature > 15°',
  'temperature > 20°',
]

const searchFilter = simpleSearch.concat(advancedSearch)

const isSimpleSearch = function (search) {
  return _.includes(simpleSearch, search)
}

export {
  simpleSearch,
  isSimpleSearch,
  searchFilter
}
