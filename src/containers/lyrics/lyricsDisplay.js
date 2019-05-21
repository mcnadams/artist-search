import React, { PureComponent } from 'react';
import Lyrics from '../../components/lyrics/Lyrics';
import { getLyrics } from '../../services/lyricsApi';
import PropTypes from 'prop-types';

export default class LyricsDisplay extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    lyrics: '',
    artist: decodeURIComponent(this.props.match.params.artist),
    title: decodeURIComponent(this.props.match.params.title)
  }

  componentDidMount() {
    console.log('title', this.state.title, 'artist', this.state.artist);
    getLyrics(this.state.artist, this.state.title)
      .then(lyrics => {
        this.setState({ lyrics });
      });
  }

  render() {
    return (
      <Lyrics lyrics={this.state.lyrics} />
    );
  }
}
