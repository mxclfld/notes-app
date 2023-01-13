import { Middleware, configureStore } from '@reduxjs/toolkit';
import notesReducer from '../features/notesSlice';

const addToLocalStorage: Middleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem(
    'notes',
    JSON.stringify(store.getState().notes.value) || '[]'
  );
};

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(addToLocalStorage),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
