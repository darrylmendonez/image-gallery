import React, { Component } from 'react'

import Row from './Row'

class Gallery extends Component {
  render() {
    const { gallery, handleClick } = this.props
    return (
      <React.Fragment>
        <div className="row">
          <Row content={gallery.slice(0, 3)} handleClick={handleClick}/>
        </div>
        <div className="row">
          <Row content={gallery.slice(3, 6)} handleClick={handleClick}/>
        </div>
        <div className="row">
          <Row content={gallery.slice(6, 9)} handleClick={handleClick}/>
        </div>
      </React.Fragment>
    )
  }
}

export default Gallery