import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initFireStoreApp } from './firestore/config'

initFireStoreApp()

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
