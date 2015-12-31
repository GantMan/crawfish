'use strict'

import React, { ScrollView, ListView, TouchableOpacity, Image, View, Text, Modal } from 'react-native'
import { Routes } from '../Navigation/'
import VenueCell from '../Components/VenueCell'
import styles from '../Styles/VenuesListScreenStyle'
import {connect} from 'react-redux/native'
import {Icon} from 'react-native-icons'

export default class VenuesListScreen extends React.Component {

  constructor (props) {
    super(props)
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds,
      showModal: false
    }
  }

  static propTypes = {
    navigator: React.PropTypes.object,
    dispatch: React.PropTypes.func,
    venueList: React.PropTypes.array
  }

  componentDidMount () {
    this.props.navigator.setState({
      rightButton: this.searchButton()
    })
  }

  searchButton () {
    return (
      <TouchableOpacity onPress={() => this.setState({showModal: true})}>
        <View style={styles.searchButton}>
          <Icon
            name={'fontawesome|search'}
            size={17}
            color={'white'}
            style={{width: 20, height: 20, backgroundColor: '#383a3d'}}
          />
        </View>
      </TouchableOpacity>
    )
  }

  cellPress (rowData) {
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
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center'}}>
          <View style={{backgroundColor: '#444', padding: 10, margin: 20, borderRadius: 5}}>
            <Text style={{color: 'white'}}>Search View Yo</Text>
            <Text style={{color: 'white'}}>This is where you'd make search stuff</Text>
            <TouchableOpacity onPress={() => this.setState({showModal: false})}>
              <Text style={{color: 'white', backgroundColor: '#000', width: 100}}>CLOZE ME</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
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
