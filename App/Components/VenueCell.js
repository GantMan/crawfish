'use strict'

import React, { View, Text, Image, TouchableHighlight } from 'react-native'
import Images from '../Themes'
// import _ from 'lodash'

import styles from '../Styles/VenueCellStyle'

export default class VenueCell extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    imageUri: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    distance: React.PropTypes.string,
    priceBoiled: React.PropTypes.string,
    pressDirections: React.PropTypes.func
  }

  pressDirections () {
    window.alert('HELLOOOOOOo')
  }

  shouldComponentUpdate (newProps, newState) {
    // return !_.isEqual(this.state, newState) || !_.isEqual(this.props, newProps)
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <Image style={styles.myImage} source={{uri: this.props.imageUri}} defaultSource={Images.logo}/>
          <View style={styles.detailsContainer}>
            <Text style={styles.priceBoiled}>{this.props.priceBoiled}</Text>
            <TouchableHighlight
              onPress={this.props.pressDirections}
              underlayColor='rgba(255,255,255,0.5)'
              style={styles.button}
            >
            <Text style={styles.buttonText}>Directions</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.overlayContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.distance}>{this.props.distance}</Text>
        </View>
      </View>
    )
  }
}
