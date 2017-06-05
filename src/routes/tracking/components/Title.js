import React from 'react'

class Title extends React.Component {
  render () {
    return (
      <div className="main-title">
        <div className="container">
          <h1 className="main-title__primary">{this.props.title}</h1>
          <h3 className="main-title__secondary">{this.props.description}</h3>
        </div>
      </div>
    )
  }
}

export default Title
