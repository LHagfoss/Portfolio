const token = 'BQA88xgGPzbGpu3RtUiE0Kdt-Rxwg1Gd1g-25h5FoE8d2ojR0iKOfVbf_rA1ZxJUNXZEylIpCEDOnw23H3fETpwNqbYaH_GsKfmZN-rj3Ip1_NLEOoH_O8GFeDFhxpNlNGUD1Ur2w3AI34_qDZZiXN09_lZlMPNxMVMlJ3-cnBAg36aVsuDkUnAsxbJ8-7tbA9_7g4yflbCi7SGxnjYIWBuUMQF2R1OsxaV0oMkimCK6-2Wou-sXfkUOnNUzckihuN2eAsBA40fujz4qCC1ad5D_';

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body)
  });
  return await res.json();
}

async function getCurrentPlayingTrack() {
  const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return await res.json();
}

(async () => {
  const currentTrack = await getCurrentPlayingTrack();
  if (currentTrack.item) {
    console.log(`Currently playing track: ${currentTrack.item.name} by ${currentTrack.item.artists[0].name}`);
  } else {
    console.log('No track currently playing.');
  }
})();