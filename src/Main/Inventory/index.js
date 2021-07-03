import BuyKeg from './BuyKeg'
import SellKeg from './SellKeg'
import SellOrd from './SellOrd'

export default ({ handleUpdateInventory, id }) => (
  <>
    <SellOrd
      handleUpdateInventory={handleUpdateInventory}
      id={id}
    />
    <SellKeg
      handleUpdateInventory={handleUpdateInventory}
      id={id}
    />
    <BuyKeg
      handleUpdateInventory={handleUpdateInventory}
      id={id}
    />
  </>
)
