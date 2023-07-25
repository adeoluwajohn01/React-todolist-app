import React from 'react'

function List(props) {
  return (
    <li className='items'>
        {props.item}
        <span className='icon'>
            <i class="fa-solid fa-trash delete" onClick={e=>{
                props.delete(props.index)
            }}></i>
        </span>
    </li>
  )
}

export default List