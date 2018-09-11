const initState = {
  posts: [
    {id: '1', name: 'Geralt of Rivia', school: 'Wolf'},
    {id: '2', name: 'Letho of Gullet', school: 'Viper'},
    {id: '3', name: 'Gerd', school: 'Bear'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state
}

export default rootReducer