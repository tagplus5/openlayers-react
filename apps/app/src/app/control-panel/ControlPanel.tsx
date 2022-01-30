import { useState } from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { draggableLayer } from '../types';
import { LayersList } from './LayersList';

type ControlPanelProps = {
  layers: draggableLayer[];
  setLayers: React.Dispatch<React.SetStateAction<draggableLayer[]>>;
};

export const ControlPanel = ({ layers, setLayers }: ControlPanelProps) => {
  const [expanded, setExpanded] = useState(true);

  const onAccordeonChange = () => {
    setExpanded((e) => !e);
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: 10000,
        top: 30,
        left: 30,
        width: '100%',
        maxWidth: 360,
      }}
    >
      <Accordion expanded={expanded} onChange={onAccordeonChange}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Layers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <LayersList layers={layers} setLayers={setLayers} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
