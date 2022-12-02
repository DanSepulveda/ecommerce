const userReducers = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'REGISTER':
      localStorage.setItem('token', payload)
      return { token: payload }
    case 'LOGOUT':
      localStorage.removeItem('token')
      return { token: null }

    default:
      return state
  }
}

export default userReducers
