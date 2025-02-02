import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import QuestionForm from './components/QuestionAdder/QuestionAdder.jsx'
import FileUpload from './components/FileUpload/FileUpload.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <QuestionForm /> */}
    {/* <FileUpload /> */}
  </React.StrictMode>,
)
