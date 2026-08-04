import './App.css'

const SearchItem = ({search,setSearch}) => {
  return (
    <div>
        <input
        className='inputBar'
        placeholder='SearchItems' 
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default SearchItem