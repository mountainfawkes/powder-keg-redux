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
    case aTypes.addKeg:
      return { ...state,
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
        } }
    case aTypes.toggleForm:
      return { ...state,
        formVisible: !state.formVisible }
    case aTypes.hideForm:
      return { ...state,
        formVisible: false }
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
    case aTypes.clearSelected:
      return { ...state,
        selectedKeg: null }
    default:
      return state
  }
}
