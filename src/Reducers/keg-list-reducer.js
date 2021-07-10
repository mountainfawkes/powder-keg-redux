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
        mainKegList } }
    case aTypes.toggleForm:
      return { ...state,
        formVisible: !state.formVisible }
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
