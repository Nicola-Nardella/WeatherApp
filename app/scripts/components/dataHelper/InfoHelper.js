import InfoDefinition from '../dataDefinitions/InfoDefinition'

export default {
  getFromData (data) {
    return new InfoDefinition({
      main: data.get('main'),
      description: data.get('description'),
      icon: data.get('icon'),
    })
  },
}
