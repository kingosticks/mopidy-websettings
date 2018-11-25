var mopidy = new Mopidy()

function getCurrentTrackUri() {
    if (mopidy && mopidy.playback) {
        mopidy.playback.getCurrentTrack().then(function(track) {
            text = document.getElementsByName('musicbox__autoplay')[0]
            text.value = ''
            if (track && track.uri) {
                text.value = track.uri;
            }
        });
    }
}
