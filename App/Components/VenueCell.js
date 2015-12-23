'use strict'

import React, { View, Text, Image } from 'react-native'
import Images from '../Themes'
// import _ from 'lodash'

import styles from '../Styles/VenueCellStyle'

export default class VenueCell extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    imageUri: React.PropTypes.string,
    subtitle: React.PropTypes.string
  }

  shouldComponentUpdate (newProps, newState) {
    // return !_.isEqual(this.state, newState) || !_.isEqual(this.props, newProps)
  }

  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.myImage} source={{uri: this.props.imageUri}} defaultSource={Images.logo}/>
        <View style={styles.overlayContainer}>
          <Text style={styles.texty}>{this.props.title}</Text>
        </View>
      </View>
    )
  }
}
