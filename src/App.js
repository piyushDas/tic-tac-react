import React, {
  // useEffect
} from 'react'

import {
  AppState,
  // AppContext
} from './context'
import AppShell from './Containers/AppShell'
import './App.css'

const AppView = () => {
  return (
    <div className="App">
      <AppShell />
    </div>
  )
}

const App = () => (
  <AppState>
    <AppView />
  </AppState>
)

export default App
