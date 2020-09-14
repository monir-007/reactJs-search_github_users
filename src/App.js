import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";



function App() {
  return (
    <div className="App">
      <Dashboard></Dashboard>
      <Login />
      <Error />
    </div>
  );
}

export default App;
