import I from 'immutable'

export default class InfoDefinition extends I.Record({
  main: '',
  description: '',
  icon: '',
}){
  get imgUrl () {
    return `http://openweathermap.org/img/w/${this.icon}.png`
  }
  get imgUrlDay () {
    return 'http://openweathermap.org/img/w/01d.png'
  }
  get imgUrlNight () {
    return 'http://openweathermap.org/img/w/01n.png'
  }
  get imgUrlHumidity () {
    return 'http://www.iconninja.com/files/365/234/455/humidity-icon.png'
  }
}
