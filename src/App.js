import logo from './logo.svg';
import './App.css';
import { BrowserRouter  as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';
import Header from './Component/Header/Header';
import Navigation from './Component/Navigation/Navigation';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import Service from './Component/Service/Service';
import Error from './Component/Error/Error';
function App() {
  return (
    <div className="App">
    <Router>
      <Header></Header>
      <Navigation></Navigation>
      <Switch>
        <Route exact path='/home'>
        <Home></Home>
        </Route>
     <Route exact path='/about'>
       <About></About>
     </Route>
     <Route exact path="/services">
    <Services></Services>
     </Route>
      <Route exact path="/service">
       <Service></Service>
      </Route>
      <Route path="*">
      <Error></Error>
      </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
