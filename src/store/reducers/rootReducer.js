const initState = {
    user: [
        { id: '1', name: 'Nguyen Dinh Hau' },
        { id: '2', name: 'Nguyen Dang Dan Thui' },
        { id: '3', name: 'Nguyen Van A' },
    ]
}
const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>>> run into delete user', action);
            let user = state.user;
            user = user.filter ((item) => item.id != action.payload.id)
            return {
                ... state, user
            };
            break;
        default:
            return state;
    }

    return state;
}
export default rootReducer;