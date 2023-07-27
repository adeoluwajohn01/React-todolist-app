
import React, {useState} from 'react'


function Input(props) {
    const [inputText, setInputText] = useState('');
    const handleEnter = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className='container3'>

        <input type='text' className='input-box' 
        placeholder='Enter To-do' value={inputText} onChange={e=>{
            setInputText(e.target.value)
        }} onKeyDown={handleEnter} />

        <button className='btn' onClick={()=>{
            props.addList(inputText)
            setInputText(" ")
        }}> Add</button>
       
    </div>
  )
}

export default Input