import React from 'react';
import {render} from 'react-dom';

import WeatherDefinition from './dataDefinitions/WeatherDefinition'

const cls = s => s ? `WeatherCard-${s}` : 'WeatherCard'
export default class WeatherCard extends React.Component {
  static propTypes = {
    weatherInfoCard: React.PropTypes.instanceOf(WeatherDefinition).required,
  }

  _renderHeader () {
    const {weatherInfoCard} = this.props
    return (
      <div className={cls('header')}>
        <img src={weatherInfoCard.weather.imgUrl} />
        <div className={cls('city')}>
          {weatherInfoCard.name}
        </div>
      </div>
    )
  }

  _renderContent () {
    const {weatherInfoCard} = this.props
    return (
      <div className={cls('content')}>
        <div className={cls('temperature')}>
          <div className={cls('temperature-label')}>
            Temperature
          </div>
          <div className={cls('temperature-content')}>
            <div className={cls('temperature-day')}>
              <img src={weatherInfoCard.weather.imgUrlDay} />
              {weatherInfoCard.main.tempMax}°
            </div>
            <div className={cls('temperature-night')}>
              <img src={weatherInfoCard.weather.imgUrlNight} />
              {weatherInfoCard.main.tempMin}°
            </div>
          </div>
        </div>
        <div className={cls('umidity')}>
          <div className={cls('umidity-label')}>
            Umidity
          </div>
          <div className={cls('umidity-content')}>
            <img src={weatherInfoCard.weather.imgUrlHumidity} />
            {weatherInfoCard.main.humidity}%
          </div>
        </div>
      </div>
    )
  }
  render () {
    return (
      <div className={cls()}>
        {this._renderHeader()}
        {this._renderContent()}
      </div>
    )
  }
}

