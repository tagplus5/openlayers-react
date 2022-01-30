import { nanoid } from 'nanoid';
import { baseLayer, draggableLayer, mapLayer } from '../types';

export const getDraggableLayers = (layers: baseLayer[] | undefined): draggableLayer[] => {
  if (!layers) {
    return [];
  }

  return layers.map((layer) => ({
    ...layer,
    id: nanoid(),
    children: getDraggableLayers(layer.children),
  }));
};

export const getFlatLayersList = (
  layers: draggableLayer[] | undefined,
  flatLayersList: draggableLayer[] = [],
): draggableLayer[] => {
  if (!layers) {
    return [];
  }

  layers.forEach((layer) => {
    const { children, ...cleanLayer } = layer;
    flatLayersList.push(cleanLayer);

    if (layer.children?.length) {
      flatLayersList.push(...getFlatLayersList(layer.children));
    }
  });

  return flatLayersList;
};

export const getLayersListWithZIndex = (layers: draggableLayer[]): mapLayer[] => {
  return layers.map((layer, i: number, arr: draggableLayer[]) => ({
    ...layer,
    zIndex: arr.length - i,
  }));
};
