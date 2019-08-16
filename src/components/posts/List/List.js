import React from 'react'
import { Link } from 'react-router-dom'
import Actions from './List.Actions'

export default ({ currentUserId, destroyPost, user }) => {
  // console.log("marnel")
  // console.log(user)
  const posts = user.posts.map(post => (
    <div key={post._id} className='card'>
      <div className='card-body'>
        {
          post.emotion === '' ? <p></p> : <p className='card-text'>{ post.content }</p>
        }
        <blockquote className='blockquote mb-0'>
          <footer className='blockquote-footer'>Was feeling: { post.emotion }</footer>
        </blockquote>
      </div>
      <Actions currentUserId={currentUserId} destroyPost={destroyPost} post={post} user={user} />
    </div>
  ))


  return (
    <>
      <h1 className='mb-4'>{ user.name ? user.name : user.username }'s Posts</h1>
      {
        user._id === currentUserId && posts.length === 0 ?
         <div>You currently have no post. Please consider creating one using this <Link className='' to={`/users/${user._id}/posts/new`}>Create a New Post</Link> link.</div> : posts
      }
    </>
  )

}
