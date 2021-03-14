import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'

export default function App(){
  return (
    <div className="app">
  
      <Switch>
        <Route 
          exact path="/" 
          render={()=> <Auth />}
        />
        <Route 
          path="/profile"
          render={() => <Profile />}
        />
      </Switch>
    </div>
  )
}