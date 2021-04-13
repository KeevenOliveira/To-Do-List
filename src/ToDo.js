import React, {useState, useEffect} from 'react';
import './ToDo.css';
import List from './components/List';
import ToDoForm from './components/ToDoForm';
import Item from './components/Item';

const SAVED_ITEMS = "savedItems"

function ToDo() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if(savedItems){
      setItems(savedItems);
    }

  }, [])

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  }, [items])
  
  function onAddItem(text){

    let item = new Item(text);
    
    setItems([...items, item]);
  }

  function onItemDeleted(item){

    let filteredItems = items.filter(it=> it.id !== item.id)

    setItems(filteredItems);

  }

  function onDone(item){

    let updateItems = items.map(it =>{
      if(it.id === item.id){
        it.done = !it.done;
      }
      return it;
    })
    setItems(updateItems);

  }

  return (
    <div className="container">
      <div className="main">
        <h1>To Do</h1>
        <ToDoForm onAddItem={onAddItem}></ToDoForm>
        <List onDone={onDone} items={items} onItemDeleted={onItemDeleted}></List>
      </div>
    </div>
  );
}

export default ToDo;
