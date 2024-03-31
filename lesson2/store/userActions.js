export const loginAction = () => {
    return {
        type: 'LOGIN',
        payload: true
    }
}

export const logoutAction = () => {
    return {
        type: 'LOGIN',
        payload: false
    }
}