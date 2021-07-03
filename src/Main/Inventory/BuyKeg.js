export default ({ handleUpdateInventory, id, kegQuant }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  <button
    type='submit'
    onClick={() => {
      handleUpdateInventory(id, kegQuant)
    }
    }
  >
    Buy a keg
  </button>
)
