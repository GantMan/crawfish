'use strict'

import React, { View, Text, Image, TouchableOpacity } from 'react-native'
import Images from '../Themes'
import {Icon} from 'react-native-icons'
// import _ from 'lodash'

import styles from '../Styles/VenueCellStyle'

export default class VenueCell extends React.Component {

  renderIcon () {
    if (this.props.favorite === 'true') {
      return (
        <Icon
          name={'fontawesome|star'}
          size={20}
          color={'yellow'}
          style={{width: 20, height: 20, marginTop: 0, marginLeft: 0}}
        />
      )
    } else {
      return (
        <Icon
          name={'fontawesome|star-o'}
          size={20}
          color={'yellow'}
          style={{width: 20, height: 20, marginTop: 0, marginLeft: 0}}
        />
      )
    }
  }

  static propTypes = {
    title: React.PropTypes.string,
    imageUri: React.PropTypes.string,
    yelpPicture: React.PropTypes.string,
    picture: React.PropTypes.string,
    ratingUrl: React.PropTypes.string,
    address: React.PropTypes.string,
    city: React.PropTypes.string,
    distance: React.PropTypes.number,
    crawfishBoiled: React.PropTypes.string,
    pressDirections: React.PropTypes.func,
    navigator: React.PropTypes.object,
    favorite: React.PropTypes.string,
    toggleFavorite: React.PropTypes.func
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <Image style={styles.myImage} source={{uri: this.props.imageUri || this.props.yelpPicture || this.props.picture}} defaultSource={Images.logo}/>
          <View style={styles.detailsContainer}>
            <Text allowFontScaling={false} style={styles.crawfishBoiled}>$ {this.props.crawfishBoiled}</Text>
            <Image style={styles.ratingStars} resizeMode='contain' source={{uri: this.props.ratingUrl}}/>
          </View>
        </View>

        <View style={styles.overlayContainer}>
          <View style={styles.labelsContainer}>
            <Text allowFontScaling={false} numberOfLines={1} style={styles.title}>{this.props.title}</Text>
            <Text allowFontScaling={false} numberOfLines={0} style={styles.address}>{this.props.address} • {this.props.city}</Text>
          </View>
          <View style={styles.distanceContainer}>
            <Text allowFontScaling={false} style={styles.distance}>{this.props.distance} mi</Text>
          </View>
        </View>

        <View style={styles.triangleCorner}>
          <TouchableOpacity
            style={styles.starButton}
            onPress={this.props.toggleFavorite}
            >
            <View style={styles.iconContainer}>
              {this.renderIcon()}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
