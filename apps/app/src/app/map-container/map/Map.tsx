import { useRef, useState, useEffect } from 'react';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import { MapContext } from '../context';
import 'ol/ol.css';
import 'ol-ext/dist/ol-ext.css';
import './map.css';
import { ScaleLine, defaults as defaultControls } from 'ol/control';

type MapProps = {
  center: [number, number];
  zoom: number;
  children: React.ReactNode;
  zoomIn: number;
  zoomOut: number;
};

export const Map = ({ center, zoom, children, zoomIn, zoomOut }: MapProps) => {
  const mapRef = useRef<any>();
  const [map, setMap] = useState<OlMap>();
  const [coords, setCoords] = useState('');

  useEffect(() => {
    const view = new OlView({ zoom, center });

    const options = {
      view,
      layers: [],
      controls: [new ScaleLine()],
    };

    const mapObject = new OlMap(options);

    mapObject.on('pointermove', (e) => {
      setCoords(e.coordinate.join('  '));
    });

    mapObject.setTarget(mapRef.current);
    setMap(mapObject);

    return () => mapObject.setTarget(undefined);
  }, []);

  useEffect(() => {
    if (!map) return;

    map.getView().setCenter(center);
  }, [center]);

  useEffect(() => {
    if (!map) return;

    map.getView().setZoom(zoom);
  }, [zoom]);

  useEffect(() => {
    if (!map) return;

    const view = map.getView();
    if (!view) return;

    const z = view.getZoom() as number;
    view.animate({
      zoom: z + 1,
      duration: 250,
    });
  }, [zoomIn]);

  useEffect(() => {
    if (!map) return;

    const view = map.getView();
    if (!view) return;

    const z = view.getZoom() as number;
    view.animate({
      zoom: z - 1,
      duration: 250,
    });
  }, [zoomOut]);

  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className="map">
        {children}
      </div>
      <div>{coords}</div>
    </MapContext.Provider>
  );
};
