import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Entry from './page/Entry/Entry';
import DefaultLayout from './Layout/DefaultLayout';
import FooterComp from './Layout/Partials/FooterComp';
import Dahboard from './page/Dahboard/Dahboard';
import AddTicket from './page/newTicket/AddTicket';
import TicketListing from './page/TicketListing/TicketListing';
import SearchForm from './Components/SearchForm/SearchForm';


function App() {
  return (
    <div>
      {/* <Entry/> */}
   <DefaultLayout> 
      {/* <Dahboard/> */}
      {/* <AddTicket/> */}
      <TicketListing/>
      {/* <SearchForm></SearchForm> */}
   </DefaultLayout> 
     
    </div>
  );
}

export default App;
