'use strict'

import React, { View, ScrollView, ListView, TouchableOpacity, Text } from 'react-native'
import { Routes } from '../Navigation/'
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
        imageUri='https://i.ytimg.com/vi/UIrEM_9qvZU/maxresdefault.jpg'
        title='HEYYYYY'
        />
      </TouchableOpacity>
    )
  }

  render () {
    let bob = ['Tom', 'Dick', 'Harry']
    return (
      <ScrollView style={styles.container}>
        <ListView
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
