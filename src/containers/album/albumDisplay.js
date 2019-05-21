import React, { PureComponent } from 'react';
import Albums from '../../components/album/Albums';
import { getAlbums } from '../../services/musicBrainzApi';
import PropTypes from 'prop-types';

export default class AlbumDisplay extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  } 

  state = {
    albums: [],
    artistId: decodeURIComponent(this.props.match.params.id),
    artist: decodeURIComponent(this.props.match.params.artist)
  }

  componentDidMount() {
    getAlbums(this.state.artistId)
      .then(albums => {
        this.setState({ albums });
      });
  }

  render() {
    return (
      <Albums albums={this.state.albums} artist={this.state.artist} />
    );
  }
}
