export const generateUUID = (): string => {
  const randomValues = new Uint32Array(4);
  for (let i = 0; i < 4; i++) {
    randomValues[i] = Math.floor((1 + Math.random()) * 0x10000);
  }
  return (
    randomValues[0].toString(16) +
    '-' +
    randomValues[1].toString(16) +
    '-' +
    randomValues[2].toString(16) +
    '-' +
    randomValues[3].toString(16)
  );
};
