export default ({ handleUpdateInventory, id }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  <button
    type='submit'
    onClick={() => {
      handleUpdateInventory(id, 0.5)
    }
    }
  >
    SELL ORD
  </button>
)
