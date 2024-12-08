import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'; 
import {persistor} from './redux/Store.tsx' 
import Store from './redux/Store.tsx' 
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </StrictMode>
)
