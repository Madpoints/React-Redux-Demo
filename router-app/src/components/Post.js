import React, { Component } from 'react'
import {connect} from 'react-redux'

class Post extends Component {
  render() {  
    console.log(this.props)
    const post = this.props.posts ? (
      <div className="post">
        <h4 className="center">{this.props.posts.name}</h4>
        <p className="center"><b>School:</b> {this.props.posts.school}</p>
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
    posts: state.posts.find(post => post.id === id)  
  }
}

export default connect(mapStateToProps)(Post) 