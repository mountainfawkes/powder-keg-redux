import Keg from "./Keg"

export default ({ mainKegList, handleKegSelection }) => (
  <>
    {mainKegList.map(keg => (
      <Keg
        handleKegSelection={handleKegSelection}
        keg={keg}
        id={keg.id}
        key={keg.id}
      />
    ))}
  </>
)
