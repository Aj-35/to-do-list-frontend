import React from 'react'

const ItemList = ({items,handleCheck,handleDelete}) => {
  return (
    <div >
        {(items.length) ? (
        <div>
        <table border={1}>
            <tbody>
                <tr>
            <td>ChechBox</td>
            <td>Task Name</td>
            <td>Action</td>
          </tr>
         
           {items.map((item) => (
              <tr key={item.id}>
                <td><input type="checkbox" checked = {item.checked} onChange={() => handleCheck(item.id)} /></td>
                <td><label style={(item.checked) ? {textDecoration: 'line-through'} : null}>{item.itemName}</label></td>
                <td><button
                onClick={() => handleDelete(item.id)}>Delete</button></td>
              </tr>
            ))}

            </tbody>
          
        </table>

        </div>
        ) : (
            <p>There is no Tasks</p>
        )
}
      </div>
  )
}

export default ItemList