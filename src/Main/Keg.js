import PropTypes from 'prop-types'

const Keg = ({ keg, whenClicked }) => {
  const {
    name,
    brand,
    unitPrice,
    kegPrice,
    kegQuant,
    inventory,
    type,
    id,
  } = keg

  const setUSD = val => {
    const validVal = parseFloat(val)
    const obj = { style: `currency`, currency: `USD` }
    return validVal.toLocaleString(`en-US`, obj)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      onClick={() => whenClicked(id)}
      onKeyDown={() => whenClicked(id)}
      role='main'
      style={
      { borderStyle: `solid`,
        border: `2px`,
        borderRadius: `5%` }
    }
    >
      <h3>{name}</h3>
      <p>{brand}</p>
      <p>Price: {setUSD(unitPrice)}</p>
      <p>In stock: {inventory}</p>
      <p>Keg price: {setUSD(kegPrice)}</p>
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
}
