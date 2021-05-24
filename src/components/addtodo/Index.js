import React from 'react'
import CloseIcon from "@material-ui/icons/Close";
import { Button, Snackbar, IconButton } from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {  addTodo, closeSnackbar } from '../../reduxfeatures/TodoSlice';
export default function Index() {

  const {snackbar} =useSelector((state)=>state.todo);

  const dispatch = useDispatch();
  
    return (
        <>
         <Button variant="contained" color="primary" onClick={()=>{
          dispatch(addTodo());
        }}
      >
        Add Todo
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={snackbar.open}
        message={snackbar.message}
        autoHideDuration={1000}
        onClose={()=>
          dispatch(closeSnackbar())}
          action={
            <IconButton
            style={{ color: "white" }}
            onClick={() => {
              dispatch(closeSnackbar());
            }}
          >
            <CloseIcon />
          </IconButton>
          }
          />   
        </>
    );
}
