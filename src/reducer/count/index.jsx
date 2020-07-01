const count = (state = 1, action) => {
    switch(action.type) {
        case 'ADD_COUNT':
            state = state + 1;
            return state;
        case 'REDUCE_COUNT':
            state = state - 1;
            return state;
        default:
            return state;
    }
}
export default count;