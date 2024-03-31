const initialState = {
    isSignedIn: false,
    userName: 'Conan'
}


export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'LOGIN':
            return {
                ...state,
                isSignedIn: payload
            }
        default:
            return state;
    }
}