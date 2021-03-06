import React, { PureComponent } from 'react';
import Songs from '../../components/songs/Songs';
import { getSongs } from '../../services/musicBrainzApi';
import PropTypes from 'prop-types';
import Loader from '../../components/loader/Loader';

export default class SongDisplay extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    songs: [],
    albumId: decodeURIComponent(this.props.match.params.id),
    artist: decodeURIComponent(this.props.match.params.artist),
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: true });
    getSongs(this.state.albumId)
      .then(songs => {
        this.setState({ 
          songs,
          loading: false
        });
      });
  }

  render() {
    if(this.state.loading) return <Loader />;
    return (
      <Songs songs={this.state.songs} artist={this.state.artist} />
    );
  }
}
