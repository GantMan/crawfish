'use strict'

import React, { ScrollView, ListView, TouchableOpacity, Image, View, Text, Modal } from 'react-native'
import { Routes } from '../Navigation/'
import VenueCell from '../Components/VenueCell'
import styles from '../Styles/VenuesListScreenStyle'
import {connect} from 'react-redux/native'
import {Icon} from 'react-native-icons'
import _ from 'lodash'

class VenuesListScreen extends React.Component {

  constructor (props) {
    super(props)
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds,
      showModal: false,
      favoritesOn: false
    }
  }

  static propTypes = {
    navigator: React.PropTypes.object,
    dispatch: React.PropTypes.func,
    venueList: React.PropTypes.array
  }

  toggleVenueFavorite (rowData) {
    window.alert(rowData.name)
  }

  componentDidMount () {
    this.props.navigator.setState({
      tapFavorites: this.favoritesToggle.bind(this),
      tapSearch: () => this.setState({showModal: true})
    })
  }

  favoritesToggle () {
    let newFavorites = {favoritesOn: !this.state.favoritesOn}
    this.props.navigator.setState(newFavorites)
    this.setState(newFavorites)
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
        crawfishBoiled={rowData.crawfish_boiled}
        ratingUrl={rowData.rating_url}
        favorite={rowData.favorite}
        toggleFavorite={this.toggleVenueFavorite.bind(this, rowData)}
        />
      </TouchableOpacity>
    )
  }

  // TODO Move this to its own component
  renderModalSearch () {
    return (
      <Modal
        animated
        transparent
        visible={this.state.showModal}
      >
        <View style={{top: 64, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center'}}>
          <View style={{height: 150, backgroundColor: '#383a3d', padding: 10, margin: 20, borderRadius: 5, flex: 1}}>
            <Text style={{color: 'white'}}>Search View Yo</Text>
            <Text style={{color: 'white'}}>This is where you'd make search stuff</Text>
            <TouchableOpacity style={{height: 30, backgroundColor: '#000', borderRadius: 5, justifyContent: 'center'}} onPress={() => this.setState({showModal: false})}>
              <Text style={{color: 'white', width: 100, textAlign: 'center', alignSelf: 'center'}}>SEARCH</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }

  venues () {
    if (this.state.favoritesOn) {
      let favorites = _.filter(this.props.venueList, (v) => {
        return v.favorite === 'true'
      })
      console.log(favorites)
      return favorites
    } else {
      return this.props.venueList
    }
  }

// <Image source={require('../Images/lightWood.jpg')}>
  render () {
    return (
      <View style={styles.background}>
        { this.renderModalSearch() }
        <Image style={styles.backgroundImage} source={require('../Images/lightWood.jpg')}/>
        <View style={styles.overlay}/>
        <ScrollView>
          <ListView
            style={styles.listy}
            dataSource={this.state.dataSource.cloneWithRows(this.venues())}
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
