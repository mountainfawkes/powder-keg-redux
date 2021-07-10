import * as aTypes from '../Actions/ActionTypes'

export default (state = {}, action) => {
  const { name,
    brand,
    description,
    unitPrice,
    inventory,
    kegPrice,
    kegQuant,
    ordType,
    id } = action
  switch (action.type) {
    // CASE 1, add keg
    case aTypes.addKeg: {
      const mainKegList = {
        ...state.mainKegList,
        [id]: {
          name,
          brand,
          description,
          unitPrice,
          inventory,
          kegPrice,
          kegQuant,
          ordType,
          id,
        },
      }
      return { ...state,
        mainKegList,
        formVisible: false } }

    // CASE 2, toggle form
    case aTypes.toggleForm:
      return { ...state,
        formVisible: !state.formVisible }

    // CASE 3, reset main
    case aTypes.resetMain: {
      return { ...state, formVisible: false, selectedKeg: null }
    }

    // CASE 4, select keg
    case aTypes.selectKeg:
      return { ...state,
        selectedKeg: { [id]: {
          name,
          brand,
          description,
          unitPrice,
          inventory,
          kegPrice,
          kegQuant,
          ordType,
          id,
        } } }
    default:
      return state
  }
}
