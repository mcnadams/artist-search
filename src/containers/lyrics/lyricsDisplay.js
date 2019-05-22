import React, { PureComponent } from 'react';
import Lyrics from '../../components/lyrics/Lyrics';
import { getLyrics } from '../../services/lyricsApi';
import PropTypes from 'prop-types';
import Loader from '../../components/loader/Loader';

export default class LyricsDisplay extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    lyrics: '',
    artist: decodeURIComponent(this.props.match.params.artist),
    title: decodeURIComponent(this.props.match.params.title),
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: true });
    getLyrics(this.state.artist, this.state.title)
      .then(lyrics => {
        this.setState({ lyrics, loading: false });
      });
  }

  render() {
    if(this.state.loading) return <Loader />;
    return (
      <Lyrics lyrics={this.state.lyrics} />
    );
  }
}
