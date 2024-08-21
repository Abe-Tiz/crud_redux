import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './UserReducer.jsx';
import App from './App.jsx';

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Provider store={store}>
       <App />
      </Provider>
  </StrictMode>
);
