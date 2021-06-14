import createReducer from './ReducerUtils';
import produce from 'immer';

const initialState = {
    user: {},
    allUsers:[]
}

const userFunc = {
    setUser(state, action){
        state.user=action.payload
    },
    setAllUsers(state, action){
        state.allUsers=action.payload;
    }
};
export default produce((state, action) => createReducer(state, action, userFunc), initialState);