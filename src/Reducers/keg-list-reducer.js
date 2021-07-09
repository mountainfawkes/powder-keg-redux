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
          ordType,
          id,
        } }
    default:
      return state
  }
}