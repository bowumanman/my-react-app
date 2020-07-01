const user = (state = {token: null}, action) => {
    switch(action.type) {
        case 'GET_USER_INFO':
            return Object.assign({}, state, action.data);
        case 'DELETE_USER_INFO':
            return {token: null};
        default:
            return state;
    }
}
export default user;