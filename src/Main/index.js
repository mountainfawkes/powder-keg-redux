import { Component } from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import KegList from "./KegList"
import CreateKegForm from "./CreateKegForm"
import KegDetail from "./KegDetail"
import * as a from '../Actions/index'

class Main extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      // formVisible: false,
      // selectedKeg: null,
    }
  }

  handleClick = () => {
    if (this.props.selectedKeg != null && this.props.formVisible === true) {
      const { dispatch } = this.props
      const action = a.resetMain()
      console.log(action)
      dispatch(action)
      // this.setState({
      //   formVisible: false,
      //   selectedKeg: null,
      // })
    } else if (this.props.selectedKeg === null &&
       this.props.formVisible === false) {
      const { dispatch } = this.props
      const action = a.toggleForm()
      console.log(action)
      dispatch(action)
      // this.setState(prevState => ({
      //   formVisible: !prevState.formVisible,
      // }))
    }
  }

  handleKegSelection = id => {
    this.setState(() => ({
      selectedKeg: this.props.mainKegList[id],
    }))
  }

  handleAddNewKeg = newKeg => {
    const { dispatch } = this.props
    const action = a.addKeg(newKeg)
    dispatch(action)
  }

  handleUpdateInventory = (id, increment) => {
    const { dispatch } = this.props
    const thisKeg = this.props.mainKegList[id]
    console.log(thisKeg)
    const newInventory = thisKeg.inventory + increment
    const action = a.updateKeg(thisKeg, newInventory)
    console.log(action)
    dispatch(action)
  }

  render() {
    let visibleState = null
    let buttonText = null

    if (this.state.selectedKeg != null) {
      visibleState = <KegDetail keg={this.state.selectedKeg} />
      buttonText = `Return to kegs`
    } else if (this.props.formVisible) {
      visibleState = <CreateKegForm onAddNewKeg={this.handleAddNewKeg} />
      buttonText = `Return to kegs`
    } else {
      visibleState = <KegList
        mainKegList={this.props.mainKegList}
        handleKegSelection={this.handleKegSelection}
        handleUpdateInventory={this.handleUpdateInventory}
      />
      buttonText = `Add a new keg`
    }

    return (
      <>
        <div style={
          { margin: `40px`,
            padding: `20px` }
          }
        >
          <h2>Inventory</h2>
          {visibleState}
          <button
            type='button'
            onClick={this.handleClick}
          >
            {buttonText}</button>
        </div>
      </>
    )
  }
}

Main.propTypes = {
  mainKegList: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      brand: PropTypes.string,
      unitPrice: PropTypes.number,
      inventory: PropTypes.number,
      kegPrice: PropTypes.number,
      kegQuant: PropTypes.number,
      ordType: PropTypes.string,
    })
  ),
}

const mapStateToProps = state => ({
  mainKegList: state.mainKegList,
  selectedKeg: state.selectedKeg,
  formVisible: state.formVisible,
})

// eslint-disable-next-line no-class-assign
Main = connect(mapStateToProps)(Main)

export default Main
