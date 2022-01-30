import OSM from 'ol/source/OSM';
import TileWMS from 'ol/source/TileWMS';
import XYZ from 'ol/source/XYZ';
import { Map } from './map';
import { Layers, TileLayer } from './layers';
import type { mapLayer } from '../types';

type MapContainerProps = {
  center: [number, number];
  zoom: number;
  layers: mapLayer[];
  zoomIn: number;
  zoomOut: number;
};

export const MapContainer = ({ center, zoom, layers, zoomIn, zoomOut }: MapContainerProps) => {
  return (
    <Map center={center} zoom={zoom} zoomIn={zoomIn} zoomOut={zoomOut}>
      <Layers>
        {layers.map((layer) => {
          if (layer.source instanceof OSM || layer.source instanceof TileWMS || layer.source instanceof XYZ) {
            return <TileLayer key={layer.id} source={layer.source} zIndex={layer.zIndex} />;
          }

          return null;
        })}
      </Layers>
    </Map>
  );
};
