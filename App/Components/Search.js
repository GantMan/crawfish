import React, { View, Text, TouchableOpacity, Modal, Image, TextInput } from 'react-native'
import styles from '../Styles/SearchModalStyle'
import { Colors, Fonts, Images } from '../Themes'
import Dropdown from '../Components/Dropdown'

export default class SearchModal extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      text: '',
      placeholder: ''
    }
  }

  static propTypes = {
    isVisible: React.PropTypes.bool,
    onPress: React.PropTypes.func,
    nameText: React.PropTypes.string,
    name: React.PropTypes.string
  };

  handleChange (e) {
    let typedText = e.nativeEvent.text
    this.setState({text: typedText})
    console.log(this.state.text)
  }

  render () {
    return (
      <Modal
        animated
        transparent
        visible={this.props.isVisible}
      >
        <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: 'center'}}>
          <View style={{height: 350, backgroundColor: '#383a3d', padding: 10, margin: 20, borderRadius: 5}}>
            <Text style={{color: 'white', alignSelf: 'center', fontSize: 22, fontFamily: Fonts.emphasis}}>Search</Text>
            <View style={{marginTop: 12}}>
              <View style={styles.separatorLine}/>
              <Image style={styles.divider} source={Images.divider} />
            </View>
            <View style={{marginTop: 10, flexDirection: 'column', justifyContent: 'space-around', flex: 1, alignItems: 'flex-start'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'white', alignSelf: 'center', fontSize: 18, fontFamily: Fonts.bold, marginRight: 10}}>Name</Text>
                <TextInput
                  ref='name'
                  style={{height: 40, width: 200, borderColor: Colors.lightGray, borderRadius: 5, borderWidth: 1, color: 'white'}}
                  onEndEditing={this.handleChange.bind(this)}
                  value={this.state.text}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'white', alignSelf: 'center', fontSize: 18, fontFamily: Fonts.bold, marginRight: 10}}>Distance</Text>
                <Dropdown
                  selected={'5 mi'}
                  disabled={false}
                  options={['1 mi', '2 mi', '5 mi', '10 mi', '< 10 mi']}
                  placeholder={''}
                  dropWidth={100}
                  // reversed
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 10, flex: 1, alignItems: 'flex-end'}} >
              <TouchableOpacity style={[styles.button, {height: 40, backgroundColor: Colors.lightGreen}]} onPress={this.props.onPress}>
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
