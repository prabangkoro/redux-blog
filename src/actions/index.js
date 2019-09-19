import jsonPlaceholder from '../api/jsonPlaceholder'
import _ from 'lodash'

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts')
  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  })
}

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`)
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  })
}

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())

  const users = _.uniq(_.map(getState().posts, 'userId'))
  users.forEach(id => dispatch(fetchUser(id)))
}
