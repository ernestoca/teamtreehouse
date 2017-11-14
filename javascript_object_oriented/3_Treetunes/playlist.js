function Playlist() {
    this.songs = [];
    this.nowPalyingIndex = 0;
}

Playlist.prototype.add = function(song) {
    this.songs.push(song);
};

Playlist.prototype.play = function() {
    var currentSong = this.songs[this.nowPalyingIndex];
    currentSong.play();
};

Playlist.prototype.stop = function(){
    var currentSong = this.songs[this.nowPalyingIndex];
    currentSong.stop();
};

Playlist.prototype.next = function() {
    this.stop();
    this.nowPalyingIndex++;
    if(this.nowPalyingIndex === this.songs.length) {
       this.nowPalyingIndex = 0;
    }
    this.play();
};

Playlist.prototype.renderInElement = function(list) {
    list.innerHTML = "";
    for(var i=0; i < this.songs.length; i++) {
        list.innerHTML += this.songs[i].toHTML();
    }

};