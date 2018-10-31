export const UPDATE_USER = "user:updateUser";
export const GET_USER = "user:getUser";

export const updateUser = newUser => ({
    type: UPDATE_USER,
    payload: {
        user: newUser
    }
})

export const getUser = () => ({
    type: GET_USER,
})
