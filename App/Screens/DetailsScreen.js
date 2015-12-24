'use strict'

import React, { ScrollView, View, TouchableHighlight, Image, Text, TextInput } from 'react-native'
// import { Routes } from '../Navigation/'
import styles from '../Styles/DetailsScreenStyle'

export default class DetailsScreen extends React.Component {

  static propTypes = {
    navigator: React.PropTypes.object,
    dispatch: React.PropTypes.func
  }

  render () {
    return (
      <View style={styles.background}>
        <Image style={styles.backgroundImage} source={require('../Images/lightWood.jpg')}/>
        <ScrollView>
          <View style={styles.mapContainer}>
            <Image style={styles.image} source={require('../Images/newspaper.jpg')}/>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.headerContainer}>
              <Text allowFontScaling={false} style={styles.header}>DETAILS</Text>
            </View>
            <View style={styles.labelContainer}>
              <Text allowFontScaling={false} style={styles.boldLabel}>Address</Text>
              <Text allowFontScaling={false} style={styles.dataLabel}>HELLO</Text>
            </View>
            <View style={styles.labelContainer}>
              <Text allowFontScaling={false} style={styles.boldLabel}>Phone</Text>
              <Text allowFontScaling={false} style={styles.dataLabel}>HELLO</Text>
            </View>
            <View style={styles.labelContainer}>
              <Text allowFontScaling={false} style={styles.boldLabel}>Hours</Text>
              <Text allowFontScaling={false} style={styles.dataLabel}>HELLO</Text>
            </View>
            <View style={styles.labelContainer}>
              <Text allowFontScaling={false} style={styles.boldLabel}>Rating</Text>
              <Text allowFontScaling={false} style={styles.dataLabel}>* * * *</Text>
            </View>

            <View style={styles.line}/>

            <TextInput
              style={styles.discrepancyContainer}
              placeholder='Enter New Price'
              placeholderColor='red'
              textAlign='center'
            />
            <TouchableHighlight
              style={styles.submitButton}
              underlayColor='red'
            >
              <Text allowFontScaling={false} style={{color: 'white', fontSize: 16}}>Submit</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    )
  }
}

// function mapStateToProps (state) {
//   if (state.cases.subjectList === undefined) {
//     return {
//       caseId: state.cases.currentCaseId
//     }
//   }
//   return {
//     caseId: state.cases.currentCaseId,
//     subjectList: state.cases.subjectList
//   }
// }

// export default connect(mapStateToProps)(SubjectsScreen)
