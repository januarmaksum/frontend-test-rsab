import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const berearToken = localStorage.getItem("access_token")

  return (
    <BrowserRouter>
      <Route render={() => {
        return berearToken ? (
          <Redirect to="/login" />
        ) : (
          <Redirect to="/dashboard" />
        )
      }}
      />

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
