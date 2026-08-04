import './App.css'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <input 
            className='inputBar'
            autoFocus
            type="text"
            id='addItem'
            placeholder='Enter the Tasks'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            required
       
        />
        <button className='addButton' type='submit'>Add</button>
    </form>
  )
}

export default AddItem