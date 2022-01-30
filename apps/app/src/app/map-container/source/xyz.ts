import XYZ from 'ol/source/XYZ';

type xyzType = {
  url: string;
  maxZoom?: number;
};

export const xyz = ({ url, maxZoom }: xyzType): XYZ => {
  return new XYZ({ url, maxZoom });
};
