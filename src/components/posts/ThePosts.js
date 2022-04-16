import React from 'react'
import ThePost from '../../components/post/ThePost'

const ThePosts = ({posts}) => {
  return (
    <div className="the-posts">
      <div className="posts">
        {posts.map((post) => (
          <ThePost post={post}/>
        ))}
      </div>
    </div>
  )
}

export default ThePosts