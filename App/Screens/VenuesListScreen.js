'use strict'

import React, { ScrollView, ListView, TouchableOpacity, Image } from 'react-native'
// import { Routes } from '../Navigation/'
import VenueCell from '../Components/VenueCell'
import styles from '../Styles/VenuesListScreenStyle'

export default class VenuesListScreen extends React.Component {
  // <SubjectsCell
  //   title={rowData.name}
  //   imageUri={rowData.thumbnail}
  //   subtitle={rowData.type}
  // />
  constructor (props) {
    super(props)
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds
    }
  }

  static propTypes = {
    navigator: React.PropTypes.object,
    dispatch: React.PropTypes.func
  }

  cellPress (rowData) {
    // this.props.dispatch(setSubjectId(Number(rowData.subjectId)))
    window.alert('Open Details Screen')
    // this.props.navigator.push(Routes.SubjectDetailsScreen)
  }

  customRowRender (rowData) {
    return (
      <TouchableOpacity onPress={this.cellPress.bind(this, rowData)}>
        <VenueCell
        imageUri='http://static1.squarespace.com/static/5593fe3ae4b0e661aff7b9dc/55b8e418e4b05042d5b9abd7/55ca49bce4b03dbaa0747b42/1440595367465/?format=1500w'
        // imageUri='https://i.ytimg.com/vi/UIrEM_9qvZU/maxresdefault.jpg'
        title="Harry's House of Seafood"
        distance='2.12 mi'
        priceBoiled='$3.50'
        />
      </TouchableOpacity>
    )
  }
// <Image source={require('../Images/lightWood.jpg')}>
  render () {
    let bob = ['Tom', 'Dick', 'Harry', 'Tom', 'Dick', 'Harry']
    return (
      <ScrollView>
        <Image style={styles.image} source={require('../Images/lightWood.jpg')}/>
        <ListView
          style={styles.listy}
          dataSource={this.state.dataSource.cloneWithRows(bob)}
          renderRow={this.customRowRender.bind(this)}
        />
      </ScrollView>
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
