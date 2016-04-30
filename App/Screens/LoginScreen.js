import React, { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import styles from '../Styles/LoginScreenStyle'
import { Colors, Fonts, Images, Metrics } from '../Themes'

export default class LoginScreen extends React.Component {

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
            <Text style={{color: 'white', alignSelf: 'center', fontSize: 20, fontFamily: Fonts.emphasis}}>Login to use favorites</Text>
            <View style={{marginTop: 15}}>
              <View style={styles.separatorLine}/>
              <Image style={styles.divider} source={Images.divider} />
            </View>
            <View style={{marginTop: 10, flexDirection: 'column', justifyContent: 'space-around', flex: 1, alignItems: 'flex-start'}}>
              <View style={{flexDirection: 'column', flex: 1}}>
                <Text style={{color: 'white', alignSelf: 'flex-start', fontSize: 18, fontFamily: Fonts.bold, marginBottom: 10}}>Email</Text>
                <TextInput
                  ref='email'
                  style={{height: 40, width: Metrics.screenWidth - 60, borderColor: Colors.lightGray, borderRadius: 5, borderWidth: 1, color: 'white'}}
                  onEndEditing={this.handleChange.bind(this)}
                  value={this.state.text}
                />
              </View>
              <View style={{flexDirection: 'column', flex: 1}}>
                <Text style={{color: 'white', alignSelf: 'flex-start', fontSize: 18, fontFamily: Fonts.bold, marginBottom: 10}}>Password</Text>
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
                <Text style={{color: 'black', width: 100, textAlign: 'center', alignSelf: 'center', fontSize: 18}}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop: 10, height: 20, flex: 1, justifyContent: 'center'}} onPress={this.props.onPress}>
                <Text style={{height: 20, color: 'white', textAlign: 'center', alignSelf: 'center', fontSize: 12}}>Not Registered? Click here to sign up!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }

}
