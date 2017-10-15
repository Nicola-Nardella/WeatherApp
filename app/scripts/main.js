import React from 'react';
import {render} from 'react-dom';

import WeatherMain from './components/WeatherMain'

class App extends React.Component {
  render () {
    return (
      <div>
        <WeatherMain />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
