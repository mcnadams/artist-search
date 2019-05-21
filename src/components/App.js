import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Search from '../containers/artist/Search';


export default function App() {
  return (
    <Router>
      <Route path="/" component={Search} />
    </Router>
  );
}
