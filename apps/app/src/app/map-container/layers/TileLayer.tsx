import { useContext, useEffect, useState } from 'react';
import OlTileLayer from 'ol/layer/Tile';
import OlTileSource from 'ol/source/Tile';
import { MapContext } from '../context';

type TileLayerProps = {
  source: OlTileSource;
  zIndex: number;
};

export const TileLayer = ({ source, zIndex = 0 }: TileLayerProps) => {
  const { map } = useContext(MapContext);

  const [layer, setLayer] = useState<OlTileLayer<OlTileSource>>();

  useEffect(() => {
    if (!map) {
      return;
    }

    const tileLayer = new OlTileLayer({
      source,
      zIndex,
    });

    map.addLayer(tileLayer);
    setLayer(tileLayer);

    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map]);

  useEffect(() => {
    if (!layer) return;

    layer.setSource(source);
  }, [source]);

  useEffect(() => {
    if (!layer) {
      return;
    }

    layer.setZIndex(zIndex);
  }, [zIndex]);

  return null;
};
