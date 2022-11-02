import { combineReducers, createStore } from "@reduxjs/toolkit"
import { sidebarReducer } from "./sidebarReducer"
import { dialogsReducer } from "./dialogsReducer"
import { profileReducer } from "./profileReducer"
//Вообще, необходимо использовать вместо старого createStore() улучшенную версию configureStore() from ReduxToolkit, обновлю версию позже! 

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

//let store = configureStore(reducers)
let store = createStore(reducers)

export {store} 