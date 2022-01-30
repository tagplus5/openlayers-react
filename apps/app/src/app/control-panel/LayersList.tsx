import Nestable, { Item } from 'react-nestable';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { LayersListItem } from './LayersListItem';
import { draggableLayer } from '../types';
import 'react-nestable/dist/styles/index.css';

type LayersListProps = {
  layers: draggableLayer[];
  setLayers: React.Dispatch<React.SetStateAction<draggableLayer[]>>;
};

export const LayersList = ({ layers, setLayers }: LayersListProps) => {
  const renderCollapseIcon = ({ isCollapsed }: { isCollapsed: boolean }) => {
    if (isCollapsed) {
      return <AddIcon />;
    }

    return <RemoveIcon />;
  };

  const onChange = ({ items }: { items: Item[] | draggableLayer[] }) => {
    setLayers(items as draggableLayer[]);
  };

  return (
    <Nestable
      items={layers}
      renderItem={LayersListItem}
      renderCollapseIcon={renderCollapseIcon}
      maxDepth={2}
      onChange={onChange}
    />
  );
};
