'use strict'

import React, { ScrollView, ListView, TouchableOpacity, Image, View } from 'react-native'
import { Routes } from '../Navigation/'
import VenueCell from '../Components/VenueCell'
import styles from '../Styles/VenuesListScreenStyle'
import {connect} from 'react-redux/native'

class VenuesListScreen extends React.Component {

  constructor (props) {
    super(props)
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds
    }
  }

  static propTypes = {
    navigator: React.PropTypes.object,
    dispatch: React.PropTypes.func,
    venueList: React.PropTypes.array
  }

  cellPress (rowData) {
    this.props.dispatch({ type: 'SELECT_VENUE', venue: rowData.name, time: Date.now() })
    this.props.navigator.push(Routes.DetailsScreen)
  }

  customRowRender (rowData) {
    return (
      <TouchableOpacity onPress={this.cellPress.bind(this, rowData)}>
        <VenueCell
        imageUri={rowData.picture}
        title={rowData.name}
        address={rowData.address}
        city={rowData.city}
        distance={rowData.distance}
        priceBoiled={rowData.crawfish.boiled}
        ratingUrl={rowData.rating_url}
        favorite={rowData.favorite}
        isClosed={rowData.is_closed}
        />
      </TouchableOpacity>
    )
  }
// <Image source={require('../Images/lightWood.jpg')}>
  render () {
    return (
      <View style={styles.background}>

        <Image style={styles.backgroundImage} source={require('../Images/lightWood.jpg')}/>
        <View style={styles.overlay}/>
        <ScrollView>
          <ListView
            style={styles.listy}
            dataSource={this.state.dataSource.cloneWithRows(this.props.venueList)}
            renderRow={this.customRowRender.bind(this)}
          />
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    venueList: state.venue.venueList
  }
}

export default connect(mapStateToProps)(VenuesListScreen)
