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
    case aTypes.addKeg: {
      const newState = { [id]: {
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
      formVisible: false }
      return { ...state, ...newState }
    }
    case aTypes.toggleForm:
      return { ...state,
        formVisible: !state.formVisible }
    case aTypes.resetMain: {
      const newProps = { formVisible: false, selectedKeg: null }
      return { ...state, ...newProps }
    }
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
