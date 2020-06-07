import React, { Component } from 'react';
import axios from 'axios';

// import logo from './logo.svg';
import './App.css';
import Gallery from './Components/Gallery'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetchedData: [],
      gallery: []
    }
  }
  client_id ="Ec1n2AKEb00jiprb4C_6LFncc57yZHxst8TYXNPvp7s"
  dogs = 'dogs'
  cats = 'cats'
  componentDidMount() {
    axios.get(`https://api.unsplash.com/search/photos?client_id=${this.client_id}&query=${this.dogs}&per_page=9`)
      .then(res => {
        let results = res.data.results
        let buildData = []
        for (let i = 0; i < results.length; i++) {
          let item = {
            id: results[i].id,
            index: i,
            type: this.dogs,
            thumbnail: results[i].urls.thumb
          }
          buildData.push(item)
        }
        this.setState({
          fetchedData: [...buildData]
        })
        axios.get(`https://api.unsplash.com/search/photos?client_id=${this.client_id}&query=${this.cats}&per_page=9`)
          .then(res => {
            let results = res.data.results
            let buildData = []
            for (let i = 0; i < results.length; i++) {
              let item = {
                id: results[i].id,
                index: i + 9,
                type: this.cats,
                thumbnail: results[i].urls.thumb
              }
              buildData.push(item)
            }
            this.setState({
              fetchedData: [...this.state.fetchedData, ...buildData]
            })
            let gallery = [...this.state.fetchedData.slice(0,5), ...this.state.fetchedData.slice(14, 18)]
            for (let i = 0; i < gallery.length; i++) {
              gallery[i].galleryIndex = i
            }
            this.setState({gallery})
          })
      })
  }

  handleClick = (currentPet) => {
    for (let i = 0; i < this.state.fetchedData.length; i++) {
      if (currentPet.index === this.state.fetchedData[i].index) {
        let gallery = [...this.state.gallery]
        let correspondingPetIndex
        if (currentPet.index < 9) {
          correspondingPetIndex = currentPet.index + 9
        } else {
          correspondingPetIndex = currentPet.index - 9
        }
        console.log('correspondingPetIndex = ', correspondingPetIndex)
        gallery[currentPet.galleryIndex] = {
          id: currentPet.id,
          index: correspondingPetIndex,
          galleryIndex: currentPet.galleryIndex,
          type: this.state.fetchedData[correspondingPetIndex].type,
          thumbnail: this.state.fetchedData[correspondingPetIndex].thumbnail
        }
        this.setState({gallery})
      }
    }
    console.log('currentPet = ', currentPet)
  }

  allDogs = () => {
    let gallery = [...this.state.fetchedData.slice(0,9)]
    for (let i = 0; i < gallery.length; i++) {
      gallery[i].galleryIndex = i
    }
    this.setState({gallery})
  }

  allCats = () => {
    let gallery = [...this.state.fetchedData.slice(9,18)]
    for (let i = 0; i < gallery.length; i++) {
      gallery[i].galleryIndex = i
    }
    this.setState({gallery})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              Bot Detection
            </div>
          </div>
          <Gallery gallery={this.state.gallery} handleClick={this.handleClick}/>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <button type="button" className="btn btn-primary" onClick={this.allDogs}>Dogs</button>
              <button type="button" className="btn btn-primary" onClick={this.allCats}>Cats</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
