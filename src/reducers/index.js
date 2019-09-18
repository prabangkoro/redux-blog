import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import userReducer from './userReducer'

const errorPostsReducer = (error = null, action) => {
  if (action.type === 'ERROR_FETCH_POSTS') {
    return action.payload
  }

  return error
}

export default combineReducers ({
  posts: postsReducer,
  error: errorPostsReducer,
  users: userReducer
})
