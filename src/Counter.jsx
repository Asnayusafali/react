import React from 'react'

function Counter(props) {
  return (
    <div>
        <h1>{props.title}counter:{props.count}</h1>

    </div>
  )
}

export default Counter