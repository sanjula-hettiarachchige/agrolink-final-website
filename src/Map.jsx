import React, {useState, useEffect} from 'react'
import { MapContainer, ZoomControl, TileLayer } from 'react-leaflet'
import Layers from './Layers'
import Heatmaps from './Heatmaps';
const Map = () => {

    const heatmapData = [[37.7749, -122.4194, 50]]

    const [data, setData] = useState([]);
    const heatmapOptions = {
      radius: 20,
      blur: 20,
      maxZoom: 18,
      minOpacity: 0.5,
      maxOpacity: 1
    };
  
    useEffect(() => {
      setData(heatmapData);
    }, []);

    return (
        <>
        <MapContainer 
            center={[37.0902, -95.7129]} 
            zoom={3} 
            zoomControl={false} 
            style={{ height: '100vh', width: '100%' }}
        >
            <Layers />
            <ZoomControl position='topright'/>
        </MapContainer>
        </>
    )
}

export default Map


