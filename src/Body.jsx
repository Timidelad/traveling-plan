import React from 'react'
import PropTypes from 'prop-types'

function Body({ lists }) {
    return (
        <div>
            <ul>{lists.map((list) => (
                <li key={list.id}>{list.item}</li>
            ))}</ul>
        </div>
    )
}

Body.propTypes = {
    lists: PropTypes.array.isRequired,
}

export default Body