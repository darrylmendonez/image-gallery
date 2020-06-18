import React, { Component } from 'react'

import './styles.css'

class Gallery extends Component {

  render() {
    const { gallery, loadMore, launchModal, selectedImage } = this.props
    console.log('gallery = ', gallery)
    return (
      <div className="content">
        <section className="grid">
          {gallery.map( (image, index) => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(
                image.height / image.width,
              )}`}
            >
              <img
                src={image.urls.small}
                alt={image.description}
                data-gallery-index={index}
                data-toggle="modal" data-target="#exampleModal"
                onClick={() => launchModal(index)}
              />
            </div>
          ))}
        </section>
        {/* <button type="button" className="btn btn-outline-primary" onClick={loadMore}>Load more...</button> */}
        {/* modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <img src={selectedImage.src} alt={selectedImage.description} />
                <hr/>
                <p>{selectedImage.description}</p>
                <p>Photo by <a href={selectedImage.page + `?utm_source=find-inspiration`} target="_blank" rel="noopener noreferrer">{selectedImage.username}</a> on <a href="https://unsplash.com/?utm_source=find-inspiration`" target="_blank" rel="noopener noreferrer">Unsplash</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery