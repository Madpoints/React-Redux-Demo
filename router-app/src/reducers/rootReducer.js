const initState = {
  posts: [
    {id: '1', name: 'Geralt of Rivia', school: 'Wolf'},
    {id: '2', name: 'Letho of Gullet', school: 'Viper'},
    {id: '3', name: 'Gerd', school: 'Bear'}
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id  
    }) 
    return {
      ...state,
      posts: newPosts
    } 
  }
  return state
}

export default rootReducer