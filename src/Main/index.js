import { Component } from "react"
import PropTypes from 'prop-types'
import KegList from "./KegList"
import CreateKegForm from "./CreateKegForm"
import KegDetail from "./KegDetail"
import Kegs from '../Data/seedKegs'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formVisible: false,
      selectedKeg: null,
      mainKegList: Kegs,
    }
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisible: false,
        selectedKeg: null,
      })
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible,
      }))
    }
  }

  handleKegSelection = id => {
    this.setState(prevState => ({
      selectedKeg: prevState.mainKegList.filter(keg => keg.id === id)[0],
    }))
  }

  handleAddNewKeg = newKeg => {
    this.setState(prevState => ({
      mainKegList: [...prevState.mainKegList, newKeg],
      formVisible: false,
    }))
  }

  // inventory is at this.state.mainKegList[i].inventory
  // I have to copy the keg list from the previous state
  // then select one of the kegs out of previous state
  // then alter the inventory property of the selected keg
  handleUpdateInventory = (newInventory, id) => {
    const kegToUpdate = this.mainKegList.filter(keg => keg.id === id)[0]
    kegToUpdate.inventory = newInventory
    this.setState(prevState => ({
      mainKegList:
      [...prevState.mainKegList[kegToUpdate.id] = kegToUpdate],
    }))
  }

  render() {
    let visibleState = null
    let buttonText = null

    if (this.state.selectedKeg != null) {
      visibleState = <KegDetail keg={this.state.selectedKeg} />
      buttonText = `Return to kegs`
    } else if (this.state.formVisible) {
      visibleState = <CreateKegForm onAddNewKeg={this.handleAddNewKeg} />
      buttonText = `Return to kegs`
    } else {
      visibleState = <KegList
        mainKegList={this.state.mainKegList}
        handleKegSelection={this.handleKegSelection}
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

export default Main

Kegs.propTypes = {
  Kegs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      brand: PropTypes.string,
      unitPrice: PropTypes.number,
      inventory: PropTypes.number,
      kegPrice: PropTypes.number,
      kegQuant: PropTypes.number,
      type: PropTypes.string,
    })
  ),
}
