import React from 'react'
import {useSelector} from 'react-redux';
import AddToCard from './AddToCard';

export default function AddToList() {
    const tasks= useSelector((state)=>state.todo.tasks);
    
    const renderTask = tasks?.map(({id, status, name})=>(
        <AddToCard key={id} id={id} status={status} taskName={name}/>
    ));
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 20
          }}>  
      {renderTask} 
        </div>

    );
}
