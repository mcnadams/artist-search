import React, { PureComponent } from 'react';
import Artists from '../../components/artist/Artists';
import { getArtists } from '../../services/musicBrainzApi';

export default class Search extends PureComponent {
  state = {
    artists: [],
    artist: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  fetchArtists = (event) => {
    event.preventDefault();
    getArtists(this.state.artist)
      .then(artists => {
        this.setState({ artists });
      });
  }

  render() {
    return (
    <>
      <form onSubmit={this.fetchArtists}>
        <input type="text" name="artist" onChange={this.handleChange} style={{ fontSize: '1.5em', margin: '5px' }}></input>
        <button style={{ fontSize: '1.5em', padding: '5px' }}>Search</button>
      </form>
      <Artists artists={this.state.artists} />
    </>
    );
  }
}
