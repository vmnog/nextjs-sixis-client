// Formata uma string dado um numero maximo de characteres
export const handleLimitString = (documentNameParam, maxCharacters) => {
  if (documentNameParam && documentNameParam.length > maxCharacters) {
    return `${documentNameParam.substr(0, maxCharacters - 1)}...`;
  }
  return documentNameParam;
};
