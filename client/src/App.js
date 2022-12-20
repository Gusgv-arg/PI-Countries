import {Route} from "react-router-dom"
import Home from "./Views/Home/home"
import Landing from "./Views/Landing/landing"
import CreateActivity from './Views/Form/cretateActiviy';
import CountryDetail from './Views/Detail/countryDetail';
import error404 from "./Components/Error/error404";
import style from "./App.module.css"
import { Switch } from "react-router-dom";

function App() {
  return (
    
    <div className={style.App}>
    
    <Switch>

      <Route exact path="/" component={Landing} />

      <Route path="/home" >
        <Home/>
      </Route>

      <Route path="/createactivity" render={()=><CreateActivity /> } />

      <Route path="/countrydetails/:id" component={CountryDetail} />
      
      <Route path="*" component={error404} />   

    </Switch>
    
    </div>
  );
}

export default App;
