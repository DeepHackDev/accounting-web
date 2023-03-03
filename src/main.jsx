import React from 'react'
import ReactDOM from 'react-dom/client'

import { Tasks } from './tasks_page'
import './css_config';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tasks />
  </React.StrictMode>,
)
