import { Modules, ReducerName, Type, MapMutations, BaseObject } from './type';
import { Store, Dispatch } from 'redux';


const mutationCreater = ({ dispatch, getState }: Store, modules: Modules) => {
  let mutationList: MapMutations = {};
  Object.keys(modules).forEach(o => {
    const _module = modules[o];
    const { mutations } = _module;
    mutationList[o] = {};
    Object.keys(mutations).forEach(m => {
      mutationList[o][m] = (...args) => {
        const setState = _dispatch(dispatch, _module.reducerName, m);
        mutations[m](setState, getState, ...args);
      };
    });
  });
  return mutationList;
};

const _dispatch = (dispatch: Dispatch, reducerName: ReducerName, type: Type) => (data: BaseObject) => dispatch(actionCreater(reducerName, type, data));

const actionCreater = (reducerName: ReducerName, type: Type, data: BaseObject) => ({ reducerName, type, data });

export default mutationCreater;
