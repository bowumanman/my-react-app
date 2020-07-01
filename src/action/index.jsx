export const getUserInfo = (data) => {
    return {
        type: 'GET_USER_INFO',
        data: data
    }
}
export const deleteUserInfo = () => {
    return {
        type: 'DELETE_USER_INFO'
    }
}
export const addCount = () => {
    return {
        type: 'ADD_COUNT'
    }
}
export const reduceCount = () => {
    return {
        type: 'REDUCE_COUNT'
    }
}