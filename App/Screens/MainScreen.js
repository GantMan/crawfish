'use strict'

import React, {StyleSheet, Text, View, Image} from 'react-native'

export default class MainScreen extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Image style={{width: 360, height: 360, backgroundColor: 'blue'}} source={{uri: 'http://www.slate.com/content/dam/slate/articles/life/food/2015/01/150202_FOOD_Hellmans.jpg.CROP.original-original.jpg'}}/>
        <Text style={styles.welcome}>
          HAI!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index and stuff.
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
