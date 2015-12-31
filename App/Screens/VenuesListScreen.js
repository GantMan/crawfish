'use strict'

import React, { ScrollView, ListView, TouchableOpacity, Image, View, Text } from 'react-native'
import { Routes } from '../Navigation/'
import VenueCell from '../Components/VenueCell'
import styles from '../Styles/VenuesListScreenStyle'
import {connect} from 'react-redux/native'
import { SegmentedControls } from 'react-native-radio-buttons'

export default class VenuesListScreen extends React.Component {

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
    venueList: React.PropTypes.array,
    options: React.PropTypes.array
  }

  cellPress (rowData) {
    this.props.navigator.push(Routes.DetailsScreen)
  }

  setSelectedOption (selectedOption) {
    window.alert(`You selected ${selectedOption}`)
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
          <View style={styles.segmentContainer}>
            <SegmentedControls
                options={ ['List', 'Map'] }
                allowFontScaling={false}
                onSelection={ this.setSelectedOption.bind(this) }
                selectedOption={ 'List' }
                ref='segment'
                containerBorderTint={'#383a3d'}
                backTint= {'#383a3d'}
                tint= {'white'}
                selectedTint= {'white'}
                selectedBackgroundColor={'#5d1717'}
                separatorTint={'black'}
                paddingTop={7}
                paddingBottom={7}
                separatorWidth={1}
                direction={'column'}
                // renderOption={(option, selected) => {
                //   return (
                //     <View style={styles.segmentTextContainer}>
                //       <Text style={styles.segment}>{option}</Text>
                //     </View>
                //   )
                // }}
              />
          </View>
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
