function findLyrics(artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector('.form');
form.addEventListener('submit', e1 => {
    e1.preventDefault();
    doSubmit();
})

async function doSubmit () {
    const lyrics_el = document.querySelector("#lyrics");
    const artist = document.querySelector("#artist");
    const song = document.querySelector("#song");

    try {
        const lyricsResponse = await findLyrics(artist.value, song.value);
        const data = await lyricsResponse.json();

        if(data.lyrics)
            lyrics_el.innerHTML = data.lyrics;
        else 
            lyrics_el.innerHTML = data.error;
    }
    catch (err) {
        console.log(err);
    }
}



