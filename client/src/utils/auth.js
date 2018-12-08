export const loggedIn = () => {
    const expirationTime = localStorage.getItem('tokenExpirationTime')
    return new Date().getTime() / 1000 < parseInt(expirationTime, 10)
}

export const logout =() => {
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpirationTime')
}