import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import api from '../middleware/api'
import rootReducer from '../rootReducer';
import DevTools from '../containers/DevTools';
import auth from '../middlewares/auth';

const configureStore = (preloadedState) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunk, auth, /* api ,*/ createLogger()),
      DevTools.instrument()
    )
  );

    if (module.hot) {
    // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers').default;
        store.replaceReducer(nextRootReducer);
    });
  }

    return store;
};

export default configureStore;
