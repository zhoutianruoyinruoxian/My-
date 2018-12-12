redux-small
=========================

This package makes redux easier to use

## Installation

To install redux-small,use npm

```
npm install --save redux-small
```
## Methods

**storeCreater(modules,option)**

The only exposed method;
**modules:** (object) an object formed in the project;
**option:** (object) configuration parameter;
```
  option: {
    middleware: [], // An array of middleware you need to use
  }
```
Currently only this configuration, more configuration items will be added in the future to support more features.

## Example

such as a react project

Using this package,your modules file should look like this:

redux/modules/app.js
```
export default {
  state: {
    title: 'app',
  },
  mutations: {
    changeTitle(setState, getState, title) {
      setState({ title });
    },
  },
};
```

redux/modules/index.js
```
import app from './app.js';

export default {
  app,
};
```

your redux output file:

redux/index.js 
```
import modules from './modules';
import storeCreater from 'redux-small';

export const { store, mapMutations, reducers } = storeCreater(modules);
export default store;
```

your project's entry file:

index.js
```
import store from 'src/redux';

ReactDOM.render(
  <Provider store={store}>
    {Router}
  </Provider>,
  document.getElementById('root')
);
```

your react component file:
demo.js
```

import { connect } from 'react-redux';
import { mapMutations } from 'src/redux';

const mapStateToProps = (state, router) => {
  return {
    title: state.app.title,
  };
};

const mapDispatchToProps = () => {
  return {
    changeTitle: mapMutations.app.changeTitle,
  };
};

connect(mapStateToProps, mapDispatchToProps)(yourComponent);
```





