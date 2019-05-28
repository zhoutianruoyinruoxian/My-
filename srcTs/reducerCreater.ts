import { Modules, Reducers, Action, BaseObject } from './type';
import { combineReducers } from 'redux';

const reudcerCreater = (modules: Modules) => {
  let reducers: Reducers = {};
  Object.keys(modules).forEach(o => {
    const _module = modules[o];
    _module.reducerName = o;
    const initialState = _module.state;
    reducers[o] = function (state: BaseObject = initialState, action: Action = {}): BaseObject {
      if (action.reducerName === _module.reducerName) {
        return Object.assign({}, state, action.data);
      }
      return state;
    };
  });
  return combineReducers(reducers);
};

export default reudcerCreater;
