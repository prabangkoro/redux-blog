export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return [...posts, ...action.payload]
    default:
      return posts
  }
}
