// The List component receives the prop articles which is a copy of
// the articles array in the Redux state. Which comes from the reducer.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const mapStateToProps = state => {
  return { articles: state.articles }
}

const ConnectedList = ({ articles }) => (
  <ul className='list-group list-group-flush'>
    {articles.map(el => (
      <li className='list-group-item' key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
)

ConnectedList.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

// Connecting the stateless component ConnectedList with the Redux store.
const List = connect(mapStateToProps)(ConnectedList)

export default List
