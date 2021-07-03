import PropTypes from 'prop-types'

const Keg = ({ keg, handleKegSelection }) => {
  const {
    name,
    brand,
    unitPrice,
    inventory,
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
      onClick={() => handleKegSelection(id)}
      onKeyDown={() => handleKegSelection(id)}
      role='main'
    >
      <h3>{name}</h3>
      <p>{brand}</p>
      <p>Price: {setUSD(unitPrice)}</p>
      <p>In stock: {inventory}</p>
    </div>
  )
}

export default Keg

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  unitPrice: PropTypes.number,
  inventory: PropTypes.number,
}
