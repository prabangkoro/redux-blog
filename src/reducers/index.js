import { combineReducers } from 'redux'

const postsReducer = (posts = [], action) => {
  if (action.type === 'FETCH_POSTS') {
    return [...posts, ...action.payload]
  }

  return posts
}

const errorPostsReducer = (error = null, action) => {
  if (action.type === 'ERROR_FETCH_POSTS') {
    return action.payload
  }

  return error
}

export default combineReducers ({
  posts: postsReducer,
  error: errorPostsReducer
})
