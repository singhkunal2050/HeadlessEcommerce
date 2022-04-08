import React from 'react'

function Container(props) {
  return (
    <div className="container mx-auto max-w-5xl">
      {props.children}
    </div>
  )
}

export default Container