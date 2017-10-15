import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'

import {searchFilter} from '../searchMapUtils'

export default class WeatherSearchBar extends React.Component {
  static propTypes = {
    onSearch: React.PropTypes.func,
  }
  static defaultProps = {
    onSearch: () => {},
  }

  state = {}

  onNewRequest = search => {
    this.setState({search})
    this.props.onSearch(search)
  }

  render() {
    return (
      <div className='WeatherSearchBar'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLI7Eck2kQH9jG0XlTTHKx8DjaY3nCAItMnBcVGSYfPPlsef8gHA" />
        <AutoComplete
          className='WeatherSearchBar-autocomplete'
          hintText='Search...'
          filter={AutoComplete.fuzzyFilter}
          dataSource={searchFilter}
          onNewRequest={this.onNewRequest}
          />
      </div>
    )
  }
}
