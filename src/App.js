import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home/Home";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Services from "./components/Services/Services";
import Footer from "./components/Shared/Footer/Footer";
import Login from "./components/Shared/Login/Login";
import NotFound from "./components/Shared/NotFound/NotFound";
import PrivateRoute from "./components/Shared/Login/PriveteRoute/PriveteRoute"
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (
    <AuthProvider>
      <Router>
      <Header/>
        <Switch>
        
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>

          <PrivateRoute path="/serviceDetail/:id">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>


          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
