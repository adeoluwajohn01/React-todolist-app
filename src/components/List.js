import React from 'react'



function List(props) {
  const handleClick = (e) =>{
    if(e.target.style.textDecoration){
      e.target.style.removeProperty('text-decoration');
      e.target.style.removeProperty('color');
      e.target.style.removeProperty('border-color');
    } else {
      e.target.style.setProperty('text-decoration', 'line-through');
      e.target.style.setProperty('color', 'brown');
      e.target.style.setProperty('border-color', 'white');
    }
  };
  return (
    <li className='items' onClick={handleClick}>
     
        {props.item}
  
       
       <span className='icon'>
            <i class="fa-solid fa-trash " onClick={e=>{
                props.delete(props.index)
            }}></i>
        </span>  
      
    </li>
  
  )
}

export default List