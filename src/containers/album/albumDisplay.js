import React, { PureComponent } from 'react';
import Albums from '../../components/album/Albums';
import { getAlbums } from '../../services/musicBrainzApi';
import PropTypes from 'prop-types';
import Loader from '../../components/loader/Loader';

export default class AlbumDisplay extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  } 

  state = {
    albums: [],
    artistId: decodeURIComponent(this.props.match.params.id),
    artist: decodeURIComponent(this.props.match.params.artist),
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: true });
    getAlbums(this.state.artistId)
      .then(albums => {
        this.setState({ albums, loading: false });
      });
  }

  render() {
    if(this.state.loading) return <Loader />;
    return (
      <Albums albums={this.state.albums} artist={this.state.artist} />
    );
  }
}
