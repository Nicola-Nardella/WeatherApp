import I from 'immutable'
import superagent from 'superagent'
import superagentPromise from 'superagent-promise'
import WeatherHelper from './components/dataHelper/WeatherHelper'

const makeRequest = superagentPromise(superagent, Promise)

function getRequest () {
  return makeRequest('GET', 'http://localhost:8081')
  .then(r => {
    const data = I.fromJS(JSON.parse(r.text)).get('list')
    const list = data.map(d => WeatherHelper.getFromData(d))
    return list
  })
}
export default function request () {
  return getRequest()
}
