import React, {useState} from 'react';

function ToDoForm(props){

    const [text, setText] = useState('')
  
    function handleChange(event){
      let text = event.target.value;
      setText(text);
    }
    
    function addItem(event){
      event.preventDefault();
      if(text){
        // setItems([...items, text])
        props.onAddItem(text);
        setText('')
      }
    }
    return(
      <form className='form'>
          <input className='input' onChange={handleChange} type='text' value={text} placeholder='Say your task'></input>
          <button onClick={addItem} className='button'>Add</button>
      </form>
  )
}

export default ToDoForm;