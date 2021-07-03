import BuyKeg from './BuyKeg'
import SellKeg from './SellKeg'
import SellOrd from './SellOrd'

export default ({ handleUpdateInventory, id, kegQuant }) => (
  <>
    <SellOrd
      handleUpdateInventory={handleUpdateInventory}
      id={id}
    />
    <SellKeg
      handleUpdateInventory={handleUpdateInventory}
      id={id}
      kegQuant={kegQuant}
    />
    <BuyKeg
      handleUpdateInventory={handleUpdateInventory}
      id={id}
      kegQuant={kegQuant}
    />
  </>
)
