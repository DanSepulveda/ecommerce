const userReducers = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'REGISTER':
      return { token: payload }
    case 'LOGOUT':
      return { token: null }

    default:
      return state
  }
}

export default userReducers
