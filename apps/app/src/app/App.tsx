import { useState } from 'react';
import MapContainer from './map-container';
import { getDraggableLayers, getFlatLayersList, getLayersListWithZIndex } from './util';
import type { draggableLayer } from './types';
import { getLayers } from './api';
import ControlPanel from './control-panel';
import MapControls from './map-controls';
import './app.css';

export const App = () => {
  const baseLayers = getLayers();

  const [layers, setLayers] = useState<draggableLayer[]>(getDraggableLayers(baseLayers));

  const [center, setCenter] = useState<[number, number]>([0, 0]);

  const [zoom, setZoom] = useState(0);
  const [zoomIn, setZoomIn] = useState(0);
  const [zoomOut, setZoomOut] = useState(0);

  return (
    <>
      <ControlPanel layers={layers} setLayers={setLayers} />
      <MapContainer
        center={center}
        zoom={zoom}
        layers={getLayersListWithZIndex(getFlatLayersList(layers))}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
      />
      <MapControls setZoomIn={setZoomIn} setZoomOut={setZoomOut} />
    </>
  );
};
