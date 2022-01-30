import { ZoomControl } from './ZoomControl';

type MapControlsProps = {
  setZoomIn: React.Dispatch<React.SetStateAction<number>>;
  setZoomOut: React.Dispatch<React.SetStateAction<number>>;
};

export const MapControls = ({ setZoomIn, setZoomOut }: MapControlsProps) => {
  return <ZoomControl setZoomIn={setZoomIn} setZoomOut={setZoomOut} />;
};
