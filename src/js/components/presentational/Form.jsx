// The form component contains some logic for updating the local state upon a form submission.
// It can update the global state by dispatching the addArticle action.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid'
import { addArticle } from '../../actions/index'

function mapDispatchToProps (dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}

class ConnectedForm extends Component {
  constructor () {
    super()
    this.state = {
      title: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    const { title } = this.state
    const id = uuidv1()
    this.props.addArticle({ title, id })
    this.setState({ title: '' })
  }

  render () {
    const { title } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type='submit' className='btn btn-success btn-lg'>
          SAVE
        </button>
      </form>
    )
  }
}

// mapDispatchToProps connects Redux actions to React props.
// This way a connected component is able to dispatch actions.
// The first argument for connect must be null when mapStateToProps is absent
// like in the Form example. Otherwise you’ll get TypeError: dispatch is not a function.
const Form = connect(null, mapDispatchToProps)(ConnectedForm)

export default Form
