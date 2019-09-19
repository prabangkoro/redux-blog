import jsonPlaceholder from '../api/jsonPlaceholder'
import _ from 'lodash'

export const fetchPosts = () => dispatch => {
  jsonPlaceholder.get('/posts')
    .then(response => {
      dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: 'ERROR_FETCH_POSTS',
        payload: error
      })
    })
}

const _fetchUser = _.memoize((id, dispatch) => {
  jsonPlaceholder.get(`/users/${id}`)
    .then(response => {
      dispatch({
        type: 'FETCH_USER',
        payload: response.data
      })
    })
})
export const fetchUser = id => dispatch => _fetchUser(id, dispatch)