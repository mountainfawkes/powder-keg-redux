import { Component } from "react"
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
    this.setState(prevState => ({
      formVisible: !prevState.formVisible,
    }))
  }

  handleKegSelection = id => {
    this.setState(prevState => ({
      selectedKeg: prevState.mainKegList.filter(keg => keg.id === id)[0],
    }))
  }

  render() {
    let visibleState = null
    let buttonText = null

    if (this.state.formVisible) {
      visibleState = <CreateKegForm />
      buttonText = `Return to kegs`
    } else if (this.state.selectedKeg === !null) {
      visibleState = <KegDetail />
      buttonText = `Return to kegs`
    } else {
      visibleState = <KegList
        mainKegList={this.state.mainKegList}
        onKegSelection={this.handleKegSelection}
      />
      buttonText = `Add a new keg`
    }

    return (
      <>
        <div style={
          { margin: `20px`,
            padding: `20px`,
            width: `100vw`,
            border: `2px` }
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
