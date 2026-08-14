
import './App.css';
import { useState,useEffect } from 'react'
import { getItems, addItemList, deleteItem, updateItem } from './services/userservice';
import Content from './Content';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Footer from './Footer';



function App() {
  const [items,setItems] = useState([])
  const [newItem,setNewItem] = useState('')
  const [search,setSearch] = useState('')

  const [isLoading,setIsLoading] = useState(true)
  const [actionMessage,setActionMessage] = useState('')


useEffect(() => { fetchItems()},[])
  const fetchItems = async () =>{
    try{
      const response = await getItems();
      setItems(response.data)
    }
    catch(err){
      if(err.response){
        console.log(err.response.data)
      }
      else{
        console.log(`Error ${err.message}`)
      }
    }
    finally{
      setIsLoading(false)
    }
  }


  const addItem = async (itemName) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1 
    const addNewItem = {id , itemName, checked: false}

    setActionMessage('Adding..')
    try{
    const response = await addItemList(addNewItem)
    const listItems = prev => ([...prev, response.data])
    setItems(listItems)
    }
    catch(err){
      setActionMessage('Could not add the task')
      return
    }
    setActionMessage('')

  }


    const handleCheck = async (id) => {
        const updatecheck = items.find(item => item.id === id)
        const toggled = {...updatecheck, checked: !updatecheck.checked}

        setActionMessage('Updating..')

        try{
        await updateItem(id,toggled)
        const updatedcheck = prev => prev.map((item) => item.id === id ? toggled : item )
        setItems(updatedcheck)
        }
        catch(err){
          setActionMessage('Could not update...')
          return
        }

        setActionMessage('')
    }

    const handleDelete = async (id) => {
      setActionMessage('Deleting..')

      try{
        await deleteItem(id)
        fetchItems()
      }
      catch(err){
        setActionMessage('Could not Delete..')
        return
      }

      setActionMessage('')
    }

    const handleSubmit= async (e) => {
      e.preventDefault()
      //const response = await api.post('/items',newItem)
      addItem(newItem)
      setNewItem('')
    }

  return (
    <div className="App">
      <header className="App-header">
        <title>To Do List</title>
        
      </header>
      <AddItem
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
       />
      <SearchItem
        search = {search}
        setSearch = {setSearch}
       />

      {actionMessage && (
        <p className='status-message' role='status'>
          {actionMessage}
        </p>
      )}
      
      {isLoading ? (
        <p>Loading Tasks</p>
      ) :(
      
      <Content 
      items = {items.filter((item) => (item.itemName)?.toLowerCase().includes(search.toLowerCase()))}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />
      )} 

      <Footer 
      items = {items.filter((item) => (item.itemName)?.toLowerCase().includes(search.toLowerCase()))}
      />
      
    </div>
  );
}

export default App;
