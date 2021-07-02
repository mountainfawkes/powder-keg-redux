import PropTypes from 'prop-types'

const Keg = ({ keg }) => {
  const {
    name,
    brand,
    unitPrice,
    kegPrice,
    kegQuant,
    inventory,
    type,
    description,
  } = keg

  const setUSD = val => {
    const obj = { style: `currency`, currency: `USD` }
    return val.toLocaleString(`en-US`, obj)
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>{brand}</p>
      <p>Price: {setUSD(unitPrice)}</p>
      <p>In stock: {inventory}</p>
      <p>Keg price: {setUSD(kegPrice)}</p>
      <p>{description}</p>
      <p>Ordnances per keg: {kegQuant}</p>
      <p>Ordnance type: {type}</p>
    </div>
  )
}

export default Keg

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  unitPrice: PropTypes.number,
  inventory: PropTypes.number,
  kegPrice: PropTypes.number,
  kegQuant: PropTypes.number,
  type: PropTypes.string,
  description: PropTypes.string,
}
