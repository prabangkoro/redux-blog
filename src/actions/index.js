import jsonPlaceholder from '../api/jsonPlaceholder'


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
