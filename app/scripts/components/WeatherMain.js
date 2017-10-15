import React from 'react';
import {render} from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {simpleSearch, isSimpleSearch} from '../searchMapUtils'

import WeatherSearchBar from './WeatherSearchBar'
import WeatherCard from './WeatherCard'

import request from '../request'

const cls = s => s ? `WeatherMain-${s}` : 'WeatherMain'
export default class WeatherMain extends React.Component {

  state = {}

  componentWillMount () {
    request().then(data => this.setState({data}))
  }

  onSearch = search => {
    this.setState({search})
  }

  mapAdvancedSearch = () => {
    const {search, data} = this.state
    if (_.includes(search, 'humidity')) {
      if (_.includes(search, '<')) {
        return data.filter(d => d.main.humidity < 60)
        .take(4).map((d, i) => <WeatherCard weatherInfoCard={d} key={i}/>)
      }
      else if (_.includes(search, '75')) {
        return data.filter(d => d.main.humidity > 75)
        .take(4).map((d, i) => <WeatherCard weatherInfoCard={d} key={i}/>)
      } else {
        return data.filter(d => d.main.humidity > 80)
        .take(4).map((d, i) => <WeatherCard weatherInfoCard={d} key={i}/>)
      }
    } else if (_.includes(search, 'wind')) {
      if (_.includes(search, '<')) {
        return data.filter(d => d.wind < 2)
        .take(4).map((d, i) => <WeatherCard weatherInfoCard={d} key={i}/>)
      }
      else if (_.includes(search, '4')) {
        return data.filter(d => d.wind > 4)
        .take(4).map((d, i) => <WeatherCard weatherInfoCard={d} key={i}/>)
      } else  {
        return data.filter(d => d.wind > 6)
        .take(4).map((d, i) => <WeatherCard weatherInfoCard={d} key={i}/>)
      }
    } else if (_.includes(search, 'temperature')) {
      if (_.includes(search, '<')) {
        return data.filter(d => d.main.temp < 5)
        .take(4).map((d, i) => <WeatherCard weatherInfoCard={d} key={i}/>)
      }
      else if (_.includes(search, '15')) {
        return data.filter(d => d.main.temp > 15)
        .take(4).map((d, i) => <WeatherCard weatherInfoCard={d} key={i}/>)
      } else {
        return data.filter(d => d.main.temp > 20)
        .take(4).map((d, i) => <WeatherCard weatherInfoCard={d} key={i}/>)
      }
    }
  }

  renderList = () => {
    const {search, data} = this.state
    if (!search) {
      return null
    }
    let content
    if (isSimpleSearch(search)) {
      content = data.filter(d => d.weather.description === search)
        .take(4).map((d, i) => <WeatherCard weatherInfoCard={d} key={i}/>)
    } else {
      content = this.mapAdvancedSearch()
    }
    if (content.isEmpty()) {
      content = <div className={cls('emptySearch')}>No results for this search</div>
    }
    return (
      <div className={cls('list')}>
        {content}
      </div>
    )
  }

  render () {
    return (
      <div className={cls()}>
        <MuiThemeProvider>
          <WeatherSearchBar onSearch={this.onSearch}/>
        </MuiThemeProvider>
        {this.renderList()}
      </div>
    )
  }
}

