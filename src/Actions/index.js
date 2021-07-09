import * as aTypes from './ActionTypes'

/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

export const addKeg = newKeg => {
  const { name,
    brand,
    description,
    unitPrice,
    inventory,
    kegPrice,
    kegQuant,
    ordType,
    id } = newKeg
  return { type: aTypes.addKeg,
    name,
    brand,
    description,
    unitPrice,
    inventory,
    kegPrice,
    kegQuant,
    ordType,
    id }
}

export const updateKeg = (thisKeg, newInventory) => {
  const { name,
    brand,
    description,
    unitPrice,
    kegPrice,
    kegQuant,
    ordType,
    id } = thisKeg
  return { type: aTypes.addKeg,
    name,
    brand,
    description,
    unitPrice,
    inventory: newInventory,
    kegPrice,
    kegQuant,
    ordType,
    id }
}

export const toggleForm = () => ({ type: aTypes.toggleForm })

export const selectKeg = thisKeg => {
  const { name,
    brand,
    description,
    unitPrice,
    inventory,
    kegPrice,
    kegQuant,
    ordType,
    id } = thisKeg
  return { type: aTypes.selectKeg,
    name,
    brand,
    description,
    unitPrice,
    inventory,
    kegPrice,
    kegQuant,
    ordType,
    id }
}
