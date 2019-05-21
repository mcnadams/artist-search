import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Search from '../containers/artist/Search';
import AlbumDisplay from '../containers/album/albumDisplay';
import SongDisplay from '../containers/song/songDisplay';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Search} />
      <Route path="/artist/:id" component={AlbumDisplay} />
      <Route path="/album/:id" component={SongDisplay} />
    </Router>
  );
}
