import latinize from '../utils/latinise';

export const handleLatinizeString = (text) => {
  return text.toLowerCase().latinize().replace(/ /g, '-');
};
