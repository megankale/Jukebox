//Object Jukebox

function Jukebox(){
  this.que= [];
  this.addQue = function(){
    this.que.push(item)
    $("#list").append("<li>" +item+ "<li></li>")}

  this.playJukebox = function(){
		document.querySelector('Playlist').play();
    console.log(Jukebox.que);
	}
  }
//Declaration of globals and myJukebox

var myJukebox = new Jukebox();
var Playlist = [];
var query= document.querySelector("input").value;

document.querySelector('#playButton').addEventListener("click", function(){
    myJukebox.playJukebox();
})

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    var audio = document.getElementById('playSong');
    var query= document.querySelector("input").value;
    console.log(query);
    function searchTracks(query) {
        $.ajax({
            url: 'https://api.spotify.com/v1/search',
            data: {
                q: query,
                type: 'track'
            },
            success: function(response) {
              var track = response.tracks.items[0]
              audio.src = track.preview_url
              var song = audio.src
              // track = response.tracks.items[0].preview_url
              console.log(song);
              $("ul").append("<li>"+query+"</li>");
              $("#track-title").html(query)
              this.playlist.push(song);


              console.log(playlist)

              // audio.play();

              }
          })
    }
    searchTracks(query);
  })





Jukebox();
