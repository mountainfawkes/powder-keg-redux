import Inventory from "./Inventory"
import Keg from "./Keg"

export default ({ mainKegList, handleKegSelection, handleUpdateInventory }) => (
  <>
    {mainKegList.map(keg => (
      <div>
        <Keg
          handleKegSelection={handleKegSelection}
          keg={keg}
          id={keg.id}
          key={keg.id}
        />
        <div id={keg.id} key={keg.id + (2 * mainKegList.length)}>
          <Inventory
            handleUpdateInventory={handleUpdateInventory}
            kegQuant={keg.kegQuant}
            id={keg.id}
            key={keg.id + mainKegList.length}
          />
        </div>
      </div>
    ))}
  </>
)
