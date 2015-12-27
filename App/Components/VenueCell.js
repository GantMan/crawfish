'use strict'

import React, { View, Text, Image, TouchableHighlight } from 'react-native'
import Images from '../Themes'
import { Routes } from '../Navigation/'
// import _ from 'lodash'

import styles from '../Styles/VenueCellStyle'

export default class VenueCell extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    imageUri: React.PropTypes.string,
    ratingUrl: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    distance: React.PropTypes.string,
    priceBoiled: React.PropTypes.string,
    pressDirections: React.PropTypes.func,
    navigator: React.PropTypes.object
  }

  pressDirections () {
    window.alert('HELLOOOOOO')
    this.props.navigator.push(Routes.DetailsScreen)
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
            <Text allowFontScaling={false} style={styles.priceBoiled}>{this.props.priceBoiled}</Text>
            <Image style={styles.stars} resizeMode='contain' source={{uri: this.props.ratingUrl}}/>
          </View>
        </View>
        <View style={styles.overlayContainer}>
          <View style={styles.labelsContainer}>
            <Text allowFontScaling={false} style={styles.title}>{this.props.title}</Text>
            <Text allowFontScaling={false} numberOfLines={0} style={styles.subtitle}>{this.props.subtitle}</Text>
          </View>
          <Text allowFontScaling={false} style={styles.distance}>{this.props.distance}</Text>
        </View>
        <View style={styles.triangleCorner}/>

      </View>
    )
  }
}
