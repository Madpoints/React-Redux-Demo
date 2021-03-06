import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Witcher_Medallion from '../witcher_medallion.png'
import {connect} from 'react-redux'

class Home extends Component {
  render() {
    const {posts} = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div className="post card" key={post.id}>
            <img src={Witcher_Medallion} alt=""/>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title purple-text">
                  {post.name}
                </span>
              </Link>
              <p>{post.school}</p>
            </div>
          </div>  
        )
      })  
    ) : (
      <div className="center">No posts yet</div>
    )
    return(
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>  
    )
  }
}

const mapStateToProps = (state) => {
  return{
    posts: state.posts  
  }
}

export default connect(mapStateToProps)(Home)