'use strict'

import React, { View, Text, Image, TouchableOpacity } from 'react-native'
import Images from '../Themes'
import {Icon} from 'react-native-icons'
// import _ from 'lodash'

export default class VenueCell extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      winnerText: ''
    }
  }

  static propTypes = {

  }

  chooseWinner (name) {
    this.setState({winnerText: name})
  }

  render () {
    return (
      <View style={{flexDirection: 'row', borderWidth: 0, borderColor: 'white', alignItems: 'center'}}>
        <View style={{borderWidth: 0, borderColor: 'yellow', padding: 10}}>
          <TouchableOpacity onPress={this.chooseWinner.bind(this, 'Gant')} style={{backgroundColor: 'rgba(255,255,255,0.5)', width: 100, height: 40, borderRadius: 5, margin: 5}}>
            <Text>Gant</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.chooseWinner.bind(this, 'Shark')} style={{backgroundColor: 'rgba(255,255,255,0.5)', width: 100, height: 40, borderRadius: 5, margin: 5}}>
            <Text>Shark</Text>
          </TouchableOpacity>
        </View>
        <View style={{borderWidth: 0, borderColor: 'yellow'}}>
          <TouchableOpacity style={{backgroundColor: 'rgba(255,255,255,0.5)', width: 100, height: 40, borderRadius: 5}}>
            <Text>{this.state.winnerText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
