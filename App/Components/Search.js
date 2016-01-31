import React, { View, Text, TouchableOpacity, Modal } from 'react-native'
import styles from '../Styles/SearchModalStyle'
import { Colors } from '../Themes'
import Dropdown from '../Components/Dropdown'

export default class SearchModal extends React.Component {

  static propTypes = {
    isVisible: React.PropTypes.bool,
    onPress: React.PropTypes.func
  };

  render () {
    return (
      <Modal
        animated
        transparent
        visible={this.props.isVisible}
      >
        <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: 'center'}}>
          <View style={{height: 300, backgroundColor: '#383a3d', padding: 10, margin: 20, borderRadius: 5}}>
            <Text style={{color: 'white', alignSelf: 'center', fontSize: 22}}>Search</Text>
            <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-around', flex: 2, alignItems: 'center'}}>
              <Dropdown
                // selected={'Option one'}
                disabled={false}
                options={['Crawfish', 'Oysters', 'Shrimp', 'Crabs']}
                placeholder={'Seafood'}
                dropWidth={100}
                // reversed
              />
              <Dropdown
                // selected={'Option one'}
                disabled={false}
                options={['1 mi', '2 mi', '5 mi', '10 mi', '< 10 mi']}
                placeholder={'Distance'}
                dropWidth={100}
                // reversed
              />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 10, flex: 1, alignItems: 'flex-end'}} >
              <TouchableOpacity style={[styles.button, {height: 40, backgroundColor: Colors.success}]} onPress={this.props.onPress}>
                <Text style={{color: 'black', width: 100, textAlign: 'center', alignSelf: 'center', fontSize: 18}}>Search</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, {height: 40, backgroundColor: Colors.crawfish}]} onPress={this.props.onPress}>
                <Text style={{color: 'white', width: 100, textAlign: 'center', alignSelf: 'center', fontSize: 18}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }

}
