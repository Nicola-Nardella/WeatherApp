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

  renderList = () => {
    const {search, data} = this.state
    if (!search) {
      return null
    }
    let content
    if (isSimpleSearch(search)) {
      content = data.filter(d => d.weather.description === search)
        .take(4).map((d, i) => <WeatherCard weatherInfoCard={d} key={i}/>)
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

