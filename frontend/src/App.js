
import ReactDOM from 'react-dom';
import { Route, Switch} from  'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn,getAllCategory} from './actions'
import ReaseachPaper from './containers/AdminReseach';
import Workshop from './containers/AdminWorkshop';
import AddPaper from './components/ReaserchPaper/AddPaper';
import PaperList from './components/ReaserchPaper/PaperList';
import AddWorkshop from './components/Workshops/AddWorkshops';
// import Payment from './components/Payments/Payment';
import WorkshopList from './components/Workshops/workshopList';
import Payment from './components/Payments/Payment';
import ConferenceList from './components/editorConference/ConferenceList'
import AddConference from './components/editorConference/AddConference';
import AdminConference from './containers/AdminConferene/index'
import AdminHome from './containers/AdminConferene/index'
import UpdateConference from './components/editorConference/UpdateConference'
import UpdatePage from './components/editorConference/updatepage'
import ConferencePayment from './components/Payments/conferencepay'

function App()  {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
     dispatch(isUserLoggedIn());
    }
    
   
},[]);
  //routes
  return (
    <div className="App">
     
       <Switch>
         {/* <PrivateRoute path = "/" exact component ={ Home }/> */}
         
         <PrivateRoute path = "/adminreseach" exact component = {ReaseachPaper}/>
         <PrivateRoute path = "/adminworkshop" exact component = {Workshop}/>
         <PrivateRoute path = "/adminconference" exact component = {AdminConference}/>
         <PrivateRoute path = "/adminhome" exact component ={ AdminHome }/>
         <Route path = "/" exact component ={ Home }/>
         <Route path = "/signin" component ={ Signin }/>
         <Route path = "/signup" component ={ Signup }/>
         <Route path= "/add" exact component ={AddPaper}/>
        <Route path= "/papers" exact component ={PaperList}/>
        <Route path= "/addworkshops"  component ={ AddWorkshop }/>
        <Route path= "/workshops"  component ={ WorkshopList }/>
        <Route path= "/addpayment"  component ={ Payment }/>
        <Route path= "/addconference"  component ={ AddConference }/>
        <Route path= "/editorhome"  component ={ ConferenceList }/>
        <Route path= "/updateCinference"  component ={ UpdateConference }/>
        <Route path= "/updatepage"  component ={ UpdatePage }/>
        <Route path= "/paymentconference"  component ={ ConferencePayment }/>
        
        
       </Switch>
     
      
    </div>
  );
}

//ReactDOM.render(<App />, document.getElementById('root'));
window.store = store;
//part12
ReactDOM.render(
   <Provider store = {store}>
     <Router>
    <React.StrictMode>
    <App />
   </React.StrictMode>
     </Router>
    </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
export default App;

//console.log("dd");

