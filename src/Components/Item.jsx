import React from 'react'

const Item = ({ itemName , itemColor = "green" , textColor , itemId  }) => {
  return (
 
        <li  style={{backgroundColor: itemColor ,color: textColor , marginTop:4}}> {itemId} {itemName}  </li>
   
  )
}

export default Item