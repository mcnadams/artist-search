import React, { PureComponent } from 'react';
import Artists from '../../components/artist/Artists';
import { getArtists } from '../../services/musicBrainzApi';
import Paging from '../../components/paging/Paging';

export default class Search extends PureComponent {
  state = {
    perPage: 10,
    totalPages: 1,
    currentPage: 1,
    artists: [],
    artist: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  fetchArtists = (event) => {
    if(event) {
      event.preventDefault();
      this.setState({ currentPage: 1 });
    }
    getArtists(this.state.artist, this.state.currentPage, this.state.perPage)
      .then(({ artists, totalPages }) => {
        this.setState({ artists, totalPages });
        console.log(artists, totalPages);
      });
  }

  nextPage = page => this.setState({ currentPage: page })

  componentDidUpdate(prevProps, preState) {
    if(preState.currentPage != this.state.currentPage) {
      this.fetchArtists();
    }
  }

  render() {
    return (
    <>
      <form onSubmit={this.fetchArtists}>
        <input type="text" name="artist" onChange={this.handleChange} style={{ fontSize: '1.5em', margin: '5px' }}></input>
        <button style={{ fontSize: '1.5em', padding: '5px' }}>Search</button>
      </form>
      <Paging currentPage={this.state.currentPage} totalPages={this.state.totalPages} nextPage={this.nextPage} fetchArtists={this.fetchArtists}/>
      <Artists artists={this.state.artists} />
    </>
    );
  }
}
