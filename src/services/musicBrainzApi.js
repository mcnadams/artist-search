export const getArtists = (artist) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25`)
    .then(res => res.json())
    .then((results) => {
      return results.artists;
    });
};

export const getAlbums = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then((results) => {
      return results.releases;
    });
};


// http://musicbrainz.org/ws/2/artist?query=<SEARCH>&fmt=json&limit=25
