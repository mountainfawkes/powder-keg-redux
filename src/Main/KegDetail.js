import PropTypes from 'prop-types'
import Keg from './Keg'

export default ({ keg }) => {
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
  } = keg

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
      <span>In stock: {inventory}</span>
      <p>{description}</p>

      <div>
        <h3>Additional information and pricing options</h3>
        <p>Price per keg ({kegQuant} ordnances): {setUSD(kegPrice)}</p>
        <p>Ordnance type: {type}</p>
        <p><em>
          For more information about ordnance type,
          refer to <a
            href='https://youtu.be/kFE1rpMO1sA'
            target='_blank'
            rel='noreferrer'
          >this short video</a>.</em></p>
        <p>Ordnance id: {id}</p>
      </div>
    </>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  unitPrice: PropTypes.number,
  kegPrice: PropTypes.number,
  kegQuant: PropTypes.number,
  inventory: PropTypes.number,
  type: PropTypes.string,
  description: PropTypes.string,
}
