const mutationCreater = ({ dispatch, getState }, modules) => {
  let mutationList = {};
  Object.keys(modules).forEach(o => {
    const _module = modules[o];
    const { mutations } = _module;
    mutationList[o] = {};
    Object.keys(mutations).forEach(m => {
      mutationList[o][m] = (...args) => {
        const setState = _dispatch(dispatch, _module.type);
        mutations[m](setState, getState, ...args);
      };
    });
  });
  return mutationList;
};

const _dispatch = (dispatch, type) => (data) => dispatch(actionCreater(type, data));

const actionCreater = (type, data) => ({ type, data });

export default mutationCreater;
