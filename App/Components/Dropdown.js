import {Icon} from 'react-native-icons'
import React, { View, Text, TouchableOpacity, TouchableHighlight, Modal, ListView } from 'react-native'
import { Colors, Metrics } from '../Themes/'
import styles from '../Styles/DropdownStyle'
import _ from 'lodash'

const ROW_HEIGHT = 30
const LIST_PADDING_TOP = 15

export default class Dropdown extends React.Component {

  // Example Usage
  // <Dropdown
  //   selected={'Option one'}
  //   disabled={false}
  //   options={['Option one', 'Option two']}
  //   placeholder={'Placeholder'}
  //   reversed
  // />

  constructor (props) {
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(this.props.options),
      pickerVisible: false,
      top: 0,
      left: 0,
      width: 200,
      height: 50,
      selected: this.props.selected
    }
  }

  shouldComponentUpdate (newProps, newState) {
    return !_.isEqual(this.state, newState) || !_.isEqual(this.props, newProps)
  }

  renderDropdownIcon () {
    if (!this.props.disabled) {
      return (
        <Icon
          name='fontawesome|arrow-circle-down'
          size={Metrics.icons.small.size}
          color={Colors.cloudGray}
          style={styles.dropdownIcon}
        />
      )
    }
  }

  renderRow (rowData) {
    return (
      <TouchableOpacity onPress={this.optionSelected.bind(this, rowData)}>
        <Text allowFontScaling={false} style={{flex: 1, alignItems: 'center', height: ROW_HEIGHT, color: Colors.black}}>{rowData}</Text>
      </TouchableOpacity>
    )
  }

  optionSelected (rowData) {
    this.setState({
      pickerVisible: false,
      selected: rowData
    })
  }

  get selected () {
    return this.state.selected
  }

  placeOptionList () {
    if (this.props.options.length === 0) {
      window.alert('No Options')
      return
    }

    this.showOptionList()
    // Scroll Animation: scroll first and then show items
    /*
    if (this.props.scrollTo) {
      this.props.scrollTo()
      setTimeout(() => { this.showOptionList() }, 500)
    } else {
      this.showOptionList()
    }
    */
  }

  modalVerticalPosition (y, height) {
    if (this.props.reversed) {
      let newY = y - (this.props.options.length * ROW_HEIGHT) - LIST_PADDING_TOP
      return (newY < 0) ? 0 : newY
    }
    return y + height
  }

  showOptionList () {
    if (this.state.pickerVisible) {
      this.setState({pickerVisible: false})
    } else if (!this.props.disabled) {
      this.refs.dropdown.measure((ox, oy, width, height, px, py) => {
        this.setState({
          pickerVisible: true,
          top: this.modalVerticalPosition(py, height),
          left: px,
          width: width,
          height: height * 3
        })
      })
    }
  }

  static propTypes = {
    selected: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    options: React.PropTypes.array,
    scrollTo: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    reversed: React.PropTypes.bool,
    dropWidth: React.PropTypes.number
  };

  render () {
    return (
      <View>
        <TouchableHighlight
          style={{width: this.props.dropWidth, alignSelf: 'center'}}
          onPress={this.placeOptionList.bind(this)}
          ref='dropdown'
          underlayColor={Colors.ashGray}
        >
          <View style={[styles.container, !this.state.selected && styles.containerDefault]}>
            <Text
              allowFontScaling={false}
              style={[styles.dropdownText, !this.state.selected && styles.dropdownTextDefault]}>
              {this.state.selected ? this.state.selected : this.props.placeholder}
            </Text>
          </View>
        </TouchableHighlight>

        <Modal
          visible={this.state.pickerVisible}
          transparent
        >
          <TouchableOpacity style={{flex: 1, backgroundColor: 'rgba(0,0,0,0)'}} onPress={this.placeOptionList.bind(this)}>
            <View ref='list' style={{top: this.state.top, left: this.state.left, width: this.state.width}}>
              <ListView
                keyboardShouldPersistTaps
                style={{paddingTop: LIST_PADDING_TOP, paddingHorizontal: 10, backgroundColor: Colors.lightGray}}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
              />
            </View>

          </TouchableOpacity>
        </Modal>
      </View>
    )
  }
}
