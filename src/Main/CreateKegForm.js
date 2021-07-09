import { v4 } from 'uuid'

export default ({ onAddNewKeg }) => {
  function handleAddNewKeg(event) {
    event.preventDefault()
    onAddNewKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      unitPrice: event.target.unitPrice.value,
      kegPrice: event.target.kegPrice.value,
      kegQuant: event.target.kegQuant.value,
      inventory: event.target.inventory.value,
      ordType: event.target.ordType.value,
      description: event.target.description.value,
      id: v4(),
    })
  }

  return (
    <>
      <form onSubmit={handleAddNewKeg}>
        <div>
          <label htmlFor='name'>
            Name:
            <input type='text' name='name' required />
          </label>
        </div>
        <div>
          <label htmlFor='brand'>
            Brand:
            <input type='text' name='brand' required />
          </label>
        </div>
        <div>
          <label htmlFor='unitPrice'>
            Price:
            <input type='number' name='unitPrice' required />
          </label>
        </div>
        <div>
          <label htmlFor='kegPrice'>
            Price per keg:
            <input type='number' name='kegPrice' required />
          </label>
        </div>
        <div>
          <label htmlFor='kegQuant'>
            Quantity of ordnance per keg:
            <input type='number' name='kegQuant' required />
          </label>
        </div>
        <div>
          <label htmlFor='inventory'>
            Inventory:
            <input type='number' name='inventory' required />
          </label>
        </div>
        <div>
          <label htmlFor='ordType'>
            Type:
            <input type='text' name='ordType' required />
          </label>
        </div>
        <p>Description:</p>
        <div>
          <textarea
            cols='50'
            rows='5'
            name='description'
            placeholder='Tell us how incredible this fireworks
            display is when it explodes'
            required
          />
        </div>
        <button type='submit'>Add new keg</button>
      </form>
    </>
  )
}
