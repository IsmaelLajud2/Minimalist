import React,{useState} from 'react'
import { Pin,APIProvider,AdvancedMarker,Map,InfoWindow, Marker} from '@vis.gl/react-google-maps'
import '../Location/LocationStyles.css'
const LocationSection = () => {


const position ={lat: 40.417,lng: -3.703}
const [open, setOpen] = useState(false)
  return (
    <APIProvider  apiKey={import.meta.env.VITE_API_KEY}>
        <div  style={{width: '500px', height: '500px',overflow:"hidden"}}>
        <Map
       defaultCenter={position}
        defaultZoom={17}
        mapId={import.meta.env.VITE_MAPA_ID}
       >
        <Marker position={position} onClick={() => setOpen(true)} >
            <Pin background={"red"} glyphColor={"white"}  />
        
        {open && <InfoWindow onCloseClick={()=> setOpen(false)} position={position}><p>Minimalist Company</p></InfoWindow>}
        </Marker>
       </Map>
       </div>
    </APIProvider>
  )
}

export default LocationSection