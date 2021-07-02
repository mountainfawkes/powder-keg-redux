import Keg from './Keg'

export default ({ selectedKeg }) => {
  const {
    name,
    brand,
    unitPrice,
    kegPrice,
    kegQuant,
    inventory,
    type,
    id,
    description,
  } = selectedKeg

  const setUSD = val => {
    const validVal = parseFloat(val)
    const obj = { style: `currency`, currency: `USD` }
    return validVal.toLocaleString(`en-US`, obj)
  }

  return (
    <>
      <h2>{name}</h2>
      <p>{brand}</p>
      <span>Price: {setUSD(unitPrice)}</span>
      <span>{inventory}</span>
      <p>{description}</p>
    </>
  )
}
