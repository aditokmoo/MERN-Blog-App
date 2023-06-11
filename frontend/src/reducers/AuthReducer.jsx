export const AuthReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            }
        case 'LOGOUT':
            return {
                user: null
            }
        case 'UPDATE':
            return {
                user: action.payload
            }
        default:
            return state
    }
}