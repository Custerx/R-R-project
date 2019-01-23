import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { message: state.message }
}

const ConnectedMessage = ({ message }) => (
  <h3>
    {message}
  </h3>
)

// Connecting the stateless component ConnectedMessage with the Redux store.
const Message = connect(mapStateToProps)(ConnectedMessage)

export default Message
