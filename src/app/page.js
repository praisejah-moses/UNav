'use client'
import styles from './page.module.css'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoiamFlMW1vc2VzIiwiYSI6ImNsazhzbndiaDBsaWMzaHA2Y3d1dWt4cXkifQ.YkSfMsj0n0YHGHFZ3IPx7Q';



export default function Home() {
  const bounds =[
    [5.609220, 6.393766], // Southwest coordinates
    [5.633803, 6.407058] // Northeast coordinates
    ];


  useEffect(()=>{
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/jae1moses/clkryrcvf00qm01pcgo9839se',
      center: [5.612430, 6.399870], // starting position
      zoom: 16, // starting zoom
      // maxBounds: bounds // Set the map's geographical boundaries.
    });

    if ('geolocation' in navigator) {
      // Get user's current position
      navigator.geolocation.getCurrentPosition(function (position) {
        var userLng = position.coords.longitude;
        var userLat = position.coords.latitude
        console.log(userLng, userLat)

        var marker = new mapboxgl.Marker().setLngLat([userLng, userLat]).addTo(map);
      })
    }
    
    map.addControl(new mapboxgl.NavigationControl());

    map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true
      })
      );
  },[])

  return (
    <>
    <main className='main'>
      <div className='map-container' id="map-container"/>
      <script>
 
      </script>
     </main>
    </>
    
  )
}
