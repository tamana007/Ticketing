import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Entry from './page/Entry/Entry';
import DefaultLayout from './Layout/DefaultLayout';
import FooterComp from './Layout/Partials/FooterComp';
import Dahboard from './page/Dahboard/Dahboard';


function App() {
  return (
    <div>
      {/* <Entry/> */}
   <DefaultLayout> 
      <Dahboard/>
   </DefaultLayout> 
     
    </div>
  );
}

export default App;
