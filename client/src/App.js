import {Route} from "react-router-dom"
import Home from "./Views/Home/home"
import Landing from "./Views/Landing/landing"
import CreateActivity from './Views/Form/cretateActiviy';
import CountryDetail from './Views/Detail/countryDetail';
import style from "./App.module.css"

function App() {
  return (
    <div className={style.App}>
    
    <Route exact path="/" component={Landing} />

    <Route path="/home" >
      <Home/>
    </Route>

    <Route path="/createactivity" render={()=><CreateActivity /> } />

    <Route path="/countrydetails/:id" component={CountryDetail} />

    {/*falta la ruta para 404 NOT FOUND */ }
    
    </div>
  );
}

export default App;
