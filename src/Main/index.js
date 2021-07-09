import { Component } from "react"
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import KegList from "./KegList"
import CreateKegForm from "./CreateKegForm"
import KegDetail from "./KegDetail"
// import Kegs from '../Data/seedKegs'
// import kegListReducer from "../Reducers/keg-list-reducer"

class Main extends Component {
  constructor(props) {
    super(props)
    console.log(props.mainKegList)
    this.state = {
      formVisible: false,
      selectedKeg: null,
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
    this.setState(() => ({
      selectedKeg: this.props.mainKegList[id],
    }))
  }

  handleAddNewKeg = newKeg => {
    const { dispatch } = this.props
    const { name,
      brand,
      description,
      unitPrice,
      inventory,
      kegPrice,
      kegQuant,
      ordType,
      id } = newKeg
    const action = { type: `ADD_KEG`,
      name,
      brand,
      description,
      unitPrice,
      inventory,
      kegPrice,
      kegQuant,
      ordType,
      id }
    dispatch(action)

    this.setState({ formVisible: false })
  }

  handleUpdateInventory = (id, increment) => {
    const { dispatch } = this.props
    const thisKeg = this.props.mainKegList[id]
    console.log(thisKeg)
    const { name,
      brand,
      description,
      unitPrice,
      kegPrice,
      kegQuant,
      ordType } = thisKeg
    const newInventory = thisKeg.inventory + increment
    const action = { type: `ADD_KEG`,
      name,
      brand,
      description,
      unitPrice,
      inventory: newInventory,
      kegPrice,
      kegQuant,
      ordType,
      id }
    console.log(action)
    dispatch(action)

    // this.setState(prevState => ({
    //   mainKegList: prevState.mainKegList.filter((keg, i, arr) => {
    //     if (arr[i].id === id && (arr[i].inventory + increment >= 0)) {
    //       arr[i].inventory += increment
    //     }
    //     return arr
    //   }),
    // }))
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

const mapStateToProps = state => ({ mainKegList: state })

// eslint-disable-next-line no-class-assign
Main = connect(mapStateToProps)(Main)

export default Main

// Kegs.propTypes = {
//   Kegs: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       brand: PropTypes.string,
//       unitPrice: PropTypes.number,
//       inventory: PropTypes.number,
//       kegPrice: PropTypes.number,
//       kegQuant: PropTypes.number,
//       ordType: PropTypes.string,
//     })
//   ),
// }
