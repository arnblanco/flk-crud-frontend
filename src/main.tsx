import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

// @ts-ignore
import { NyseApp } from './NyseApp'

// @ts-ignore
import { store } from './store'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'animate.css';
import './style.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <NyseApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
