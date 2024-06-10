const SpotifyWebApi = require('spotify-web-api-node');

// Set up the Spotify API object with your credentials
const spotifyApi = new SpotifyWebApi({
  clientId: '7ef3b66b576b4a62bca432f69422db89',
  clientSecret: 'cf5d7d3b861c47da98adf54054e779b8',
  redirectUri: 'http://www.example.com/callback'
});

// Set the access token (you can obtain this through the authorization process)
spotifyApi.setAccessToken('BQBBljUNUU2Y-nbAwoq9SB3XkJWgm-ThbFiYysHSigjlsOk_K43j5Ge3QlJNhw7Dt8WgC3sHUFGDyXBaLyUv_yw5BKxtjXPZWbBNoqZv8bCWrQ3TUd0');

// Get information about the currently playing track
spotifyApi.getMyCurrentPlayingTrack().then(
  function(data) {
    console.log('Currently playing track:', data.body);
  },
  function(err) {
    console.error(err);
  }
);