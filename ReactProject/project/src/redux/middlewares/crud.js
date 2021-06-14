import UserService from "../../services/user.service";
import { actions } from '../Action';

export const getAllUsersFromServer = ({ dispatch, getState }) => next => action => {
    async function getUsers() {
        const users = await UserService.getAllUsers();
        dispatch(actions.setAllUsers(users))
    }
    if (action.type === "GET_USERS_FROM_SERVER") {
        try {
            getUsers();
        } catch (err) {
            console.log(err);
        }
    }
    return next(action)
}

