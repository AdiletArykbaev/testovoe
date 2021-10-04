import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios"
//Initial State

const initialState = {
  users: [],
};
if (JSON.parse(localStorage.getItem("state") !== null)) {
  let local = JSON.parse(localStorage.getItem("state"));

  local.forEach((item) => {
    console.log(item);
    initialState.users.push(item);
  });
}

//Create Context
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const removeUser = (key) => {
    dispatch({
      type: "REMOVE_USER",
      payload: key,
    });
  };
  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        removeUser,
        addUser,
        editUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
