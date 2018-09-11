import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Witcher_Medallion from '../witcher_medallion.png'

class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response.data[0])
        this.setState({
          posts: response.data.slice(0, 10)
        })
      })
  }
  render() {
    const {posts} = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div className="post card" key={post.id}>
            <img src={Witcher_Medallion} alt=""/>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title purple-text">
                  {post.title}
                </span>
              </Link>
              <p>{post.body}</p>
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

export default Home