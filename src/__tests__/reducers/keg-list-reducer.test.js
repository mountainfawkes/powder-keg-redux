import kegListReducer from '../../Reducers/keg-list-reducer'

describe(`kegListReducer`, () => {
  let action
  const kegData = {
    name: `Bahamut ZERO`,
    brand: `Cacodemonic Cacophonies`,
    // eslint-disable-next-line max-len
    description: `Beware the fireworks summoned from the heavens. This display renders an intergalactic laser dragon that swoops low and close to any crowd it encounters. Use in high winds for best effect. Max height is unlimited given the display's stellar origin. Minimum height: 50 feet.`,
    unitPrice: 75,
    inventory: 53,
    kegPrice: 650,
    kegQuant: 10,
    type: `crossette`,
    id: 6,
  }

  test(`Should return the default state if there is no action`, () => {
    expect(kegListReducer({}, { type: null })).toEqual({})
  })

  test(`Should add a keg to the keg list`, () => {
    const { name,
      brand,
      description,
      unitPrice,
      inventory,
      kegPrice,
      kegQuant,
      type,
      id } = kegData
    action = {
      actionType: `ADD_KEG`,
      name,
      brand,
      description,
      unitPrice,
      inventory,
      kegPrice,
      kegQuant,
      type,
      id,
    }

    expect(kegListReducer({}, action)).toEqual({
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
      },
    })
  })
})
