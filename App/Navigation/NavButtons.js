import React, { TouchableOpacity, View } from 'react-native'
import {Icon} from 'react-native-icons'

export default {
  searchButton: (onPressFunction) => {
    return (
      <TouchableOpacity onPress={onPressFunction}>
        <View style={{
          marginRight: 10,
          marginTop: 7,
          padding: 3,
          borderRadius: 3
        }}>
          <Icon
            name={'fontawesome|search'}
            size={17}
            color={'white'}
            style={{width: 20, height: 20, backgroundColor: '#383a3d'}}
          />
        </View>
      </TouchableOpacity>
    )
  },
  favoritesButton: (onPressFunction, favoritesOn) => {
    let starIcon = favoritesOn ? 'fontawesome|star' : 'fontawesome|star-o'
    // let starIcon = 'fontawesome|star-o'
    return (
      <TouchableOpacity onPress={onPressFunction}>
        <View style={{
          marginLeft: 10,
          marginTop: 7,
          padding: 3,
          borderRadius: 3
        }}>
          <Icon
            name={starIcon}
            size={17}
            color={'white'}
            style={{width: 20, height: 20, backgroundColor: '#383a3d'}}
          />
        </View>
      </TouchableOpacity>
    )
  }
}
