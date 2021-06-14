import { createStore, combineReducers, applyMiddleware } from 'redux';
import UserReducer from './reducers/user.reducer';
import {getAllUsersFromServer} from './middlewares/crud';


const reducer = combineReducers({
    UserReducer
});
const store = createStore(reducer,applyMiddleware(getAllUsersFromServer));
window.store = store;

store.dispatch({type:"GET_USERS_FROM_SERVER"})
export default store;