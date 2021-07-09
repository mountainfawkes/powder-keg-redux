import kegListReducer from '../../Reducers/keg-list-reducer'
import * as a from '../../Actions/index'
import seedKegs from '../../Data/seedKegs'

describe(`kegListReducer`, () => {
  let action
  const anotherKeg = {
    name: `Bahamut ZERO`,
    brand: `Cacodemonic Cacophonies`,
    // eslint-disable-next-line max-len
    description: `Beware the fireworks summoned from the heavens. This display renders an intergalactic laser dragon that swoops low and close to any crowd it encounters. Use in high winds for best effect. Max height is unlimited given the display's stellar origin. Minimum height: 50 feet.`,
    unitPrice: 75,
    inventory: 53,
    kegPrice: 650,
    kegQuant: 10,
    ordType: `crossette`,
    id: 5,
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
      id } = anotherKeg
    action = a.addKeg(anotherKeg)

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
      id } = anotherKeg
    const newInventory = inventory + 1
    const action = a.updateKeg(anotherKeg, newInventory)

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

  // TEST 4, set form visibility

  test(`Should toggle the visibility of CreateKegForm`, () => {
    const action = a.toggleForm()

    expect(kegListReducer({}, action)).toEqual({ formVisible: true })
  })

  // TEST 5, set selectedKeg

  test(`Should set the property selectedKeg to a given keg`, () => {
    const thisKeg = seedKegs[4]
    const { name,
      brand,
      description,
      unitPrice,
      inventory,
      kegPrice,
      kegQuant,
      ordType,
      id } = thisKeg
    const action = a.selectKeg(thisKeg)

    expect(kegListReducer({}, action)).toEqual({
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
      } },
    })
  })

  // TEST 6, reset main

  test(`Should set the formVisible prop to false`, () => {
    const action = a.resetMain()

    expect(kegListReducer({}, action)).toEqual({ formVisible: false,
      selectedKeg: null })
  })

  // TEST 7, clear selected keg

  test(`Should reset the selectedKeg prop to null`, () => {
    const action = a.clearSelected()

    expect(kegListReducer({}, action)).toEqual({ selectedKeg: null })
  })
})
