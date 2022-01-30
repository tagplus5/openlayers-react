import { osm, tileWMS, xyz } from '../map-container';
import { baseLayer } from '../types';

export const getLayers = (): baseLayer[] => {
  return [
    {
      name: 'USA states',
      source: tileWMS({
        url: 'https://ahocevar.com/geoserver/wms',
        params: {
          LAYERS: 'topp:states',
          TILED: 'true',
        },
        serverType: 'geoserver',
      }),
    },
    {
      name: 'Group1',
      children: [
        {
          name: 'OSM',
          source: osm(),
        },
      ],
    },
    {
      name: 'Group2',
      children: [
        {
          name: 'Satellite',
          source: xyz({
            url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
            maxZoom: 18,
          }),
        },
      ],
    },
  ];
};
