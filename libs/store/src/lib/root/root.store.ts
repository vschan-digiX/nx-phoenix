import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { initialRootState } from './root-state.initial';
import reducer from './root.reducer';

export const createRootStore = () => {
  const isDevelopment = false;

  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => {
      const defaultMiddleware = getDefaultMiddleware({
        serializableCheck: false,
      });
      return isDevelopment
        ? defaultMiddleware.concat(logger)
        : defaultMiddleware;
    },
    devTools: isDevelopment,
    preloadedState: initialRootState,
  });
};

export type RootState = ReturnType<typeof reducer>
export type AppDispatch = ReturnType<typeof createRootStore>["dispatch"];
