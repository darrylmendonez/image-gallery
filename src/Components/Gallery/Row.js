import React, { Component } from 'react'

class Row extends Component {
  render() {
    const { content, handleClick } = this.props
    return content.length ? (
      content.map(picture => {
        return (
          <div key={picture.id} className="col-md-4">
            <img className="img-thumbnail" src={picture.thumbnail} alt="" onClick={() => handleClick(picture)}/>
          </div>
        )
      })
    ) : (
      <span>No photos available</span>
    )
  }
}

export default Row