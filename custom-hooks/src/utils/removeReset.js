const removeReset = obj => {
  const { reset, ...others } = obj;
  return others;
};

export default removeReset;
