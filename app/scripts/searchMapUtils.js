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

const isSimpleSearch = function (search) {
  return _.includes(simpleSearch, search)
}

export {
  simpleSearch,
  isSimpleSearch,
}
