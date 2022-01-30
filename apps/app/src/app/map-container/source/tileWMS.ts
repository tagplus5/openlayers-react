import TileWMS from 'ol/source/TileWMS';

type tileWMSType = {
  url: string;
  params: {
    [key: string]: string;
  };
  serverType: string;
};

export const tileWMS = ({ url, params, serverType }: tileWMSType): TileWMS => {
  return new TileWMS({ url, params, serverType });
};
