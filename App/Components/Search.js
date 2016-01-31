import React, { View, Text, TouchableOpacity, Modal } from 'react-native'
// import styles from '../Styles/SearchModalStyle'
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
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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
            <Text style={{color: 'white'}}>Search View Yo</Text>
            <Text style={{color: 'white'}}>This is where you'd make search stuff</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}} >
              <TouchableOpacity style={{height: 30, backgroundColor: Colors.success, borderRadius: 5, justifyContent: 'center'}} onPress={this.props.onPress}>
                <Text style={{color: 'black', width: 100, textAlign: 'center', alignSelf: 'center'}}>Search</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{height: 30, backgroundColor: Colors.crawfish, borderRadius: 5, justifyContent: 'center'}} onPress={this.props.onPress}>
                <Text style={{color: 'white', width: 100, textAlign: 'center', alignSelf: 'center'}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }

}
