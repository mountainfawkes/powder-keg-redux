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
