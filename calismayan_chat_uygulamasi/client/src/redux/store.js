import {applyMiddleware, combineReducers, createStore} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer';



let initalState ={

}

let reducers =combineReducers({
    user: userReducer

})

const store = createStore(reducers, initalState,composeWithDevTools(applyMiddleware(thunk)))
export default store;
