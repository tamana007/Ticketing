import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Entry from "./page/Entry/Entry";
import DefaultLayout from "./Layout/DefaultLayout";
import FooterComp from "./Layout/Partials/FooterComp";
import Dashboard from "./page/Dahboard/Dahboard";
import AddTicket from "./page/newTicket/AddTicket";
import TicketListing from "./page/TicketListing/TicketListing";
import SearchForm from "./Components/SearchForm/SearchForm";
import Ticket from "./page/Ticket/Ticket";
import MessageHistory from "./Components/MessageHistory/MessageHistory";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./Components/PrivateRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" index element={<Entry />} />
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="add-ticket" element={<AddTicket />} />
            <Route path="tickets" element={<TicketListing />} />
            <Route path="search-form" element={<SearchForm />} />
            <Route path="ticket" element={<Ticket />} />
            <Route path="message-history" element={<MessageHistory />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
