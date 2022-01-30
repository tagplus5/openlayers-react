import { Item } from 'react-nestable';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { draggableLayer } from '../types';

type LayersListItemProps = {
  item: Item | draggableLayer;
  collapseIcon: React.ReactNode;
};

export const LayersListItem = ({ item, collapseIcon }: LayersListItemProps) => (
  <ListItemButton>
    <ListItemIcon>{collapseIcon}</ListItemIcon>
    <ListItemText primary={item.name} />
  </ListItemButton>
);
