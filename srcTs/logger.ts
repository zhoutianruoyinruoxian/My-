
import { Store, AnyAction } from 'redux';
const logger = () => {
  let log;
  if (process.env.NODE_ENV !== 'production') {
    log = ({ getState }: Store) => (next: any) => (action: AnyAction) => {
      console.log('will dispatch', getState());
      next(action);
      console.log('state after dispatch', getState());
    };
  }
  return log;
};

export default logger();
