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
    ordType: `crossette`,
    id: 6,
  }

  // TEST 1, return default state

  test(`Should return the default state if there is no action`, () => {
    expect(kegListReducer({}, { type: null })).toEqual({})
  })

  // TEST 2, add a keg to the keg list

  test(`Should add a keg to the keg list`, () => {
    const { name,
      brand,
      description,
      unitPrice,
      inventory,
      kegPrice,
      kegQuant,
      ordType,
      id } = kegData
    action = {
      type: `ADD_KEG`,
      name,
      brand,
      description,
      unitPrice,
      inventory,
      kegPrice,
      kegQuant,
      ordType,
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
        ordType,
        id,
      },
    })
  })

  // TEST 3, should update the inventory by the given increment

  test(`Should update the inventory with a given increment`, () => {
    const { name,
      brand,
      description,
      unitPrice,
      inventory,
      kegPrice,
      kegQuant,
      ordType,
      id } = kegData
    const newInventory = inventory + 1
    const action = {
      type: `ADD_KEG`,
      name,
      brand,
      description,
      unitPrice,
      inventory: newInventory,
      kegPrice,
      kegQuant,
      ordType,
      id,
    }
    expect(kegListReducer({}, action)).toEqual({ [id]: {
      name,
      brand,
      description,
      unitPrice,
      inventory: newInventory,
      kegPrice,
      kegQuant,
      ordType,
      id,
    } })
  })
})