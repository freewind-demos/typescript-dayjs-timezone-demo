import React from 'react'
import ReactDOM from 'react-dom/client'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import App from './App'

dayjs.extend(utc)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
) 