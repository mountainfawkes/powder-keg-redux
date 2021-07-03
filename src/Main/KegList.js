import Inventory from "./Inventory"
import Keg from "./Keg"

export default ({ mainKegList, handleKegSelection }) => (
  <>
    {mainKegList.map(keg => (
      <div>
        <Keg
          handleKegSelection={handleKegSelection}
          keg={keg}
          id={keg.id}
          key={keg.id}
        />
        <Inventory />
      </div>
    ))}
  </>
)
