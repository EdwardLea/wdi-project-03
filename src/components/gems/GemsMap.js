import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAP_BOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'



class Map extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: {lng: -0.09,lat: 51.508},
      zoom: 12
    })

    const markerElement = document.createElement('div')
    markerElement.className = 'custom-marker'
    return new mapboxgl.Marker(markerElement)
      .setLngLat({ lng: -0.09,lat: 51.508})
      .addTo(this.map)
  }

  render() {
    return (
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}

export default Map
