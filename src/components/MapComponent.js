import React, { useRef, useEffect } from 'react';
import { loadModules } from 'esri-loader';

const ArcGISMap = () => {
  const mapRef = useRef();

  useEffect(() => {
    // Load the ArcGIS API modules
    loadModules(['esri/Map', 'esri/views/MapView'], { css: true })
      .then(([ArcGISMap, MapView]) => {
        // Create a map
        const map = new ArcGISMap({
          basemap: 'topo-vector'
        });

        // Create the MapView
        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: [55.97, 21.47],
          zoom: 8
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return <div className="map-container" ref={mapRef} style={{ height: '100vh' }} />;
};

export default ArcGISMap;