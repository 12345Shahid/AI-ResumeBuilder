import { useState } from 'react'
import './App.css'
import AdbhutForm from './components/AdbhutForm'
import RongBerongDisplay from './components/RongBerongDisplay'
import ChakriMatcher from './components/ChakriMatcher'

function App() {
  return (
    <>
      <h1>AI-ResumeBuilder: The Weird Resume Tool</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <AdbhutForm />
        <ChakriMatcher />
      </div>
      <RongBerongDisplay />
    </>
  )
}

export default App
