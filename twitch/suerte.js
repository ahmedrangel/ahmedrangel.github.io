
if (q) {
  fetch(`https://twitch.bayzamusic.com/suerte/${touser}`).then((response) => {
    response.json().then(body => body);
  });
} else {
  fetch(`https://twitch.bayzamusic.com/suerte/${user}`).then((response) => {
    response.json().then(body => body);
  });
}
