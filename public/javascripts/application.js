
//Make the video responsive
var respondVideo = function(){
	$('iframe').width("100%");
	$('iframe').height( $('iframe').width() * 0.562);
};


var randomSort = function(){return 0.5 - Math.random();};


$( document ).ready( function(){

	//Randomly select a video
	//var currentVid = loadVids[Math.floor(Math.random() * loadVids.length)];

	loadVids.sort(randomSort);

	var videoValues = [];
	for (var i = 0; i < loadVids.length; i++){
		videoValues.push(i);
	}
	videoValues.sort(randomSort);
	videoValues.sort(randomSort);
	videoValues.sort(randomSort);
	console.log(videoValues);

	$('#embedVideoOne').html(loadVids[videoValues[0]]);
	$('#embedVideoTwo').html(loadVids[videoValues[1]]);
	$('#embedVideoThree').html(loadVids[videoValues[2]]);

	respondVideo();
	$(window).resize(function() {
		respondVideo();
	});

});