import Keg from "./Keg"

export default ({ mainKegList = [] }) => (
  mainKegList.map((keg, i) => (
    <Keg key={i} keg={keg} />
  ))
)
