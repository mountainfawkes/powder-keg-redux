export default (state = {}, action) => {
  const { name,
    brand,
    description,
    unitPrice,
    inventory,
    kegPrice,
    kegQuant,
    type,
    id } = action
  switch (action.actionType) {
    case `ADD_KEG`:
      return { ...state,
        [id]: {
          name,
          brand,
          description,
          unitPrice,
          inventory,
          kegPrice,
          kegQuant,
          type,
          id,
        } }
    default:
      return state
  }
}

// add a keg
// select and return a keg
// select and increment a keg
