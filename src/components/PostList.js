import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostList extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPostList () {
    return this.props.posts.map((post, index) => {
      return (
        <li key={index}>
          {post.title}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.props.fetchPosts}>
          Add More!
        </button>
        <div>
          Counter: {this.props.posts.length}
        </div>
        <ol>
          {this.renderPostList()}
        </ol>
      </div>
    )
  }
}

const mapsStateToProps = state => ({
  posts: state.posts
})

export default connect(mapsStateToProps, { fetchPosts })(PostList)
