import { configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
export const store=configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk).concat(logger),
})
export default store;