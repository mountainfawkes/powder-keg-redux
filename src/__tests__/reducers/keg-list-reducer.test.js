import kegListReducer from '../../Reducers/keg-list-reducer'

describe(`kegListReducer`, () => {
  test(`Should return the default state if there is no action`, () => {
    expect(kegListReducer({}, { type: null })).toEqual({})
  })
})
