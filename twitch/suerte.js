(async () => {
    if (q) {
        const response = await fetch(`https://twitch.bayzamusic.com/suerte/${touser}`);
        await response.json();
    } else {
        const response = await fetch(`https://twitch.bayzamusic.com/suerte/${user}`);
        await response.json();
    }
})