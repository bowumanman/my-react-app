const count = (state = {count: 1}, action) => {
    switch(action.type) {
        case 'ADD_COUNT':
            return Object.assign({}, state, {count: state.count + 1})
        case 'REDUCE_COUNT':
            return Object.assign({}, state, {count: state.count - 1})
        default:
            return state;
    }
}
export default count;