import React from 'react'
import { TextField } from "@material-ui/core";
import {useDispatch, useSelector} from 'react-redux'
import { storeTodoInput } from '../../reduxfeatures/TodoSlice';

export default function TodoInput() {
    //select required items from store
    const state = useSelector((state) => state.todo);
    //console log to check the onChange action in console
    console.log(state);
    //dispatch an action in store
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        let todoInput = e.target.value;
        dispatch(storeTodoInput(todoInput));
      };
    return (  
        <>
         <TextField
        style={{ display: "block", margin: "20px 0 15px 0" }}
        fullWidth
        label="Enter your todo task"
        variant="outlined"
        onChange={handleChange}
      />
     </>
    )
}
