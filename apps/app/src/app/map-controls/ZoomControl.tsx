import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
type ZoomControlProps = {
  setZoomIn: React.Dispatch<React.SetStateAction<number>>;
  setZoomOut: React.Dispatch<React.SetStateAction<number>>;
};

export const ZoomControl = ({ setZoomIn, setZoomOut }: ZoomControlProps) => {
  const zoomIn = () => {
    setZoomIn((z) => (z += 1));
  };

  const zoomOut = () => {
    setZoomOut((z) => (z -= 1));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& > :not(style)': { m: 1 },
        position: 'absolute',
        bottom: 180,
        right: 20,
      }}
    >
      <Fab size="small" onClick={zoomIn}>
        <AddIcon />
      </Fab>
      <Fab size="small" onClick={zoomOut}>
        <RemoveIcon />
      </Fab>
    </Box>
  );
};
