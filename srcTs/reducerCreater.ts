import { Modules, Reducers, BaseObject } from './type';
import { combineReducers } from 'redux';

const reudcerCreater = (modules: Modules) => {
  let reducers: Reducers = {};
  Object.keys(modules).forEach(o => {
    const _module = modules[o];
    _module.type = Symbol();
    const initialState = _module.state;
    reducers[o] = function (state: BaseObject = initialState, action: BaseObject = {}): BaseObject {
      if (action.type === _module.type) {
        return Object.assign({}, state, action.data);
      }
      return state;
    };
  });
  return combineReducers(reducers);
};

export default reudcerCreater;
