import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice.js';
import tasksReducer from './tasks/tasks-slice.js';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    tasks: tasksReducer,
});

export default rootReducer;
