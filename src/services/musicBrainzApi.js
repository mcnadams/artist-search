export const getArtists = (artist, page, perPage) => {
  return fetch(`https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=${perPage}&offset=${(page - 1) * perPage }`)
    .then(res => res.json())
    .then((results) => ({
      totalPages: Math.ceil(results.count / perPage),
      artists: results.artists
    }));
};

export const getAlbums = (artistId) => {
  return fetch(`https://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then(results => {
      return results.releases;
    })
    .then(albums => {
      albums.forEach(album => {
        if(album['cover-art-archive'].front) {
          album.image = `https://coverartarchive.org/release/${album.id}/front`;
        } else {
          album.image = 'https://loremflickr.com/320/240/music';
        }
      });
      return albums;
    });
};

export const getSongs = (albumId) => {
  return fetch(`https://musicbrainz.org/ws/2/recording?release=${albumId}&fmt=json`)
    .then(res => res.json())
    .then(results => results.recordings);
};
