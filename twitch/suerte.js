
if (q) {
    fetch(`https://twitch.bayzamusic.com/suerte/${touser}`).then(async (response) => {
        await response.json();
    });
} else {
    fetch(`https://twitch.bayzamusic.com/suerte/${user}`).then(async (response) => {
        await response.json();
    });
}
