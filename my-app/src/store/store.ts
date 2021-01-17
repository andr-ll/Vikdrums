import { Store, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from '../reducers';
import { RootState } from '../type';

const middlewares = [thunk]

export const appStore = (): Store<RootState> => {
    const store = createStore(
        rootReducer,
        undefined,
        applyMiddleware(...middlewares)
    );
    return store;
}