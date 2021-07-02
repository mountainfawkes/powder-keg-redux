const Keg = ({ keg }) => {
  const { name, brand, unitPrice, kegPrice, kegQuant, inventory, type } = keg
  return (
    <div>
      <p>{name}</p>
      <p>{brand}</p>
      <p>{unitPrice}</p>
      <p>{inventory}</p>
      <p>{kegPrice}</p>
      <p>{kegQuant}</p>
      <p>{type}</p>
    </div>
  )
}

export default Keg
