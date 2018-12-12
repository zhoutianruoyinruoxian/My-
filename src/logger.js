const logger = () => {
  let log;
  if (process.env.NODE_ENV !== 'production') {
    log = ({ getState }) => next => action => {
      console.log('will dispatch', getState());
      next(action);
      console.log('state after dispatch', getState());
    };
  }
  return log;
};

export default logger();
