import { HashRouter as Router,Routes,Route} from "react-router-dom";
import Services from "./pages/Services";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Teams from "./pages/Teams"

const App=() => {
  return (
   <Router>
       <Routes>
           <Route exact path='/' element={<Home />}>

           </Route>

           <Route exact path='/nosservices' element={<Services />}>
             
           </Route>

           <Route exact path='/notreequipe' element={<Teams />}>
             
           </Route>


           <Route path='*' element={<NotFound/>}>
           

           </Route>


       </Routes>
       </Router> 
  
     ); 
  
};
export default App;