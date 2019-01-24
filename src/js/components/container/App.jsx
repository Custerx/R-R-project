import React from 'react'
import List from '../presentational/List.jsx'
import Form from '../presentational/Form.jsx'
import Message from '../presentational/Message.jsx'
import Post from '../presentational/Post.jsx'

const App = () => (
  <div className='row mt-5'>
    <Message />
    <div className='col-md-4 offset-md-1'>
      <h2>Articles</h2>
      <List />
    </div>
    <div className='col-md-4 offset-md-1'>
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div className='col-md-4 offset-md-1'>
      <h2>API posts</h2>
      <Post />
    </div>
  </div>
)

export default App
