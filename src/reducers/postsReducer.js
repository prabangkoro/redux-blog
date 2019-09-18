export default (posts = [], action) => {
  if (action.type === 'FETCH_POSTS') {
    return [...posts, ...action.payload]
  }

  return posts
}
