import React, { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import styles from '../Styles/SuggestVenueScreenStyle'
import { Colors, Fonts, Images, Metrics } from '../Themes'

export default class SuggestVenueScreen extends React.Component {

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
      <View style={styles.background}>
        <Image style={styles.backgroundImage} source={require('../Images/lightWood.jpg')}/>
        <View style={styles.overlay}/>

        <View style={styles.placemat}>
          <View style={{height: Metrics.screenHeight * 0.7, backgroundColor: '#383a3d', padding: 10, margin: 20, borderRadius: 5}}>
            <Text style={{color: 'white', alignSelf: 'center', fontSize: 20, fontFamily: Fonts.emphasis}}>Add Venue</Text>
            <View style={{marginTop: 15}}>
              <View style={styles.separatorLine}/>
              <Image style={styles.divider} source={Images.divider} />
            </View>
            <View style={{marginTop: 10, flexDirection: 'column', justifyContent: 'space-around', flex: 1, alignItems: 'flex-start'}}>
              <View style={{flexDirection: 'column', flex: 1}}>
                <Text style={{color: 'white', alignSelf: 'flex-start', fontSize: 18, fontFamily: Fonts.bold, marginBottom: 10}}>Name</Text>
                <TextInput
                  ref='email'
                  style={{height: 40, width: Metrics.screenWidth - 60, borderColor: Colors.lightGray, borderRadius: 5, borderWidth: 1, color: 'white'}}
                  onEndEditing={this.handleChange.bind(this)}
                  value={this.state.text}
                />
              </View>
              <View style={{flexDirection: 'column', flex: 1}}>
                <Text style={{color: 'white', alignSelf: 'flex-start', fontSize: 18, fontFamily: Fonts.bold, marginBottom: 10}}>City</Text>
                <TextInput
                  ref='password'
                  style={{height: 40, width: Metrics.screenWidth - 60, borderColor: Colors.lightGray, borderRadius: 5, borderWidth: 1, color: 'white'}}
                  onEndEditing={this.handleChange.bind(this)}
                  value={this.state.text}
                />
              </View>
            </View>
            <View style={{flexDirection: 'column', marginTop: 10, marginBottom: 0, flex: 0.5, justifyContent: 'center'}} >
              <TouchableOpacity style={[styles.button, {height: 40, flex: 1, backgroundColor: Colors.lightGreen}]} onPress={this.props.onPress}>
                <Text style={{color: 'white', width: 100, textAlign: 'center', alignSelf: 'center', fontSize: 18}}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, {marginTop: 10, height: 20, flex: 1, justifyContent: 'center', backgroundColor: Colors.crawfish}]} onPress={this.props.onPress}>
                <Text style={{color: 'white', width: 100, textAlign: 'center', alignSelf: 'center', fontSize: 18}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }

}
