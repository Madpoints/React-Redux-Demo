import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deletePost} from '../actions/postActions'

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id)  
    this.props.history.push('/')
  }
  render() { 
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.name}</h4>
        <p className="center"><b>School:</b> {this.props.post.school}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Witcher    
          </button>      
        </div>
      </div>    
    ) : (
      <div className="center">
        Loading...  
      </div>
    )

    return(
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id
  return{
    post: state.posts.find(post => post.id === id)  
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    deletePost: (id) => {dispatch(deletePost(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post) 