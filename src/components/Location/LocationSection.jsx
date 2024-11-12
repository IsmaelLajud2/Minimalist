
import { APIProvider,  Map,Marker, } from '@vis.gl/react-google-maps';
import '../Location/LocationStyles.css';


const LocationSection = () => {
  // Define la posición del pin
  const position = { lat: 40.417, lng: -3.703 };
 

  return (
    <section className='location-section-container'>
      <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
        <div className='map-container' style={{ width: '100%', height: '100%'}}>
      
          <Map
            center={position}
            zoom={16}
            mapId={import.meta.env.VITE_MAPA_ID}
          >
           
            <Marker title="My location" position={position}  >
            
      
            </Marker>
        
          </Map>
        </div>
      </APIProvider>
   

      <div className='location-info-container'>
        <p className='p-location'>[¿Dónde comprar?]</p>
        <h1 className='h1-location'>¡Explora, descubre y disfruta!<br />Todo lo que buscas está en nuestra tienda.</h1>


      </div>
    </section>
  );
};

export default LocationSection;
