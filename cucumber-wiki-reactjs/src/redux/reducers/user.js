const todos = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return action.text;
        case 'GET_USER':
            return state;
        default:
            return state;
    }
}
export default todos
