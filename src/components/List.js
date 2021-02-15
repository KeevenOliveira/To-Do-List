import React from "react";
import "../ToDo.css";
import ImgCheckON from "../assets/check-on.svg";
import ImgCheckOff from "../assets/check-off.svg";
import Card from '../Card';

function DoneImg(props) {
  if (props.done) {
    return (<img alt="done" src={ImgCheckON}></img>)
  } else{
    return (<img alt="undone" src={ImgCheckOff}></img>)
  }
}

function List(props) {
  return (
    <ul className='group_list'>
      {props.items.map((item) => (
        <li className={item.done ? "done item" : "item"} key={item.id}>
          {item.text}
           <div className='div1'>
              <button className='button2' onClick={()=>{ props.onDone(item) }}><DoneImg done={item.done}></DoneImg></button>
              <div>
              <button onClick={() => {props.onItemDeleted(item)}}className="button1" alt='delete'>Delete</button>
              </div>
            </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
