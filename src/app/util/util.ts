export const isStringValid = (str: any) => {
  return typeof str === 'string' && str.trim().length > 0;
};