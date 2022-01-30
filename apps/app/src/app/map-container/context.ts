import { createContext } from 'react';
import OlMap from 'ol/Map';

type MapContext = {
  map?: OlMap;
};

export const MapContext = createContext<MapContext>({});
