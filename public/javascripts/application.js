
//Make the video responsive
var respondVideo = function(){
	$('iframe').width("100%");
	$('iframe').height( $('iframe').width() * 0.562);
};



$( document ).ready( function(){

	//Randomly select a video
	var currentVid = loadVids[Math.floor(Math.random() * loadVids.length)];
	$('#embedVideo').html(currentVid);
	//Make the video responsive
	respondVideo();
	$(window).resize(function() {
		respondVideo();
	});

});