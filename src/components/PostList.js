import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import UserHeader from './UserHeader'

class PostList extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPostList () {
    return this.props.posts.map((post, index) => {
      return (
        <div className="item" key={index}>
          <i className="large middle align icon user"></i>
          <div className="content">
            <div className="description">
              <h2>
                {post.title}
              </h2>
              <p>
                {post.body}
              </p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
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
        <div className="ui relaxed divided list">
          {this.renderPostList()}
        </div>
      </div>
    )
  }
}

const mapsStateToProps = state => ({
  posts: state.posts
})

export default connect(mapsStateToProps, { fetchPosts })(PostList)
