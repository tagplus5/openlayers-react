import OSM from 'ol/source/OSM';
import TileWMS from 'ol/source/TileWMS';
import XYZ from 'ol/source/XYZ';

export type baseLayer = {
  name: string;
  source?: OSM | TileWMS | XYZ;
  children?: baseLayer[];
};

export type draggableLayer = baseLayer & {
  id: string;
  children?: draggableLayer[];
};

export type mapLayer = baseLayer & {
  id: string;
  zIndex: number;
};
